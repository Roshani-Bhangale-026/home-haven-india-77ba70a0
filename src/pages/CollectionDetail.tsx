import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

type Product = {
  id: string;
  name: string;
  price: number;
  image_url: string;
  description: string | null;
};

type CollectionData = {
  title: string;
  description: string;
  products: Product[];
};

const CollectionDetail = () => {
  const { collection } = useParams<{ collection: string }>();
  const { toast } = useToast();
  const [data, setData] = useState<CollectionData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCollectionData = async () => {
      try {
        // Fetch collection info
        const { data: collectionData, error: collectionError } = await supabase
          .from("collections")
          .select("title, description")
          .eq("slug", collection)
          .maybeSingle();

        if (collectionError) throw collectionError;
        
        if (!collectionData) {
          setData(null);
          setLoading(false);
          return;
        }

        // Fetch products for this collection
        const { data: productsData, error: productsError } = await supabase
          .from("products")
          .select("id, name, price, image_url, description")
          .eq("collection_id", (await supabase
            .from("collections")
            .select("id")
            .eq("slug", collection)
            .single()
          ).data?.id);

        if (productsError) throw productsError;

        setData({
          title: collectionData.title,
          description: collectionData.description,
          products: productsData || [],
        });
      } catch (error: any) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCollectionData();
  }, [collection, toast]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <p>Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Collection Not Found</h1>
          <Link to="/collections">
            <Button>Return to Collections</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/collections">
            <Button variant="ghost" className="mb-8 group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Collections
            </Button>
          </Link>

          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {data.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {data.description}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.products.map((product, index) => (
              <Card
                key={product.id}
                className="group overflow-hidden border-border hover:shadow-xl transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                  <div className="relative overflow-hidden aspect-square">
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-semibold text-primary mb-4">
                    ${product.price.toFixed(2)}
                  </p>
                  {product.description && (
                    <p className="text-sm text-muted-foreground mb-4">
                      {product.description}
                    </p>
                  )}
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CollectionDetail;

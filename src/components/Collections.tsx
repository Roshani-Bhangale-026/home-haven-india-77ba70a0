import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import diningImage from "@/assets/dining-collection.jpg";
import bedroomImage from "@/assets/bedroom-collection.jpg";
import livingImage from "@/assets/living-collection.jpg";

const defaultImages: Record<string, string> = {
  dining: diningImage,
  bedroom: bedroomImage,
  living: livingImage,
};

type Collection = {
  id: string;
  slug: string;
  title: string;
  description: string;
};

const Collections = () => {
  const { toast } = useToast();
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const { data, error } = await supabase
          .from("collections")
          .select("*")
          .order("created_at", { ascending: true });

        if (error) throw error;
        setCollections(data || []);
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

    fetchCollections();
  }, [toast]);

  if (loading) {
    return (
      <section id="collections" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>Loading collections....</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="collections" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold text-primary tracking-wider uppercase">
            Our Collections
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Explore Our Curated Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From living spaces to bedrooms, discover furniture that brings your vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Card
              key={collection.id}
              className="group overflow-hidden border-border hover:shadow-xl transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={defaultImages[collection.slug] || livingImage}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-foreground">
                    {collection.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  {collection.description}
                </p>
                <Link to={`/collections/${collection.slug}`}>
                  <Button variant="ghost" className="group/button p-0 h-auto font-semibold">
                    View Collection
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;

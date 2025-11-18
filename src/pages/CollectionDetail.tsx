import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const collectionData = {
  dining: {
    title: "Dining Collection",
    description: "Elegant dining sets for memorable gatherings",
    products: [
      { id: 1, name: "Oak Dining Table", price: "$1,299", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&q=80" },
      { id: 2, name: "Velvet Dining Chairs", price: "$399", image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&q=80" },
      { id: 3, name: "Marble Dining Set", price: "$2,499", image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=500&q=80" },
      { id: 4, name: "Modern Sideboard", price: "$899", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500&q=80" },
      { id: 5, name: "Glass Display Cabinet", price: "$749", image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=500&q=80" },
      { id: 6, name: "Wooden Bar Cart", price: "$599", image: "https://images.unsplash.com/photo-1629079447777-1e605162dc8d?w=500&q=80" },
    ],
  },
  bedroom: {
    title: "Bedroom Collection",
    description: "Comfort meets luxury in every piece",
    products: [
      { id: 1, name: "King Platform Bed", price: "$1,899", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&q=80" },
      { id: 2, name: "Upholstered Headboard", price: "$699", image: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=500&q=80" },
      { id: 3, name: "Luxury Nightstand", price: "$449", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&q=80" },
      { id: 4, name: "Wardrobe Armoire", price: "$1,599", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500&q=80" },
      { id: 5, name: "Dresser with Mirror", price: "$999", image: "https://images.unsplash.com/photo-1507652955-f3dcef5a3be5?w=500&q=80" },
      { id: 6, name: "Accent Chair", price: "$549", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&q=80" },
    ],
  },
  living: {
    title: "Living Room Collection",
    description: "Contemporary designs for modern living",
    products: [
      { id: 1, name: "Leather Sofa", price: "$2,199", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80" },
      { id: 2, name: "Coffee Table Set", price: "$799", image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=500&q=80" },
      { id: 3, name: "Modern TV Stand", price: "$649", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80" },
      { id: 4, name: "Accent Bookshelf", price: "$899", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=500&q=80" },
      { id: 5, name: "Ottoman Bench", price: "$399", image: "https://images.unsplash.com/photo-1551298370-9d3d53740c72?w=500&q=80" },
      { id: 6, name: "Floor Lamp", price: "$299", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80" },
    ],
  },
};

const CollectionDetail = () => {
  const { collection } = useParams<{ collection: string }>();
  const data = collectionData[collection as keyof typeof collectionData];

  if (!data) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Collection Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
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
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-semibold text-primary mb-4">
                    {product.price}
                  </p>
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

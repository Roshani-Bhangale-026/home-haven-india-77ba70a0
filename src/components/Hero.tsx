import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-furniture.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">
                Premium Furniture Collection
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
              Transform Your Space Into{" "}
              <span className="text-primary">Something Beautiful</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Discover handcrafted furniture that blends timeless design with modern comfort. 
              Each piece tells a story of craftsmanship and elegance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/collections">
                <Button size="lg" className="text-base group">
                  Explore Collections
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-base">
                  Learn More
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Cities</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
            <img
              src={heroImage}
              alt="Luxury furniture showcase"
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

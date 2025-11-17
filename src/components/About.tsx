import { CheckCircle2 } from "lucide-react";

const features = [
  "Premium quality materials sourced responsibly",
  "Handcrafted by skilled artisans",
  "Customization options available",
  "Sustainable manufacturing practices",
  "Lifetime craftsmanship warranty",
  "Free design consultation",
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 animate-fade-in">
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Craftsmanship That Stands The Test of Time
            </h2>
            <p className="text-lg text-muted-foreground">
              For over two decades, we've been creating furniture that doesn't just fill spaces—it 
              transforms them. Every piece is a testament to our commitment to quality, sustainability, 
              and timeless design.
            </p>
            <p className="text-lg text-muted-foreground">
              Our artisans blend traditional techniques with modern innovation, ensuring each item 
              is built to last generations while meeting contemporary aesthetic standards.
            </p>
          </div>

          <div className="space-y-4 animate-fade-in-up">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="text-center space-y-2 animate-fade-in">
            <div className="text-5xl font-bold text-primary">20+</div>
            <div className="text-muted-foreground">Years of Excellence</div>
          </div>
          <div className="text-center space-y-2 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <div className="text-5xl font-bold text-primary">100%</div>
            <div className="text-muted-foreground">Quality Guaranteed</div>
          </div>
          <div className="text-center space-y-2 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="text-5xl font-bold text-primary">98%</div>
            <div className="text-muted-foreground">Customer Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

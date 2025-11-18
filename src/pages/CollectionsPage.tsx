import Navbar from "@/components/Navbar";
import Collections from "@/components/Collections";
import Footer from "@/components/Footer";

const CollectionsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Collections />
      <Footer />
    </div>
  );
};

export default CollectionsPage;

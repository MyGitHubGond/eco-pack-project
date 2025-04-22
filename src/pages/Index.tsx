
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SolutionsSection from '../components/SolutionsSection';
import StatsSection from '../components/StatsSection';
import ProductsShowcase from '../components/ProductsShowcase';
import ContactForm from '../components/ContactForm';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <SolutionsSection />
        <StatsSection />
        <ProductsShowcase />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

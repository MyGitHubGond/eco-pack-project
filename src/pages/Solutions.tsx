
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Package2, Recycle, Leaf, TreeDeciduous, Box, Boxes } from 'lucide-react';
import SolutionCard from '../components/SolutionCard';

const Solutions = () => {
  const materialSolutions = [
    {
      title: 'Biodegradable Materials',
      description: 'Packaging materials that break down naturally without leaving harmful residues in the environment.',
      icon: <Leaf size={36} />
    },
    {
      title: 'Compostable Packaging',
      description: 'Materials that can be composted along with food waste, returning nutrients to the soil.',
      icon: <TreeDeciduous size={36} />
    },
    {
      title: 'Paper-Based Alternatives',
      description: 'Innovative paper and cardboard solutions with enhanced durability and protective qualities.',
      icon: <Box size={36} />
    },
    {
      title: 'Plant-Based Plastics',
      description: 'Plastics derived from renewable plant materials instead of fossil fuels.',
      icon: <Leaf size={36} />
    }
  ];

  const designSolutions = [
    {
      title: 'Minimalist Design',
      description: 'Reducing packaging material through intelligent design that maintains product protection.',
      icon: <Package2 size={36} />
    },
    {
      title: 'Reusable Packaging',
      description: 'Durable containers designed for multiple uses, reducing the need for single-use packaging.',
      icon: <Boxes size={36} />
    },
    {
      title: 'Recyclable Structures',
      description: 'Packaging designed for easy disassembly and recycling at end of life.',
      icon: <Recycle size={36} />
    },
    {
      title: 'Modular Systems',
      description: 'Adaptable packaging that can be configured for different products, reducing waste.',
      icon: <Box size={36} />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-eco-forest text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-serif font-bold mb-4">Sustainable Packaging Solutions</h1>
            <p className="max-w-2xl text-lg text-eco-mint">
              Discover our comprehensive range of eco-friendly packaging innovations designed to reduce environmental impact while maintaining product protection.
            </p>
          </div>
        </div>

        {/* Materials Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-eco-forest mb-8">Sustainable Materials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {materialSolutions.map((solution, index) => (
                <SolutionCard 
                  key={index}
                  title={solution.title}
                  description={solution.description}
                  icon={solution.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Design Approaches Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-eco-forest mb-8">Innovative Design Approaches</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {designSolutions.map((solution, index) => (
                <SolutionCard 
                  key={index}
                  title={solution.title}
                  description={solution.description}
                  icon={solution.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-eco-forest mb-8">Success Stories</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-eco-mint/20"></div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-eco-forest mb-2">Food Industry Transformation</h3>
                  <p className="text-gray-600 mb-4">
                    How a national food chain reduced plastic waste by 75% through our biodegradable food containers.
                  </p>
                  <a href="#" className="text-eco-leaf hover:text-eco-forest font-medium">Read full case study →</a>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-eco-mint/20"></div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-eco-forest mb-2">E-commerce Packaging Revolution</h3>
                  <p className="text-gray-600 mb-4">
                    An online retailer's journey to completely plastic-free shipping with our paper-based alternatives.
                  </p>
                  <a href="#" className="text-eco-leaf hover:text-eco-forest font-medium">Read full case study →</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;

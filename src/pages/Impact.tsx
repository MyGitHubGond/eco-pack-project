
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StatsSection from '../components/StatsSection';

const Impact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-eco-forest text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-serif font-bold mb-4">Environmental Impact</h1>
            <p className="max-w-2xl text-lg text-eco-mint">
              Understanding the environmental consequences of plastic packaging and how sustainable alternatives can make a difference.
            </p>
          </div>
        </div>

        <StatsSection />

        {/* Plastic Problem Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-eco-forest mb-6">The Plastic Packaging Problem</h2>
              
              <div className="prose prose-lg max-w-none">
                <p>
                  Plastic packaging has become ubiquitous in our daily lives. While it offers convenience and product protection, its environmental impact is devastating and far-reaching.
                </p>
                
                <h3>Scale of the Problem</h3>
                <p>
                  Every year, the world produces over 400 million tons of plastic, with packaging accounting for approximately 40% of this total. Only 9% of all plastic waste ever produced has been recycled, while 12% has been incinerated. The remaining 79% has accumulated in landfills or the natural environment.
                </p>
                
                <h3>Oceans and Wildlife</h3>
                <p>
                  Approximately 8 million pieces of plastic pollution find their way into our oceans daily. There are now 5.25 trillion macro and microplastic pieces floating in the open ocean, weighing up to 269,000 tons. This plastic pollution kills an estimated 100,000 marine mammals and turtles and 1 million sea birds annually.
                </p>
                
                <h3>Human Health Concerns</h3>
                <p>
                  Microplastics have now been found in human blood, lung tissue, and even placenta. The potential health implications of this are still being researched, but early studies suggest links to hormone disruption, developmental delays, and other health concerns.
                </p>
                
                <h3>Climate Impact</h3>
                <p>
                  The production of plastic is extremely carbon-intensive. By 2050, plastic production and incineration could account for 10-13% of the global carbon budget.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Solutions Impact */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-eco-forest mb-6">Impact of Sustainable Alternatives</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-medium text-eco-forest mb-3">Biodegradable Materials</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-eco-leaf font-bold mr-2">✓</span>
                      <span>Break down naturally within 3-6 months</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-eco-leaf font-bold mr-2">✓</span>
                      <span>Leave no toxic residues in soil or water</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-eco-leaf font-bold mr-2">✓</span>
                      <span>Reduce landfill volume by up to 80%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-eco-leaf font-bold mr-2">✓</span>
                      <span>Often made from agricultural by-products</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-medium text-eco-forest mb-3">Reusable Systems</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-eco-leaf font-bold mr-2">✓</span>
                      <span>Eliminate single-use packaging waste</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-eco-leaf font-bold mr-2">✓</span>
                      <span>Reduce resource consumption by 70-90%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-eco-leaf font-bold mr-2">✓</span>
                      <span>Lower carbon footprint after 5-10 uses</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-eco-leaf font-bold mr-2">✓</span>
                      <span>Create closed-loop systems with zero waste</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p>
                  By transitioning to sustainable packaging alternatives, businesses can make a significant positive impact on the environment. Our solutions not only reduce plastic waste but also lower carbon emissions, decrease resource consumption, and protect wildlife and ecosystems.
                </p>
                
                <p>
                  Research indicates that switching from conventional plastic packaging to eco-friendly alternatives can reduce a product's environmental footprint by up to 80%. Additionally, as consumers become more environmentally conscious, sustainable packaging can enhance brand image and customer loyalty.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Impact;

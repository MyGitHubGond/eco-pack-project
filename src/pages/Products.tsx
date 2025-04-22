
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductsShowcase from '../components/ProductsShowcase';

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-eco-forest text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-serif font-bold mb-4">Eco-Friendly Packaging Products</h1>
            <p className="max-w-2xl text-lg text-eco-mint">
              Browse our catalog of sustainable packaging solutions for every industry and application.
            </p>
          </div>
        </div>

        <ProductsShowcase />

        {/* Industries Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-eco-forest mb-8 text-center">Industries We Serve</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-eco-mint/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-eco-leaf">
                    <path d="M3 2h18v8H3zM3 14h18v8H3z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-eco-forest mb-2">Food & Beverage</h3>
                <p className="text-gray-600">
                  Food-safe, compostable packaging solutions that keep products fresh while reducing environmental impact.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-eco-mint/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-eco-leaf">
                    <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-eco-forest mb-2">Retail & E-commerce</h3>
                <p className="text-gray-600">
                  Protective, attractive packaging options that enhance brand image while reducing plastic waste.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-eco-mint/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-eco-leaf">
                    <path d="m8 14 2 2 6-6"/>
                    <path d="M12 2v.5a6.5 6.5 0 0 1-6.5 6.5H5"/>
                    <path d="M5 14h.5a6.5 6.5 0 0 1 6.5 6.5V22"/>
                    <path d="M19 14h-.5a6.5 6.5 0 0 0-6.5 6.5V22"/>
                    <path d="M12 2v.5a6.5 6.5 0 0 0 6.5 6.5H19"/>
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-eco-forest mb-2">Healthcare & Cosmetics</h3>
                <p className="text-gray-600">
                  Clean, safe packaging that meets industry standards while minimizing environmental footprint.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Custom Solutions */}
        <section className="py-16 bg-eco-mint/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold text-eco-forest mb-4">Custom Solutions</h2>
              <p className="text-gray-700 mb-8">
                Need a specialized packaging solution for your unique products? Our team can develop custom eco-friendly packaging tailored to your specific requirements.
              </p>
              <a href="/contact" className="px-6 py-3 bg-eco-leaf text-white font-medium rounded-md hover:bg-eco-forest transition-colors shadow-md inline-block">
                Request Custom Solution
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;

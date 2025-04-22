
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-eco-forest text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-serif font-bold mb-4">Contact Us</h1>
            <p className="max-w-2xl text-lg text-eco-mint">
              Get in touch with our team to discuss how our sustainable packaging solutions can benefit your business.
            </p>
          </div>
        </div>

        <ContactForm />
        
        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-eco-forest mb-8 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium text-eco-forest mb-2">Are your products really biodegradable?</h3>
                  <p className="text-gray-700">
                    Yes, our biodegradable products are certified to break down naturally in composting conditions, typically within 3-6 months depending on the specific material and environmental conditions.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium text-eco-forest mb-2">How do sustainable alternatives compare in cost?</h3>
                  <p className="text-gray-700">
                    While some eco-friendly materials may have a slightly higher upfront cost than conventional plastics, many businesses find that the total cost of ownership is comparable or even lower when considering factors like customer preference, brand value, and potential regulatory compliance.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium text-eco-forest mb-2">Can these materials protect products as well as plastic?</h3>
                  <p className="text-gray-700">
                    Our sustainable packaging solutions are engineered to provide equivalent or superior protection for your products. We conduct rigorous testing to ensure our materials meet or exceed industry standards for durability, moisture resistance, and product preservation.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium text-eco-forest mb-2">Do you offer customization for packaging?</h3>
                  <p className="text-gray-700">
                    Absolutely! We offer custom printing, sizing, and design services to ensure your sustainable packaging aligns perfectly with your brand identity while meeting your functional requirements.
                  </p>
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

export default Contact;

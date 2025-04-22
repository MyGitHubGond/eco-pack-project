
const AboutSection = () => {
  return (
    <section className="py-16 bg-eco-forest text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">The Plastic Problem</h2>
            <p className="mb-4">
              Packaging materials have been both a blessing and a curse for our livelihoods. While packaging helps protect food from deterioration, the widespread use of plastic has led to devastating environmental consequences.
            </p>
            <p className="mb-4">
              Every year, billions of plastic packages end up in landfills and oceans, taking hundreds of years to decompose and releasing harmful microplastics into our environment.
            </p>
            <p className="mb-6">
              At EcoPack, we're addressing this challenge by developing innovative packaging materials and techniques that drastically reduce or eliminate the use of non-biodegradable plastics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-white/10 rounded-lg p-4 flex-1">
                <h4 className="font-medium text-xl mb-2">Our Mission</h4>
                <p className="text-eco-mint">To revolutionize packaging through sustainable, eco-friendly alternatives.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 flex-1">
                <h4 className="font-medium text-xl mb-2">Our Vision</h4>
                <p className="text-eco-mint">A world where packaging enhances life without harming our planet.</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-video bg-eco-mint/20 rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-6 bg-white/90 backdrop-blur-sm rounded-lg max-w-md">
                  <h3 className="text-eco-forest text-2xl font-medium mb-3">Environmental Impact</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-eco-leaf mr-2">✓</span>
                      <span>91% of plastic is never recycled</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-eco-leaf mr-2">✓</span>
                      <span>8 million tons of plastic enter our oceans every year</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-eco-leaf mr-2">✓</span>
                      <span>Plastic takes 400+ years to decompose</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-eco-leaf mr-2">✓</span>
                      <span>Packaging accounts for 40% of all plastic produced</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-eco-leaf rounded-lg -z-10"></div>
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-eco-ocean rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

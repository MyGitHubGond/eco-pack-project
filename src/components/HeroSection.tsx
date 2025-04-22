
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-eco-mint/10 via-white to-eco-sky/10 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-eco-leaf/5 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-eco-sky/10 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-eco-coral/5 blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-eco-forest mb-6">
            Sustainable Packaging for a Better Future
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Innovative eco-friendly packaging solutions that protect both your products and our planet.
            Join us in reducing plastic waste with biodegradable alternatives.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/solutions"
              className="px-6 py-3 bg-eco-leaf text-white font-medium rounded-md hover:bg-eco-forest transition-colors shadow-md hover:shadow-lg"
            >
              Explore Solutions
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-white text-eco-forest font-medium rounded-md border border-eco-leaf hover:bg-eco-mint/10 transition-colors shadow-sm hover:shadow-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Wave SVG separator */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#ffffff">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;

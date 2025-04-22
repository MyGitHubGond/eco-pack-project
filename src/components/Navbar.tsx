
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-eco-mint/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-eco-leaf flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M12 2L3 9l9 7 9-7-9-7z" />
                <path d="M3 9v5l9 7 9-7V9" />
              </svg>
            </div>
            <span className="font-serif text-xl font-bold text-eco-forest">EcoPack</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-eco-forest hover:text-eco-leaf font-medium transition-colors">Home</Link>
            <Link to="/solutions" className="text-eco-forest hover:text-eco-leaf font-medium transition-colors">Solutions</Link>
            <Link to="/impact" className="text-eco-forest hover:text-eco-leaf font-medium transition-colors">Environmental Impact</Link>
            <Link to="/products" className="text-eco-forest hover:text-eco-leaf font-medium transition-colors">Products</Link>
            <Link to="/contact" className="text-eco-forest hover:text-eco-leaf font-medium transition-colors">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-eco-forest"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t mt-3 border-eco-mint/20">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-eco-forest hover:text-eco-leaf font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/solutions" className="text-eco-forest hover:text-eco-leaf font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Solutions</Link>
              <Link to="/impact" className="text-eco-forest hover:text-eco-leaf font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Environmental Impact</Link>
              <Link to="/products" className="text-eco-forest hover:text-eco-leaf font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Products</Link>
              <Link to="/contact" className="text-eco-forest hover:text-eco-leaf font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

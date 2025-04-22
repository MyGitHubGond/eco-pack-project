import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-eco-mint/10">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-eco-forest">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! Page not found</p>
        <a href="/" className="px-6 py-3 bg-eco-leaf text-white font-medium rounded-md hover:bg-eco-forest transition-colors shadow-md">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

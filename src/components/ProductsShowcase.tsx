
import ProductCard from './ProductCard';

const ProductsShowcase = () => {
  const products = [
    {
      imageSrc: "https://images.unsplash.com/photo-1604054094723-3a949e4a8393?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      name: "Bamboo Food Container",
      description: "Durable food container made from sustainably harvested bamboo.",
      material: "Bamboo Fiber"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1601655781320-205e34c94eb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      name: "Recycled Paper Mailers",
      description: "Strong, water-resistant shipping mailers made from 100% recycled paper.",
      material: "Recycled Paper"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      name: "Compostable Food Wraps",
      description: "Natural alternative to plastic wrap made from organic cotton and beeswax.",
      material: "Beeswax & Cotton"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1593085260707-5377ba37f868?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      name: "Mushroom Packaging",
      description: "Innovative packaging grown from mushroom mycelium, fully biodegradable.",
      material: "Mushroom Mycelium"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1607215446320-206293929900?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      name: "Seaweed Packaging Film",
      description: "Transparent packaging film made from seaweed, dissolves in water.",
      material: "Seaweed Extract"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1602618135005-165bc6b0a71e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      name: "Palm Leaf Plates",
      description: "Sturdy, elegant plates made from fallen palm leaves. No trees harmed.",
      material: "Fallen Palm Leaves"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1492683532728-9cb5ec9269e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      name: "Corn Starch Packing Peanuts",
      description: "Protective packaging peanuts that dissolve in water and are compostable.",
      material: "Corn Starch"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1589533610925-1cffc309ebaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      name: "Reusable Silicone Bags",
      description: "Durable, airtight bags that replace single-use plastic bags.",
      material: "Food-Grade Silicone"
    }
  ];

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-eco-forest mb-4">Sustainable Products</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Explore our range of eco-friendly packaging products designed for various industries and applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard 
              key={index}
              imageSrc={product.imageSrc}
              name={product.name}
              description={product.description}
              material={product.material}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;

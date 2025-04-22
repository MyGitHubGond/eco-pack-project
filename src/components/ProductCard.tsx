
interface ProductCardProps {
  imageSrc: string;
  name: string;
  description: string;
  material: string;
  price?: string;
}

const ProductCard = ({ imageSrc, name, description, material, price }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="h-48 bg-eco-mint/10 flex items-center justify-center">
        <img 
          src={imageSrc} 
          alt={name} 
          className="max-h-full max-w-full object-contain" 
        />
      </div>
      <div className="p-5">
        <h3 className="font-medium text-lg text-eco-forest mb-1">{name}</h3>
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        <div className="flex justify-between items-center">
          <span className="inline-block bg-eco-mint/20 rounded-full px-3 py-1 text-sm font-medium text-eco-forest">
            {material}
          </span>
          {price && (
            <span className="text-eco-forest font-medium">{price}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

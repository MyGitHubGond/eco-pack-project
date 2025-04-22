
import { Package2, Recycle, Leaf, TreeDeciduous } from 'lucide-react';
import SolutionCard from './SolutionCard';

const SolutionsSection = () => {
  const solutions = [
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
      title: 'Recyclable Alternatives',
      description: 'Innovative materials designed for easy recycling and multiple life cycles.',
      icon: <Recycle size={36} />
    },
    {
      title: 'Reusable Packaging',
      description: 'Durable containers designed for multiple uses, reducing the need for single-use packaging.',
      icon: <Package2 size={36} />
    }
  ];

  return (
    <section id="solutions" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-eco-forest mb-4">Sustainable Solutions</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our innovative packaging alternatives reduce environmental impact while maintaining product protection and visual appeal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
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
  );
};

export default SolutionsSection;

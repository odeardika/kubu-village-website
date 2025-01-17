import Image from 'next/image';
import { CardProps } from '@/types/Card';

const Card: React.FC<CardProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <Image 
        src={imageUrl} 
        alt={title} 
        width={400} 
        height={250} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 line-clamp-4">{description}</p>
      </div>
    </div>
  );
};

export default Card;

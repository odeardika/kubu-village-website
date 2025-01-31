import Image from 'next/image';
import { CardProps } from '@/types/Card';

const Card: React.FC<CardProps> = ({ imageUrl, title, description, href, style = "" }) => {
  return (
    <a 
      href={href} 
      className={`
        w-80 min-w-80  // Fixed width 320px dan minimum width yang sama
        bg-white rounded-lg shadow-lg overflow-hidden 
        hover:shadow-2xl transition-shadow duration-300
        ${style}
      `}
    >
      <div className="w-full h-48 relative overflow-hidden">
        <Image 
          src={imageUrl} 
          alt={title}
          fill  // Menggunakan fill untuk mengisi container parent
          sizes="(max-width: 640px) 100vw, 320px"  // Optimasi responsif
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 line-clamp-4">{description}</p>
      </div>
    </a>
  );
};

export default Card;
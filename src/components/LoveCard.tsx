import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoveCardProps {
  image: string;
  message: string;
  className?: string;
  height?: number;
}

export function LoveCard({ image, message, className, height = 350 }: LoveCardProps) {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-md transition-all hover:shadow-xl",
        className
      )}
      style={{ height: `${height}px` }}
    >
      <img
        src={image}
        alt="Memory"
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute bottom-0 p-4 text-white">
          <p className="text-base sm:text-lg font-medium leading-snug">{message}</p>
        </div>
      </div>
      <button 
        className="absolute right-3 top-3 rounded-full bg-white/90 dark:bg-gray-800/90 p-2 opacity-0 transition-opacity group-hover:opacity-100 sm:hover:scale-110"
        aria-label="Like"
      >
        <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
      </button>
    </div>
  );
}
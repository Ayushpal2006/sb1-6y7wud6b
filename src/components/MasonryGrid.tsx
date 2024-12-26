import { useEffect, useState } from 'react';
import { LoveCard } from './LoveCard';
import { memories } from '@/data/memories';

export function MasonryGrid() {
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width < 640) setColumns(1);
      else if (width < 1024) setColumns(2);
      else setColumns(3);
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  const getColumnMemories = (columnIndex: number) => {
    return memories.filter((_, index) => index % columns === columnIndex);
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: columns }, (_, index) => (
        <div key={index} className="flex flex-col gap-4">
          {getColumnMemories(index).map((memory, memoryIndex) => (
            <LoveCard
              key={memoryIndex}
              {...memory}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
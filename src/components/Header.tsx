import { Heart } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className="sticky top-0 z-10 w-full bg-white/80 px-4 py-4 backdrop-blur-sm dark:bg-gray-900/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-red-500" />
          <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            My Heart's Pinterest
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button className="rounded-full bg-red-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-600 sm:px-6">
            I Love You! ❤️
          </button>
        </div>
      </div>
    </header>
  );
}
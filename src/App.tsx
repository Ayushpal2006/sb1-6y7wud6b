import { Header } from './components/Header';
import { MasonryGrid } from './components/MasonryGrid';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      <main className="mx-auto max-w-7xl p-4">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="mb-4 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Dear <span className="text-red-500">Love</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-gray-600 dark:text-gray-300 px-4">
            I've created this space to show you how much you mean to me. Each image represents a special moment, 
            a feeling, or a thought about you. You're the most amazing person I've ever met, and I want you to know that...
            I love you! 💕 
          </p>
        </div>

        <MasonryGrid />

        <footer className="mt-16 border-t border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 py-8 text-center text-gray-600 dark:text-gray-400">
          <p>Made with ❤️ just for you</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
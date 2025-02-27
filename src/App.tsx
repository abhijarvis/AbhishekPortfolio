import { Header } from './components/Header';
import { Hero } from './components/hero/Hero';
import { Timeline } from './components/Timeline';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { useTheme } from './hooks/useTheme';

function App() {
  useTheme(); // Initialize theme

  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <Timeline />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-purple-900 dark:bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>© {currentYear} Abhishek Pandit. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

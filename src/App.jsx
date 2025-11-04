import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCourses from './components/FeaturedCourses';
import CombinedHighlights from './components/CombinedHighlights';

function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Hyosene Battery Pvt. Ltd. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <a href="#privacy" className="hover:text-gray-900">Privacy</a>
          <a href="#terms" className="hover:text-gray-900">Terms</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <FeaturedCourses />
        <CombinedHighlights />
      </main>
      <Footer />
    </div>
  );
}

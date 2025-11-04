import { useState } from 'react';
import { Menu, X, Rocket, GraduationCap, FlaskConical, Users } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'STEM Courses', href: '#courses' },
    { label: 'Research', href: '#research' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Primary">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2" aria-label="Hyosene Battery Pvt. Ltd.">
            <Rocket className="h-6 w-6 text-blue-600" aria-hidden="true" />
            <span className="font-bold tracking-tight text-gray-900">Hyosene Battery</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#courses" className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500" aria-label="Explore STEM Courses">
              <GraduationCap className="h-4 w-4" /> Courses
            </a>
            <a href="#research" className="inline-flex items-center gap-2 rounded-lg border border-cyan-600 px-3 py-2 text-sm font-semibold text-cyan-700 hover:bg-cyan-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500" aria-label="Explore Battery Research">
              <FlaskConical className="h-4 w-4" /> Research
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-gray-100 py-2" role="dialog" aria-label="Mobile Navigation">
            <div className="flex flex-col gap-1 py-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded text-gray-700 hover:bg-gray-50"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-2 px-3 pt-2">
                <a href="#team" className="inline-flex items-center gap-2 rounded bg-blue-600 px-3 py-2 text-sm font-semibold text-white" aria-label="Meet the Team">
                  <Users className="h-4 w-4" /> Team
                </a>
                <a href="#courses" className="inline-flex items-center gap-2 rounded bg-green-600 px-3 py-2 text-sm font-semibold text-white" aria-label="See Courses">
                  <GraduationCap className="h-4 w-4" /> Courses
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

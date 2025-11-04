import { ArrowRight, Battery, GraduationCap, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-gradient-to-br from-blue-700 to-blue-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
            Next‑Generation Graphene Battery Systems
          </h1>
          <p className="mt-4 text-lg text-blue-100">
            Lighter. Stronger. Safer. We power aerospace, drones, and advanced mobility while inspiring the next generation through hands‑on STEM programs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#research" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-blue-900 shadow hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
              <Battery className="h-4 w-4" /> Learn More
            </a>
            <a href="#courses" className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-200">
              <GraduationCap className="h-4 w-4" /> Explore Courses
            </a>
            <a href="#team" className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
              <Users className="h-4 w-4" /> Meet the Team <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0 opacity-20">
        <div className="absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-white blur-3xl" />
      </div>
    </section>
  );
}

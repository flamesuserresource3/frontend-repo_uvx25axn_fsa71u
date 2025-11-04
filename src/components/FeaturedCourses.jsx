import CourseCard from './CourseCard';

const courses = [
  {
    id: 1,
    title: 'Flight Fundamentals & Paper Glider Physics',
    duration: '10',
    durationText: '10 days × 1.5 hrs',
    focusArea: 'Lift, drag, thrust with simple paper experiments',
    fee: 599,
    benefits: ['Understands flight basics', 'Hands-on creativity'],
    icon: '✈️',
    category: 'beginner',
  },
  {
    id: 2,
    title: 'Drone Basics & Aerodynamics Simulation',
    duration: '10',
    durationText: '10 days × 1.5 hrs',
    focusArea: 'Drone parts, stability, simulator',
    fee: 899,
    benefits: ['Intro to UAV tech', 'Control concepts'],
    icon: '🛸',
    category: 'beginner',
  },
  {
    id: 3,
    title: 'Virtual RC Aircraft Design Project',
    duration: '30',
    durationText: '30 days × 1.5 hrs',
    focusArea: 'Full design to simulation',
    fee: 1299,
    benefits: ['Advanced flight design', 'Simulation practice'],
    icon: '🛩️',
    category: 'advanced',
  },
];

export default function FeaturedCourses() {
  return (
    <section id="courses" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Featured Courses</h2>
            <p className="mt-2 text-gray-600">Handpicked programs to spark curiosity and build solid STEM foundations.</p>
          </div>
          <a href="#all-courses" className="text-sm font-semibold text-green-700 hover:text-green-800">View all courses →</a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

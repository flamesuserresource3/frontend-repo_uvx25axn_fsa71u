import { useState } from 'react';
import EnrollmentModal from './EnrollmentModal';

export default function CourseCard({ course }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="group flex w-full max-w-sm flex-col justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-md transition-transform duration-200 hover:scale-[1.03] hover:shadow-lg"
      style={{ height: 380 }}
      aria-label={`${course.title} course card`}
    >
      <div>
        <div className="mb-3 flex h-36 items-center justify-center rounded-lg bg-gray-50 text-5xl" aria-hidden="true">
          <span role="img" aria-label="course-icon">{course.icon}</span>
        </div>
        <h3 className="line-clamp-2 text-lg font-semibold text-gray-900">{course.title}</h3>
        <div className="mt-1 inline-flex rounded-full bg-blue-50 px-3 py-0.5 text-xs font-medium text-blue-700">{course.durationText || `${course.duration} days`}</div>
        <p className="mt-2 text-sm text-gray-600">{course.focusArea}</p>
        <ul className="mt-3 list-disc pl-5 text-xs text-gray-600">
          {course.benefits.slice(0, 3).map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-base font-bold text-gray-900">₹ {course.fee}</div>
        <button
          onClick={() => setOpen(true)}
          className="rounded-lg bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
          aria-label={`Enroll now in ${course.title}`}
        >
          Enroll Now
        </button>
      </div>
      <EnrollmentModal open={open} onClose={() => setOpen(false)} course={course} />
    </div>
  );
}

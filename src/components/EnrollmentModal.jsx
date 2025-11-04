import { useEffect } from 'react';

export default function EnrollmentModal({ open, onClose, course }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open || !course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={`Enroll in ${course.title}`}>
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative w-full max-w-2xl rounded-xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h3 className="text-lg font-semibold">Enroll in Course</h3>
          <button onClick={onClose} aria-label="Close enrollment form" className="rounded p-2 hover:bg-gray-100">✕</button>
        </div>
        <div className="grid gap-6 px-6 py-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <div className="rounded-lg bg-gray-50 p-4">
              <p className="font-medium">Course: <span className="text-gray-700">{course.title}</span></p>
              <p className="text-sm text-gray-600">Duration: {course.durationText || `${course.duration} days`}</p>
              <p className="text-sm text-gray-600">Price: ₹{course.fee}</p>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="parentName" className="text-sm font-medium">Parent/Guardian Name</label>
            <input id="parentName" name="parentName" type="text" required className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="studentName" className="text-sm font-medium">Student Name</label>
            <input id="studentName" name="studentName" type="text" required className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="grade" className="text-sm font-medium">Student Grade</label>
            <select id="grade" name="grade" className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
              <option>Grade 6</option>
              <option>Grade 7</option>
              <option>Grade 8</option>
              <option>Grade 9</option>
              <option>Grade 10</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input id="email" name="email" type="email" required className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="phone" className="text-sm font-medium">Phone</label>
            <input id="phone" name="phone" type="tel" required className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div className="sm:col-span-2 flex flex-col gap-1">
            <label htmlFor="city" className="text-sm font-medium">City</label>
            <input id="city" name="city" type="text" className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>

          <div className="sm:col-span-2 flex items-center gap-2">
            <input id="terms" type="checkbox" className="h-4 w-4 rounded border-gray-300" />
            <label htmlFor="terms" className="text-sm text-gray-700">I agree to terms & conditions</label>
          </div>

          <div className="sm:col-span-2 flex justify-end gap-3 pt-2">
            <button onClick={onClose} className="rounded-lg border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Cancel</button>
            <button onClick={() => { alert('Proceeding to payment gateway...'); onClose(); }} className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700">Proceed to Payment</button>
          </div>
        </div>
      </div>
    </div>
  );
}

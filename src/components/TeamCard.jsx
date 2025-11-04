import { Linkedin, Mail, Award } from 'lucide-react';

export default function TeamCard({ member }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-transform hover:scale-[1.02] hover:shadow-lg" aria-label={`Profile card for ${member.name}`}>
      <div className="flex flex-col items-center text-center">
        <img
          src={member.image}
          alt={`${member.name} profile photo`}
          className="h-32 w-32 rounded-full object-cover ring-4 ring-blue-50"
        />
        <div className="mt-4">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold" style={{ backgroundColor: `${member.roleColor}20`, color: member.roleColor }}>
            <Award className="h-3.5 w-3.5" /> {member.role}
          </div>
          <h3 className="mt-3 text-xl font-bold text-gray-900">{member.name}</h3>
          <p className="text-blue-700 font-semibold">{member.title}</p>
          <p className="text-sm text-gray-600">{member.discipline}</p>
        </div>
        <p className="mt-3 line-clamp-4 text-sm text-gray-700 text-justify group-hover:line-clamp-6 transition-all">
          {member.bio}
        </p>
        <ul className="mt-3 list-disc text-left text-sm text-gray-700 pl-5 self-stretch">
          {member.keyHighlights.map((k, i) => (
            <li key={i}>{k}</li>
          ))}
        </ul>
        <div className="mt-4 flex items-center gap-3">
          {member.socials?.linkedin && (
            <a href={member.socials.linkedin} aria-label={`${member.name} on LinkedIn`} className="rounded-full p-2 text-blue-700 hover:bg-blue-50">
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {member.socials?.email && (
            <a href={`mailto:${member.socials.email}`} aria-label={`Email ${member.name}`} className="rounded-full p-2 text-gray-700 hover:bg-gray-100">
              <Mail className="h-5 w-5" />
            </a>
          )}
          {member.socials?.twitter && (
            <a href={member.socials.twitter} aria-label={`${member.name} on Twitter`} className="rounded-full p-2 text-sky-500 hover:bg-sky-50">
              {/* Using generic link as Twitter icon may vary; keeping accessibility */}
              <span className="text-sm font-medium">X</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

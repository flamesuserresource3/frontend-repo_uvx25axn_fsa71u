import TeamCard from './TeamCard';

const teamMembers = [
  {
    id: 1,
    name: 'KARTHIKESH HARIDOSS',
    title: 'Founder & CEO',
    role: 'Founder & CEO',
    discipline: 'Aeronautical Engineer',
    bio:
      'An Aeronautical Engineer with multidisciplinary expertise across aerospace, battery technology, and advanced materials. With over 5 years of hands-on experience in battery innovation and space technology, Karthikesh leads Hyosene Battery Pvt. Ltd. with a mission to redefine sustainable energy systems.',
    keyHighlights: ['5+ years in battery innovation', 'Judge at national hackathons', 'Space technology background'],
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=512&auto=format&fit=crop',
    socials: { linkedin: '', twitter: '', email: '' },
    roleColor: '#28A745',
  },
  {
    id: 2,
    name: 'ARSIN SHANE',
    title: 'Chief Technology Officer',
    role: 'Chief Technology Officer',
    discipline: 'Chemical Engineer',
    bio:
      'Specialist in graphene-based and lithium-derived batteries, leading R&D in advanced cell chemistry and scalable manufacturing readiness for aerospace-grade applications.',
    keyHighlights: ['Graphene & lithium expertise', 'Prototype to pilot-lines'],
    image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=512&auto=format&fit=crop',
    socials: { linkedin: '', twitter: '', email: '' },
    roleColor: '#2563EB',
  },
  {
    id: 3,
    name: 'SARAVANAN',
    title: 'Chief Financial Officer',
    role: 'Chief Financial Officer',
    discipline: 'Simulation Specialist & Finance',
    bio:
      'Expert in thermal management and structural analysis with a strong finance background, ensuring both performance and sustainability of operations.',
    keyHighlights: ['Thermal & structural analysis', 'Financial strategy'],
    image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=512&auto=format&fit=crop',
    socials: { linkedin: '', twitter: '', email: '' },
    roleColor: '#14B8A6',
  },
  {
    id: 4,
    name: 'LOHITHANATHAN',
    title: 'Chief Operating Officer',
    role: 'Chief Operating Officer',
    discipline: 'Electronics & Electrical Specialist',
    bio:
      'Hands-on leader in EV and drone power electronics with deep experience in BMS design and testing for reliable, high-performance systems.',
    keyHighlights: ['EV & drone power electronics', 'BMS design'],
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=512&auto=format&fit=crop',
    socials: { linkedin: '', twitter: '', email: '' },
    roleColor: '#F59E0B',
  },
  {
    id: 5,
    name: 'AJAY',
    title: 'Chief Information Officer',
    role: 'Chief Information Officer',
    discipline: 'AI Innovation Lead & Cybersecurity Expert',
    bio:
      'Leads AI-driven battery monitoring and predictive analytics while safeguarding digital infrastructure across R&D and operations.',
    keyHighlights: ['Machine learning for batteries', 'Cybersecurity'],
    image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=512&auto=format&fit=crop',
    socials: { linkedin: '', twitter: '', email: '' },
    roleColor: '#7C3AED',
  },
];

export default function CombinedHighlights() {
  return (
    <section id="highlights" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div id="team" className="scroll-mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Our Team</h2>
            <p className="mt-2 text-gray-600">Passionate engineers and scientists redefining sustainable energy.</p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {teamMembers.slice(0, 4).map((m) => (
                <TeamCard key={m.id} member={m} />
              ))}
            </div>
            <div className="mt-6">
              <a href="#about" className="text-sm font-semibold text-blue-700 hover:text-blue-800">Meet the full team →</a>
            </div>
          </div>

          <div id="research" className="scroll-mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Battery Innovation</h2>
            <p className="mt-2 text-gray-600">Graphene-driven energy systems for aerospace and drones.</p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { title: 'Higher Power Density', desc: 'More output with less size and weight', icon: '⚡' },
                { title: 'Longer Flight Time', desc: 'Increased endurance and range per charge', icon: '🛫' },
                { title: 'Faster Charging', desc: 'Reduced downtime during operations', icon: '🔋' },
                { title: 'Minimal Heat Generation', desc: 'Safe and efficient thermal management', icon: '❄️' },
              ].map((o, i) => (
                <div key={i} className="rounded-xl border border-cyan-200 bg-white p-5">
                  <div className="text-3xl" aria-hidden="true">{o.icon}</div>
                  <h3 className="mt-2 font-semibold text-gray-900">{o.title}</h3>
                  <p className="text-sm text-gray-600">{o.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <a href="#research-detail" className="inline-flex items-center gap-2 rounded-lg border border-cyan-600 px-4 py-2 text-sm font-semibold text-cyan-700 hover:bg-cyan-50">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

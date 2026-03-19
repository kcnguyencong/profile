import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function About() {
  const projects = [
    {
      id: 'alpha',
      title: 'Alpha Banking Core',
      description: 'Global transaction engine for decentralized finance.',
      tag: 'Fintech',
      color: '#0041c8',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaGAp7VjoVQW0fjLB4A816SwCXd_gLpXj42mk9TN_v-QjF-zS8Gf7pCU2aEUDiPEqNSWLC8tQeSTIM8qNrVHQleswYGqH9-tbdfbci3Kxt164XKu75opYQv6wlGHGSzGqI2yS6gM9gQOjucKJRxYELKMSPzg2OAKTGjmZMspzoo1U3JjLYV1zcKa3woMKnNygvN0vjsSsIfrIqk4DdSSQvahLsHqI6m-35E5eUIpLIlsyg9aVsz7FOJ1-92WrBucicWvHF6mdEXg'
    },
    {
      id: 'neural',
      title: 'Neural Workspace',
      description: 'An AI-powered collaborative design environment.',
      tag: 'Artificial Intelligence',
      color: '#1a1c1c',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0gCiJblkd8T6c59a80MNPphp_ypi7-WH5MzU8vtFOA_UmLT8EHdhmSBvQ4ullOGo0N-5sWEg4idlP9LxQIwscWeZ3LiGoVOEPBq-yj92iFXLFl05D7sa_cXuF1yrSkIfm26R0SnED4LtwrfyDQfLAWhKRxCXrakXqPMWLUchx6V-Kjgl4pdR__Jd0xPIao0eVIdjFbvMT42c_psl0O02MO0NhblVx7ySC1zhDxBbh115fVLZkabS1iT-z8MMyFHBEN2DJXaus9w'
    },
    {
      id: 'luxe',
      title: 'Luxe Collective',
      description: 'Editorial shopping experience for luxury curation.',
      tag: 'E-commerce',
      color: '#e67e22',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkkJbrdIFghxpIL22wc0hTJfzKUvhww-WZF4qdZ5sepn0k71QNED8Rio5sHinNAK_fddn1ay86SfxhnVaxKJCc-aMvSX6F3KkBhIedzHsBzUOVSw0wZW7jx2W1_FWHtuZJfVad7Y29TlY7HhUXW5D6k4EhhxsNw3YDtwGltef-dNeEM1i9b-MNGRCiT7oG_-qsaX0RG9IcXzbrwmvsln2C_GHBdH0SP0y64lgiKnlah32YRk1S4yFFW8eVOBGNckMKSK-FNzzyow'
    },
    {
      id: 'fleet',
      title: 'FleetFlow Ops',
      description: 'Real-time supply chain management and visibility.',
      tag: 'Logistics',
      color: '#27ae60',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxwU_a3BGilMwpYYx7LLZgQnUYxpzU34OPfuwza16_gR42ZflpddgaYI79A7m8cj6xEEKD8PMJCMLHxwn4iE_iT5xVeFhZFo3hQfzUH5l3LbVuF_VrEu7DsGkUL2eeynM-dO8vzX4apdL3RzzKznASyKL9gptEhxrR5DlJvGhI1BYaWclJHQc24QQpWy6MDSczPaqH6UzFyr6HYm7r9EWicZVC5IR6s8avBd3_0z0OfmvfwL6AL-2YD8J7PYDV4L1KYnfckgsZMQ'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32"
    >
      {/* Hero Section */}
      <section className="editorial-container mb-32 md:mb-48">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-headline text-6xl md:text-8xl font-black tracking-tighter text-on-surface leading-[0.9] mb-12"
          >
            Designer & UI/UX Specialist
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-8">
              <p className="text-2xl md:text-3xl font-body font-light text-on-surface-variant leading-relaxed">
                With over <span className="text-on-surface font-semibold">8+ years of experience</span> crafting high-performance digital ecosystems across Fintech, AI-driven platforms, and E-commerce.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col gap-4">
              <div className="h-px bg-outline-variant/30 w-full"></div>
              <p className="text-sm text-on-surface-variant font-medium uppercase tracking-tighter">Current focus</p>
              <p className="text-sm font-bold">Scaling Fintech Solutions & AI Interface Engineering</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="editorial-container mb-48">
        <div className="flex items-baseline justify-between mb-16">
          <h2 className="font-headline text-4xl font-bold tracking-tight">Dự án tiêu biểu</h2>
          <div className="h-px flex-grow mx-8 bg-outline-variant/20 hidden md:block"></div>
          <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold">04 Selected Works</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={project.id === 'alpha' ? '/case-study/nexus' : '#'}
              className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
            >
              <div className="aspect-[4/5] mb-8 overflow-hidden relative" style={{ backgroundColor: project.color }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover mix-blend-overlay opacity-80 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-8 left-8">
                  <span className="bg-white text-stone-900 px-4 py-1 text-[10px] font-bold uppercase tracking-widest">
                    {project.tag}
                  </span>
                </div>
              </div>
              <h3 className="font-headline text-3xl font-bold mb-2">{project.title}</h3>
              <p className="text-on-surface-variant font-body">{project.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-surface-container-low py-32">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="font-headline text-5xl font-bold tracking-tighter mb-6">Expertise</h2>
              <p className="text-on-surface-variant max-w-xs">Bridging the gap between conceptual research and technical execution.</p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: 'Product Design', skills: ['Strategy & Roadmap', 'Information Architecture', 'Design Systems', 'Prototyping'], icon: 'category' },
                { title: 'Interface Engineering', skills: ['Responsive Web', 'Native iOS/Android', 'Motion Design', 'Design-to-Code'], icon: 'terminal' },
                { title: 'User Research', skills: ['Usability Testing', 'Data Analysis', 'User Personas', 'A/B Testing'], icon: 'biotech' }
              ].map((skill) => (
                <div key={skill.title} className="flex flex-col gap-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-white">
                    <span className="material-symbols-outlined text-primary text-3xl">{skill.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-4">{skill.title}</h4>
                    <ul className="space-y-3 text-sm text-on-surface-variant font-medium">
                      {skill.skills.map(s => <li key={s}>{s}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-48 editorial-container text-center">
        <h2 className="font-headline text-5xl md:text-7xl font-black tracking-tighter mb-12">Sẵn sàng khởi tạo giá trị?</h2>
        <p className="text-xl text-on-surface-variant mb-16 max-w-2xl mx-auto">Hãy cùng nhau xây dựng những sản phẩm công nghệ tinh tế và hiệu quả.</p>
        <button className="inline-block bg-on-surface text-white px-16 py-6 text-sm font-bold uppercase tracking-[0.2em] hover:bg-primary transition-colors duration-500">
          Bắt đầu ngay
        </button>
      </section>
    </motion.div>
  );
}

import React, { useEffect } from 'react'
import AuroraBackground from './components/reactbits/AuroraBackground.jsx'
import BlurText from './components/reactbits/BlurText.jsx'
import Header from './components/Header.jsx'
import ProjectsSlider from './components/ProjectsSlider.jsx'

// SITE CONFIG (edit here)
const siteConfig = {
  name: 'Your Name',
  role: 'Designer / Developer',
  email: 'you@example.com',
  location: 'Austin, TX',
  resumeUrl: 'assets/resume.pdf',
  avatarUrl: 'assets/avatar.jpg',
  bio: `I'm a creative technologist who crafts elegant, performance-focused web experiences. I love soft gradients, glassy UI, and playful micro-interactions.`,
  social: [
    { label: 'GitHub', url: 'https://github.com/yourhandle' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/yourhandle' },
    { label: 'Email', url: 'mailto:you@example.com' }
  ],
  projects: [
    { title: 'Aurora Lens', subtitle: 'AI photo colorist', image: 'https://images.unsplash.com/photo-1499084732479-de2c02d45fc4?q=80&w=1600&auto=format&fit=crop', url: 'https://example.com/aurora', tags: ['AI','Web App'], description: 'A web tool that recolors portraits with tasteful film profiles using on-device models.' },
    { title: 'Ripple Notes', subtitle: 'Minimal notes meets spatial audio', image: 'https://images.unsplash.com/photo-1520975682031-ae4f9128f4c9?q=80&w=1600&auto=format&fit=crop', url: 'https://example.com/ripple', tags: ['Product','Design'], description: 'Note-taking with a gentle flow—type, hum, and focus with binaural soundscapes.' },
    { title: 'GlassKit', subtitle: 'UI kit with glassmorphism', image: 'https://images.unsplash.com/photo-1529680459049-bf0340fa0755?q=80&w=1600&auto=format&fit=crop', url: 'https://example.com/glasskit', tags: ['UI','Open Source'], description: 'A component kit for building glossy, tactile interfaces with accessibility in mind.' }
  ]
}

export default function App(){
  useEffect(() => {
    // simple reveal on scroll
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('in'); obs.unobserve(entry.target)} })
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
  }, [])

  return (
    <AuroraBackground>
      <Header />

      {/* HERO */}
      <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-16 text-center">
          <BlurText text="Bold. Elegant. Yours." className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05]" />
          <div className="mx-auto w-36 h-36 md:w-44 md:h-44 avatar mt-8 mb-6">
            <img src={siteConfig.avatarUrl} alt={`Portrait of ${siteConfig.name}`} />
          </div>
          <p className="mt-2 text-base opacity-80">Hi, I'm <span className="font-semibold">{siteConfig.name}</span> — <span>{siteConfig.role}</span></p>
          <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto opacity-90">
            A soft, glassy portfolio with interactive flow — dynamic aurora background, subtle grain, and playful micro-interactions.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#projects" className="px-5 py-3 rounded-2xl bg-white text-black font-medium hover:shadow-lg transition-shadow">Explore Projects</a>
            <a href="#about" className="px-5 py-3 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/20">About Me</a>
          </div>
          {/* Hero cards */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="glass rounded-3xl p-6 text-left">
              <div className="text-sm uppercase tracking-widest opacity-70">Role</div>
              <div className="mt-2 text-xl font-semibold">{siteConfig.role}</div>
            </div>
            <div className="glass rounded-3xl p-6 text-left">
              <div className="text-sm uppercase tracking-widest opacity-70">Location</div>
              <div className="mt-2 text-xl font-semibold">{siteConfig.location}</div>
            </div>
            <div className="glass rounded-3xl p-6 text-left">
              <div className="text-sm uppercase tracking-widest opacity-70">Contact</div>
              <a className="mt-2 block text-xl font-semibold link-underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative py-24 sm:py-28 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal">
            <h2 className="text-3xl sm:text-4xl font-bold">Projects</h2>
            <p className="mt-2 opacity-80 max-w-2xl">A sliding gallery with subtle 3D tilt, momentum drag, and snap — perfect for visual browsing.</p>
          </div>
          <ProjectsSlider projects={siteConfig.projects} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-24 sm:py-28 md:py-32">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2 reveal">
            <div className="glass rounded-3xl p-6 md:sticky md:top-28">
              <h3 className="text-2xl font-bold">About</h3>
              <p className="mt-4 leading-relaxed opacity-95">{siteConfig.bio}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20" target="_blank" rel="noopener" href={siteConfig.resumeUrl}>Résumé</a>
                <a className="px-4 py-2 rounded-xl bg-white text-black" target="_blank" rel="noopener" href={`mailto:${siteConfig.email}`}>Email me</a>
              </div>
            </div>
          </div>
          <div className="md:col-span-3 reveal">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="glass rounded-3xl p-6">
                <div className="text-sm uppercase tracking-widest opacity-70">Currently</div>
                <div className="mt-2 text-xl font-semibold">Open to collaboration</div>
              </div>
              <div className="glass rounded-3xl p-6">
                <div className="text-sm uppercase tracking-widest opacity-70">Focus</div>
                <div className="mt-2 text-xl font-semibold">Interactive, performant UI</div>
              </div>
              <div className="glass rounded-3xl p-6">
                <div className="text-sm uppercase tracking-widest opacity-70">Stack</div>
                <div className="mt-2 text-xl font-semibold">HTML • CSS • JS • React • Tailwind</div>
              </div>
              <div className="glass rounded-3xl p-6">
                <div className="text-sm uppercase tracking-widest opacity-70">Hobbies</div>
                <div className="mt-2 text-xl font-semibold">Photography, coffee, long walks</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-24 sm:py-28 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="glass rounded-3xl p-8 reveal">
            <h3 className="text-3xl font-bold">Contact</h3>
            <p className="mt-2 opacity-85">Prefer email? Click the button below. Or use the form and it'll open your mail app prefilled.</p>
            <div className="mt-6 flex gap-3">
              <a className="px-4 py-2 rounded-xl bg-white text-black" target="_blank" rel="noopener" href={`mailto:${siteConfig.email}`}>Email me</a>
              <a className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20" target="_blank" rel="noopener" href={siteConfig.social.find(s=>s.label.toLowerCase()==='linkedin')?.url || '#'}>LinkedIn</a>
            </div>
            <form id="contactForm" className="mt-8 grid gap-4" onSubmit={(e)=>{
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const name = encodeURIComponent(data.get('name'));
              const email = encodeURIComponent(data.get('email'));
              const message = encodeURIComponent(data.get('message'));
              const subject = `Portfolio inquiry from ${name}`;
              const body = `Name: ${decodeURIComponent(name)}%0AEmail: ${decodeURIComponent(email)}%0A%0A${message}`;
              window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
            }}>
              <input className="glass rounded-2xl px-4 py-3" name="name" placeholder="Your name" required />
              <input className="glass rounded-2xl px-4 py-3" name="email" placeholder="Your email" type="email" required />
              <textarea className="glass rounded-2xl px-4 py-3" name="message" rows="5" placeholder="Message" required />
              <button className="px-5 py-3 rounded-2xl bg-white text-black font-medium hover:shadow-lg" type="submit">Open email draft</button>
              <p className="text-sm opacity-70">Tip: If you prefer a serverless form service, swap the form handler with Formspree or Netlify Forms.</p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center opacity-70">
        <div className="flex items-center justify-center gap-4 text-sm">
          {siteConfig.social.map((s, i) => (
            <a key={i} href={s.url} target="_blank" rel="noopener" className="opacity-80 hover:opacity-100 link-underline">{s.label}</a>
          ))}
        </div>
        <div className="mt-3">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</div>
      </footer>
    </AuroraBackground>
  )
}

import { useMemo, useState } from 'react'

export default function App() {
  const [accent, setAccent] = useState('yellow')

  const accents = useMemo(
    () => ({
      yellow: {
        bg: 'bg-yellow-300',
        border: 'border-yellow-600',
        text: 'text-yellow-900',
        shadow: 'shadow-[6px_6px_0_#1f2937]'
      },
      pink: {
        bg: 'bg-pink-300',
        border: 'border-pink-600',
        text: 'text-pink-900',
        shadow: 'shadow-[6px_6px_0_#1f2937]'
      },
      lime: {
        bg: 'bg-lime-300',
        border: 'border-lime-700',
        text: 'text-lime-900',
        shadow: 'shadow-[6px_6px_0_#1f2937]'
      },
      cyan: {
        bg: 'bg-cyan-300',
        border: 'border-cyan-700',
        text: 'text-cyan-900',
        shadow: 'shadow-[6px_6px_0_#1f2937]'
      }
    }),
    []
  )

  const theme = accents[accent]

  const projects = [
    {
      title: 'Bold Bakery',
      desc: 'A pastry shop landing page with punchy type, instant ordering, and buttery transitions.',
      tags: ['Landing', 'E‑commerce', 'Animation'],
      url: '#',
      color: 'bg-yellow-200',
      border: 'border-yellow-700'
    },
    {
      title: 'Studio Numeric',
      desc: 'Portfolio for a 3D studio. Grid-first layout, edge-to-edge case studies.',
      tags: ['Portfolio', '3D', 'Case Studies'],
      url: '#',
      color: 'bg-cyan-200',
      border: 'border-cyan-700'
    },
    {
      title: 'Greenloop SaaS',
      desc: 'Marketing site for climate analytics. Chunks of data, readable design.',
      tags: ['SaaS', 'Docs', 'Design System'],
      url: '#',
      color: 'bg-lime-200',
      border: 'border-lime-700'
    },
    {
      title: 'Noise FM',
      desc: 'Internet radio with a retro tuner UI and friendly stream UX.',
      tags: ['Media', 'Streaming', 'UI'],
      url: '#',
      color: 'bg-pink-200',
      border: 'border-pink-700'
    }
  ]

  const services = [
    {
      title: 'Web Design',
      desc: 'Clarity first layouts, type systems, and motion that feels physical.',
      color: 'bg-yellow-200',
      border: 'border-yellow-700'
    },
    {
      title: 'Front‑end',
      desc: 'React, accessible components, production‑ready, blazing fast.',
      color: 'bg-cyan-200',
      border: 'border-cyan-700'
    },
    {
      title: 'Brand UI',
      desc: 'Logo lockups, color, and a reusable UI kit you can ship with.',
      color: 'bg-lime-200',
      border: 'border-lime-700'
    },
    {
      title: 'Site Audits',
      desc: 'UX and performance audits with a punch list and quick wins.',
      color: 'bg-pink-200',
      border: 'border-pink-700'
    }
  ]

  function handleContactSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name')?.toString() ?? ''
    const email = form.get('email')?.toString() ?? ''
    const message = form.get('message')?.toString() ?? ''
    const subject = encodeURIComponent(`New project inquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:hello@emily.design?subject=${subject}&body=${body}`
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 selection:bg-black selection:text-white">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-3 focus:py-2 focus:bg-white focus:border-4 focus:border-black focus:text-black focus:shadow-[6px_6px_0_#000]">Skip to content</a>

      <header className={`sticky top-0 z-40 border-b-4 border-black bg-white ${theme.shadow}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className={`h-9 w-9 ${theme.bg} ${theme.border} border-4 flex items-center justify-center font-black`}>E</div>
            <div>
              <p className="font-extrabold uppercase tracking-wider">Emily</p>
              <p className="text-xs -mt-0.5">Website Designer</p>
            </div>
          </div>
          <nav className="hidden gap-4 md:flex">
            <a className="btn-link" href="#work">Work</a>
            <a className="btn-link" href="#services">Services</a>
            <a className="btn-link" href="#about">About</a>
            <a className="btn-link" href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <AccentPicker accent={accent} setAccent={setAccent} />
            <a href="#contact" className={`hidden md:inline-block border-4 ${theme.border} ${theme.bg} px-3 py-2 font-bold ${theme.shadow} hover:translate-x-1 hover:translate-y-1 active:translate-x-0 active:translate-y-0 transition-transform`}>
              Start a project
            </a>
          </div>
        </div>
      </header>

      <main id="main" className="mx-auto max-w-6xl px-4">
        <Hero theme={theme} />

        <section id="work" className="mt-16">
          <SectionTitle emoji="🧱" title="Selected Work" subtitle="Chunky, honest interfaces that ship." />
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {projects.map((p, i) => (
              <ProjectCard key={i} p={p} />
            ))}
          </div>
        </section>

        <section id="services" className="mt-20">
          <SectionTitle emoji="🛠️" title="Services" subtitle="Everything you need to launch and grow." />
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <ServiceCard key={i} s={s} />
            ))}
          </div>
        </section>

        <section id="about" className="mt-20">
          <SectionTitle emoji="👋" title="About Emily" subtitle="Designer + front‑end dev crafting neobrutal web experiences." />
          <div className="mt-6 grid items-start gap-6 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <div className="border-4 border-black bg-white p-4 shadow-[10px_10px_0_#000]">
                <div className="relative aspect-square border-4 border-black bg-yellow-200">
                  <div className="absolute inset-0 flex items-center justify-center text-[64px]">👩🏻‍💻</div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="font-extrabold">Emily</p>
                    <p className="text-sm">Website Designer</p>
                  </div>
                  <div className="flex gap-2">
                    <Social icon="github" href="#" />
                    <Social icon="dribbble" href="#" />
                    <Social icon="x" href="#" />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="border-4 border-black bg-white p-6 shadow-[10px_10px_0_#000]">
                <p className="text-lg leading-relaxed">
                  I design crisp, legible interfaces with bold shapes, expressive color, and fast performance. My work blends brand and product to create sites people actually understand and enjoy using. I partner with early teams, studios, and founders to craft websites that convert and age well.
                </p>
                <ul className="mt-6 grid list-disc gap-2 pl-6 sm:grid-cols-2">
                  <li>Accessible, responsive layouts</li>
                  <li>Component libraries in React</li>
                  <li>Design systems and tokens</li>
                  <li>Performance and SEO best practices</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <SectionTitle emoji="🧭" title="Process" subtitle="A simple path from idea to launch." />
          <div className="mt-6 grid gap-6 md:grid-cols-4">
            {[
              { n: 1, t: 'Discover', d: 'Goals, audience, and brand foundations. Quick workshops, then a plan.' },
              { n: 2, t: 'Design', d: 'Wireframes to hi‑fi, interactive prototypes, and clear feedback cycles.' },
              { n: 3, t: 'Build', d: 'Clean, accessible front‑end. Reusable components and snappy performance.' },
              { n: 4, t: 'Launch', d: 'QA, analytics, handoff, and docs—plus a backlog of v2 ideas.' }
            ].map((it) => (
              <div key={it.n} className="border-4 border-black bg-white p-5 shadow-[8px_8px_0_#000]">
                <div className="mb-2 inline-block border-4 border-black bg-yellow-300 px-2 py-1 font-extrabold">{String(it.n).padStart(2, '0')}</div>
                <p className="font-extrabold">{it.t}</p>
                <p className="text-sm mt-1">{it.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-20 mb-24">
          <SectionTitle emoji="📮" title="Contact" subtitle="Tell me about your project." />
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 border-4 border-black bg-white p-6 shadow-[10px_10px_0_#000]">
              <form onSubmit={handleContactSubmit} className="grid gap-4">
                <div className="grid gap-2 sm:grid-cols-2">
                  <FormField label="Name" name="name" placeholder="Your name" />
                  <FormField label="Email" name="email" type="email" placeholder="you@company.com" />
                </div>
                <FormField label="Message" name="message" textarea placeholder="What are we building?" />
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm">
                    <input required type="checkbox" className="h-4 w-4 border-4 border-black accent-black" />
                    I’m okay receiving a reply via email
                  </label>
                  <button type="submit" className={`border-4 ${theme.border} ${theme.bg} px-4 py-2 font-extrabold ${theme.shadow} hover:translate-x-1 hover:translate-y-1 active:translate-x-0 active:translate-y-0 transition-transform`}>
                    Send email
                  </button>
                </div>
              </form>
            </div>
            <div className="border-4 border-black bg-white p-6 shadow-[10px_10px_0_#000]">
              <p className="font-extrabold">Quick links</p>
              <ul className="mt-3 grid gap-2 text-sm">
                <li><a className="btn-link" href="#work">View selected work</a></li>
                <li><a className="btn-link" href="#services">Explore services</a></li>
                <li><a className="btn-link" href="#about">About Emily</a></li>
                <li><a className="btn-link" href="#">Download resume</a></li>
              </ul>
              <div className="mt-4 h-px w-full bg-black"></div>
              <p className="mt-4 text-sm">Email: <a className="underline decoration-4 decoration-black" href="mailto:hello@emily.design">hello@emily.design</a></p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t-4 border-black bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row">
          <p className="text-sm">© {new Date().getFullYear()} Emily — Website Designer</p>
          <div className="flex items-center gap-2">
            <PaletteLegend accent={accent} setAccent={setAccent} />
          </div>
        </div>
      </footer>

      <Stickers />

      <style>{`
        .btn-link { @apply border-b-4 border-black font-bold hover:bg-black hover:text-white transition-colors px-1; }
      `}</style>
    </div>
  )
}

function Hero({ theme }) {
  return (
    <section className="relative mt-10">
      <div className={`border-4 border-black bg-white p-6 md:p-10 ${theme.shadow}`}>
        <div className="grid gap-6 md:grid-cols-3 md:items-start">
          <div className="md:col-span-2">
            <h1 className="text-4xl font-black leading-[1.05] sm:text-5xl md:text-6xl">
              Neo‑brutal websites that are loud, useful, and fast.
            </h1>
            <p className="mt-4 text-lg max-w-2xl">
              I’m Emily, a website designer building bold interfaces with strong type, chunky borders, and honest UX. I design and ship production‑ready front‑ends.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#work" className={`border-4 ${theme.border} ${theme.bg} px-4 py-3 font-extrabold ${theme.shadow} hover:translate-x-1 hover:translate-y-1 active:translate-x-0 active:translate-y-0 transition-transform`}>View work</a>
              <a href="#contact" className={`border-4 border-black bg-white px-4 py-3 font-extrabold shadow-[6px_6px_0_#000] hover:translate-x-1 hover:translate-y-1 active:translate-x-0 active:translate-y-0 transition-transform`}>Contact</a>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wider">
              <Badge text="Web Design" />
              <Badge text="Front‑end" />
              <Badge text="React" />
              <Badge text="Accessibility" />
              <Badge text="Performance" />
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="border-4 border-black bg-neutral-100 p-4 shadow-[6px_6px_0_#000]">
              <p className="font-extrabold">Currently</p>
              <ul className="mt-3 grid gap-2 text-sm">
                <li className="flex items-start gap-2"><span>▮</span><span>Booking new projects for Q4.</span></li>
                <li className="flex items-start gap-2"><span>▮</span><span>Prototyping a UI kit for founders.</span></li>
                <li className="flex items-start gap-2"><span>▮</span><span>Writing about brutalist motion.</span></li>
              </ul>
            </div>
            <div className="mt-4 border-4 border-black bg-neutral-100 p-4 shadow-[6px_6px_0_#000]">
              <p className="font-extrabold">Tools</p>
              <div className="mt-2 flex flex-wrap gap-2 text-xs">
                <Tag>Figma</Tag>
                <Tag>React</Tag>
                <Tag>Tailwind</Tag>
                <Tag>Framer Motion</Tag>
                <Tag>Vite</Tag>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ p }) {
  return (
    <a href={p.url} className={`group block border-4 ${p.border} ${p.color} p-4 shadow-[8px_8px_0_#000] transition-transform hover:-translate-y-1`}>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-2xl font-black">{p.title}</h3>
        <span className="border-4 border-black bg-white px-2 py-1 text-xs font-extrabold">Case Study</span>
      </div>
      <div className="mt-3 aspect-[16/10] border-4 border-black bg-white">
        <ProjectPreview title={p.title} />
      </div>
      <p className="mt-3 text-sm">{p.desc}</p>
      <div className="mt-2 flex flex-wrap gap-2 text-xs">
        {p.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </a>
  )
}

function ServiceCard({ s }) {
  return (
    <div className={`border-4 ${s.border} ${s.color} p-5 shadow-[8px_8px_0_#000]`}>
      <p className="text-xl font-extrabold">{s.title}</p>
      <p className="mt-2 text-sm">{s.desc}</p>
    </div>
  )
}

function SectionTitle({ emoji, title, subtitle }) {
  return (
    <div className="flex items-end justify-between gap-3">
      <div>
        <h2 className="flex items-center gap-2 text-3xl font-black"><span className="text-2xl">{emoji}</span> {title}</h2>
        <p className="mt-1 text-sm text-neutral-700">{subtitle}</p>
      </div>
      <div className="hidden items-center gap-2 sm:flex">
        <div className="h-3 w-3 border-4 border-black bg-yellow-300"></div>
        <div className="h-3 w-3 border-4 border-black bg-cyan-300"></div>
        <div className="h-3 w-3 border-4 border-black bg-pink-300"></div>
      </div>
    </div>
  )
}

function Badge({ text }) {
  return <span className="border-4 border-black bg-white px-2 py-1 text-xs shadow-[4px_4px_0_#000]">{text}</span>
}

function Tag({ children }) {
  return <span className="border-4 border-black bg-white px-2 py-0.5 text-xs">{children}</span>
}

function Social({ icon, href }) {
  return (
    <a href={href} aria-label={icon} className="inline-flex h-9 w-9 items-center justify-center border-4 border-black bg-white shadow-[4px_4px_0_#000] hover:-translate-y-0.5 transition-transform">
      {icon === 'github' && (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-black"><path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.11-.76.09-.74.09-.74 1.22.09 1.86 1.25 1.86 1.25 1.09 1.86 2.86 1.32 3.56 1.01.11-.79.43-1.32.78-1.63-2.67-.31-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.56.12-3.25 0 0 1.01-.32 3.31 1.23a11.5 11.5 0 0 1 6.02 0c2.3-1.55 3.31-1.23 3.31-1.23.66 1.69.24 2.94.12 3.25.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.44.38.83 1.11.83 2.24v3.32c0 .32.22.7.83.58A12 12 0 0 0 12 .5"/></svg>
      )}
      {icon === 'dribbble' && (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-black"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m6.93 6.5a8.03 8.03 0 0 1-3.56 1.02c-.27-.66-.58-1.31-.93-1.92 1.61-.65 3.02-.71 4.49-.1M12 4c1.7 0 3.27.53 4.56 1.43-1.48.28-2.88.79-4.25 1.46A29.2 29.2 0 0 0 10.1 4.4C10.73 4.16 11.35 4 12 4m-2.86.64c.58 1.06 1.28 2.26 2.09 3.52-2.23.75-4.93 1.23-8.09 1.25A8.02 8.02 0 0 1 9.14 4.64M4 12c0-.17 0-.34.02-.5 3.62-.01 6.77-.56 9.24-1.46.29.52.55 1.06.8 1.62-.39.11-.78.23-1.17.35-3.02.95-5.36 2.41-7.12 4.09A7.95 7.95 0 0 1 4 12m8 8a7.96 7.96 0 0 1-5.18-1.9c1.58-1.58 3.72-2.93 6.55-3.82.22-.07.45-.13.68-.19.33 1.08.58 2.26.75 3.51.08.62.13 1.24.16 1.86-.65.35-1.36.54-1.96.54m3.45-1.46a32.5 32.5 0 0 0-.83-4.01c1.27-.15 2.65-.18 4.16-.07A8.03 8.03 0 0 1 15.45 18.54M14.2 12.4c-.21-.5-.44-.99-.68-1.47 1.47-.44 3.08-.73 4.92-.73.55 0 1.07.03 1.57.08a8 8 0 0 1 .24 1.92c-1.78-.1-3.32-.03-4.75.16-.44.06-.87.13-1.3.22"/></svg>
      )}
      {icon === 'x' && (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-black"><path d="M18.244 2H21l-6.37 7.28L22 22h-6.828l-4.75-6.206L4.9 22H2.144l6.84-7.826L2 2h6.914l4.28 5.684L18.244 2zm-2.39 18h2.195L8.24 4H6.07l9.785 16z"/></svg>
      )}
    </a>
  )
}

function AccentPicker({ accent, setAccent }) {
  const options = [
    { key: 'yellow', cls: 'bg-yellow-300' },
    { key: 'pink', cls: 'bg-pink-300' },
    { key: 'lime', cls: 'bg-lime-300' },
    { key: 'cyan', cls: 'bg-cyan-300' }
  ]
  return (
    <div className="flex items-center gap-1" role="group" aria-label="Accent color">
      {options.map((o) => (
        <button
          key={o.key}
          onClick={() => setAccent(o.key)}
          aria-pressed={accent === o.key}
          className={`h-8 w-8 border-4 border-black ${o.cls} ${accent === o.key ? 'outline outline-4 outline-black' : ''}`}
          title={`Accent: ${o.key}`}
        />
      ))}
    </div>
  )
}

function PaletteLegend({ accent, setAccent }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm">Accent:</span>
      <AccentPicker accent={accent} setAccent={setAccent} />
    </div>
  )
}

function FormField({ label, name, type = 'text', placeholder = '', textarea = false }) {
  const base = 'mt-1 w-full border-4 border-black bg-white px-3 py-2 focus:outline-none focus:ring-0'
  return (
    <label className="block">
      <span className="font-extrabold">{label}</span>
      {textarea ? (
        <textarea required name={name} placeholder={placeholder} rows={6} className={base} />
      ) : (
        <input required type={type} name={name} placeholder={placeholder} className={base} />
      )}
    </label>
  )
}

function ProjectPreview({ title }) {
  // Simple SVG preview to avoid external assets
  const colors = ['#fde047', '#a7f3d0', '#93c5fd', '#fbcfe8']
  const c1 = colors[(title.length + 1) % colors.length]
  const c2 = colors[(title.length + 2) % colors.length]
  const c3 = colors[(title.length + 3) % colors.length]
  return (
    <div className="grid h-full grid-rows-6">
      <div className="row-span-2 flex gap-2 border-b-4 border-black bg-white p-2">
        <div className="h-6 w-6 border-4 border-black" style={{ background: c1 }}></div>
        <div className="h-6 w-6 border-4 border-black" style={{ background: c2 }}></div>
        <div className="h-6 w-6 border-4 border-black" style={{ background: c3 }}></div>
        <div className="ml-auto flex items-center gap-1">
          <div className="h-2 w-8 border-4 border-black"></div>
          <div className="h-2 w-6 border-4 border-black"></div>
        </div>
      </div>
      <div className="row-span-4 grid grid-cols-3 gap-2 p-2">
        <div className="col-span-2 border-4 border-black" style={{ background: c2 }}></div>
        <div className="border-4 border-black bg-white"></div>
        <div className="col-span-3 grid grid-cols-3 gap-2">
          <div className="h-4 border-4 border-black bg-white"></div>
          <div className="h-4 border-4 border-black bg-white"></div>
          <div className="h-4 border-4 border-black bg-white"></div>
        </div>
      </div>
    </div>
  )
}

function Stickers() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-6 top-24 rotate-[-6deg]">
        <Sticker color="bg-yellow-300" text="#01 BOLD" />
      </div>
      <div className="absolute right-4 top-40 rotate-[8deg]">
        <Sticker color="bg-pink-300" text="SHIP FAST" />
      </div>
      <div className="absolute bottom-10 left-8 rotate-[-4deg]">
        <Sticker color="bg-cyan-300" text="ACCESSIBLE" />
      </div>
    </div>
  )
}

function Sticker({ color, text }) {
  return (
    <div className={`border-4 border-black ${color} px-3 py-1 font-extrabold shadow-[6px_6px_0_#000]`}>{text}</div>
  )
}

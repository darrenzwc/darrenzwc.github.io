import React, { useRef, useEffect } from 'react'

export default function ProjectsSlider({ projects = [] }){
  const sliderRef = useRef(null)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return
    // 3D tilt
    const onMove = (e) => {
      slider.querySelectorAll('.slide-tilt').forEach(el => {
        const box = el.getBoundingClientRect();
        const dx = (e.clientX - box.left) / box.width - 0.5;
        const dy = (e.clientY - box.top) / box.height - 0.5;
        el.style.setProperty('--rx', `${(-dy * 6).toFixed(2)}deg`);
        el.style.setProperty('--ry', `${(dx * 8).toFixed(2)}deg`);
        el.style.setProperty('--tz', '10px');
      })
    }
    slider.addEventListener('mousemove', onMove)
    return () => slider.removeEventListener('mousemove', onMove)
  }, [])

  const scrollByAmount = () => Math.min(500, (sliderRef.current?.clientWidth || 1000) * 0.8)

  return (
    <div className="mt-8 relative">
      <button onClick={() => sliderRef.current?.scrollBy({left: -scrollByAmount(), behavior:'smooth'})}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 glass hover:bg-white/15 rounded-full p-3">
        <span aria-hidden>◀</span><span className="sr-only">Previous</span>
      </button>
      <button onClick={() => sliderRef.current?.scrollBy({left: scrollByAmount(), behavior:'smooth'})}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 glass hover:bg-white/15 rounded-full p-3">
        <span aria-hidden>▶</span><span className="sr-only">Next</span>
      </button>

      <div ref={sliderRef} id="slider" className="slider flex gap-6 overflow-x-auto pb-6 snap-x scroll-pl-6">
        {projects.map((p, i) => (
          <a key={i} href={p.url} target="_blank" rel="noopener" className="slide slide-tilt min-w-[80%] sm:min-w-[60%] lg:min-w-[40%] xl:min-w-[32%]">
            <div className="glass rounded-[28px] overflow-hidden group h-full block">
              <div className="h-64 sm:h-72 md:h-80 overflow-hidden relative">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"/>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <div className="text-xs opacity-75">{(p.tags||[]).join(' • ')}</div>
                </div>
                <div className="opacity-80">{p.subtitle}</div>
                <p className="mt-3 text-sm opacity-80">{p.description||''}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

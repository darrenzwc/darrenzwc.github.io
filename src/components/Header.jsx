import React from 'react'

export default function Header(){
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 mt-2 glass rounded-2xl shadow-glow flex items-center justify-between">
        <a href="#home" className="text-lg font-semibold tracking-tight">✦ <span id="nav-name">Name</span></a>
        <div className="flex items-center gap-4 text-sm">
          <a href="#projects" className="opacity-80 hover:opacity-100">Projects</a>
          <a href="#about" className="opacity-80 hover:opacity-100">About</a>
          <a href="#contact" className="opacity-80 hover:opacity-100">Contact</a>
          <a id="resumeLink" className="px-3 py-1 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20" href="#" target="_blank" rel="noopener">Résumé</a>
        </div>
      </nav>
    </header>
  )
}

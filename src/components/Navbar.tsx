'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <nav style={{ position:'fixed', top:0, left:0, right:0, zIndex:200, background: scrolled ? 'rgba(248,244,238,0.97)' : 'transparent', backdropFilter: scrolled ? 'blur(16px)' : 'none', borderBottom: scrolled ? '1px solid rgba(184,120,26,0.18)' : 'none', transition:'all 0.4s ease' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center', height:72, padding:'0 32px' }}>
        <button onClick={() => scrollTo('home')} style={{ background:'none', border:'none', cursor:'pointer', padding:0 }}>
          <Image src="/logo.png" alt="Home of Wax" width={120} height={50} style={{ objectFit:'contain', filter: scrolled ? 'none' : 'brightness(0) invert(1)', transition:'filter 0.4s ease' }} />
        </button>
        <div style={{ display:'flex', gap:36, alignItems:'center' }}>
          {[['home','Home'],['products','Materials'],['contact','Contact']].map(([id,label]) => (
            <button key={id} onClick={() => scrollTo(id)} style={{ background:'none', border:'none', cursor:'pointer', fontSize:12, letterSpacing:2, textTransform:'uppercase', fontWeight:600, color: scrolled ? '#5a4a3a' : 'rgba(248,244,238,0.85)', fontFamily:"'DM Sans',sans-serif", transition:'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color='#B8781A')}
              onMouseLeave={e => (e.currentTarget.style.color = scrolled ? '#5a4a3a' : 'rgba(248,244,238,0.85)')}>
              {label}
            </button>
          ))}
          <button onClick={() => scrollTo('contact')} style={{ padding:'10px 22px', background:'#B8781A', color:'#fff', border:'none', borderRadius:4, fontSize:11, letterSpacing:2, textTransform:'uppercase', fontWeight:700, cursor:'pointer', fontFamily:"'DM Sans',sans-serif", transition:'all 0.25s' }}
            onMouseEnter={e => { e.currentTarget.style.background='#8f5c12'; e.currentTarget.style.transform='translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background='#B8781A'; e.currentTarget.style.transform='translateY(0)'; }}>
            Get a Quote
          </button>
        </div>
      </div>
    </nav>
  )
}

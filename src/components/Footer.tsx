'use client'
import Image from 'next/image'

export default function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior:'smooth' })
  return (
    <footer style={{ background:'#0C0801', padding:'48px 32px 32px', borderTop:'1px solid rgba(184,120,26,0.12)' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:24, marginBottom:32 }}>
          <Image src="/logo.png" alt="Home of Wax" width={120} height={50} style={{ objectFit:'contain', opacity:0.85 }} />
          <div style={{ display:'flex', gap:32, alignItems:'center', flexWrap:'wrap' }}>
            {[['home','Home'],['products','Materials'],['contact','Contact']].map(([id,label]) => (
              <button key={id} onClick={()=>scrollTo(id)} style={{ background:'none', border:'none', fontSize:11, letterSpacing:2, textTransform:'uppercase', color:'rgba(248,244,238,0.35)', cursor:'pointer', fontWeight:600, fontFamily:"'DM Sans',sans-serif", transition:'color 0.2s' }}
                onMouseEnter={e=>(e.currentTarget.style.color='#B8781A')}
                onMouseLeave={e=>(e.currentTarget.style.color='rgba(248,244,238,0.35)')}>
                {label}
              </button>
            ))}
            <a href="https://www.instagram.com/home-of-wax-lebanon" target="_blank" rel="noopener noreferrer"
              style={{ display:'inline-flex', alignItems:'center', gap:7, padding:'9px 18px', background:'rgba(184,120,26,0.15)', border:'1px solid rgba(184,120,26,0.3)', borderRadius:100, color:'#B8781A', textDecoration:'none', fontSize:11, letterSpacing:2, textTransform:'uppercase', fontWeight:700, fontFamily:"'DM Sans',sans-serif", transition:'all 0.25s' }}
              onMouseEnter={e=>{ e.currentTarget.style.background='#B8781A'; e.currentTarget.style.color='#fff'; }}
              onMouseLeave={e=>{ e.currentTarget.style.background='rgba(184,120,26,0.15)'; e.currentTarget.style.color='#B8781A'; }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              @home-of-wax-lebanon
            </a>
          </div>
        </div>
        <div style={{ borderTop:'1px solid rgba(248,244,238,0.06)', paddingTop:24, display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:12 }}>
          <span style={{ color:'rgba(248,244,238,0.2)', fontSize:12, fontFamily:"'DM Sans',sans-serif" }}>© 2025 Home of Wax · Candles Raw Materials & More</span>
          <span style={{ color:'rgba(248,244,238,0.2)', fontSize:12, fontFamily:"'DM Sans',sans-serif" }}>Order via Instagram or contact form</span>
        </div>
      </div>
    </footer>
  )
}

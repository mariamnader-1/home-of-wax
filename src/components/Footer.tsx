'use client'
import Image from 'next/image'

export default function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior:'smooth' })
  return (
    <footer style={{ background:'#0C0801', padding:'48px 32px 32px', borderTop:'1px solid rgba(184,120,26,0.12)' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:24, marginBottom:32 }}>
          <Image src="/logo.png" alt="Home of Wax" width={120} height={50} style={{ objectFit:'contain', filter:'brightness(0) invert(1)', opacity:0.85 }} />
          <div style={{ display:'flex', gap:32 }}>
            {[['home','Home'],['products','Materials'],['contact','Contact']].map(([id,label]) => (
              <button key={id} onClick={()=>scrollTo(id)} style={{ background:'none', border:'none', fontSize:11, letterSpacing:2, textTransform:'uppercase', color:'rgba(248,244,238,0.35)', cursor:'pointer', fontWeight:600, fontFamily:"'DM Sans',sans-serif", transition:'color 0.2s' }}
                onMouseEnter={e=>(e.currentTarget.style.color='#B8781A')}
                onMouseLeave={e=>(e.currentTarget.style.color='rgba(248,244,238,0.35)')}>
                {label}
              </button>
            ))}
          </div>
        </div>
        <div style={{ borderTop:'1px solid rgba(248,244,238,0.06)', paddingTop:24, display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:12 }}>
          <span style={{ color:'rgba(248,244,238,0.2)', fontSize:12, fontFamily:"'DM Sans',sans-serif" }}>© 2025 Home of Wax · Candles Raw Materials & More</span>
          <span style={{ color:'rgba(248,244,238,0.2)', fontSize:12, fontFamily:"'DM Sans',sans-serif" }}>Contact us to place your order</span>
        </div>
      </div>
    </footer>
  )
}

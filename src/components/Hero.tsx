'use client'
import Image from 'next/image'

export default function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return (
    <section id="home" style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', position:'relative', overflow:'hidden', background:'linear-gradient(150deg,#0E0904 0%,#1F1508 45%,#2A1C0A 100%)' }}>
      <div style={{ position:'absolute', width:400, height:400, borderRadius:'50%', background:'rgba(184,120,26,0.07)', left:100, top:50, filter:'blur(90px)', pointerEvents:'none' }}/>
      <div style={{ position:'absolute', width:400, height:400, borderRadius:'50%', background:'rgba(184,120,26,0.05)', right:80, bottom:100, filter:'blur(90px)', pointerEvents:'none' }}/>
      <div style={{ position:'absolute', top:0, left:'50%', transform:'translateX(-50%)', width:1, height:'100%', background:'linear-gradient(to bottom,transparent,rgba(184,120,26,0.15),transparent)', pointerEvents:'none' }}/>

      <div style={{ position:'relative', textAlign:'center', padding:'100px 32px 80px', maxWidth:820, width:'100%' }}>

        <div className="animate-hero-1" style={{ marginBottom:32, display:'flex', justifyContent:'center' }}>
          <div style={{ background:'rgba(255,255,255,0.08)', borderRadius:16, padding:'16px 32px', backdropFilter:'blur(10px)', border:'1px solid rgba(255,255,255,0.1)' }}>
            <Image src="/logo.png" alt="Home of Wax" width={160} height={70} style={{ objectFit:'contain', display:'block' }} />
          </div>
        </div>

        <div className="animate-hero-2" style={{ fontSize:10, letterSpacing:6, textTransform:'uppercase', color:'#B8781A', marginBottom:20, fontWeight:700 }}>
          Candles Raw Materials & More
        </div>
        <h1 className="animate-hero-3" style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(48px,7vw,88px)', fontWeight:300, color:'#F8F4EE', lineHeight:1.05, marginBottom:24, letterSpacing:-1 }}>
          The finest materials<br/><em style={{ fontStyle:'italic', fontWeight:500, color:'#E8C87A' }}>for your craft</em>
        </h1>
        <p className="animate-hero-3" style={{ fontSize:16, color:'rgba(248,244,238,0.55)', lineHeight:1.85, maxWidth:500, margin:'0 auto 44px', fontWeight:300 }}>
          Premium-grade waxes, natural additives & fragrance oils — everything you need to create beautiful, long-lasting candles.
        </p>

        <div className="animate-hero-4" style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap', marginBottom:24 }}>
          <button onClick={() => scrollTo('products')} style={{ padding:'17px 42px', background:'#B8781A', color:'#fff', border:'none', borderRadius:3, fontSize:11, letterSpacing:3, textTransform:'uppercase', cursor:'pointer', fontWeight:700, fontFamily:"'DM Sans',sans-serif", transition:'all 0.25s' }}
            onMouseEnter={e => { e.currentTarget.style.background='#8f5c12'; e.currentTarget.style.transform='translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background='#B8781A'; e.currentTarget.style.transform='translateY(0)'; }}>
            Browse Materials
          </button>
          <a href="https://www.instagram.com/home-of-wax-lebanon" target="_blank" rel="noopener noreferrer"
            style={{ padding:'17px 42px', background:'transparent', color:'rgba(248,244,238,0.85)', border:'1px solid rgba(248,244,238,0.25)', borderRadius:3, fontSize:11, letterSpacing:3, textTransform:'uppercase', cursor:'pointer', fontWeight:500, fontFamily:"'DM Sans',sans-serif", textDecoration:'none', display:'inline-flex', alignItems:'center', gap:8 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            Instagram
          </a>
          <button onClick={() => scrollTo('contact')} style={{ padding:'17px 42px', background:'transparent', color:'rgba(248,244,238,0.85)', border:'1px solid rgba(248,244,238,0.25)', borderRadius:3, fontSize:11, letterSpacing:3, textTransform:'uppercase', cursor:'pointer', fontWeight:500, fontFamily:"'DM Sans',sans-serif" }}>
            Contact Us
          </button>
        </div>

        <div className="animate-hero-4" style={{ display:'flex', gap:56, justifyContent:'center', marginTop:48, paddingTop:40, borderTop:'1px solid rgba(248,244,238,0.08)', flexWrap:'wrap' }}>
          {[['8+','Products'],['100%','Quality'],['Fast','Delivery']].map(([val,label]) => (
            <div key={label} style={{ textAlign:'center' }}>
              <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:34, color:'#E8C87A', fontWeight:600, lineHeight:1 }}>{val}</div>
              <div style={{ fontSize:9, letterSpacing:3, textTransform:'uppercase', color:'rgba(248,244,238,0.35)', marginTop:6, fontWeight:600 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

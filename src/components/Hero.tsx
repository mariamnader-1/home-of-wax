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
        <div className="animate-hero-1" style={{ marginBottom:32 }}>
          <Image src="/logo.png" alt="Home of Wax" width={180} height={80} style={{ objectFit:'contain', filter:'brightness(0) invert(1)', opacity:0.95, margin:'0 auto', display:'block' }} />
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
        <div className="animate-hero-4" style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
          <button onClick={() => scrollTo('products')} style={{ padding:'17px 42px', background:'#B8781A', color:'#fff', border:'none', borderRadius:3, fontSize:11, letterSpacing:3, textTransform:'uppercase', cursor:'pointer', fontWeight:700, fontFamily:"'DM Sans',sans-serif", transition:'all 0.25s' }}
            onMouseEnter={e => { e.currentTarget.style.background='#8f5c12'; e.currentTarget.style.transform='translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background='#B8781A'; e.currentTarget.style.transform='translateY(0)'; }}>
            Browse Materials
          </button>
          <button onClick={() => scrollTo('contact')} style={{ padding:'17px 42px', background:'transparent', color:'rgba(248,244,238,0.85)', border:'1px solid rgba(248,244,238,0.25)', borderRadius:3, fontSize:11, letterSpacing:3, textTransform:'uppercase', cursor:'pointer', fontWeight:500, fontFamily:"'DM Sans',sans-serif" }}>
            Contact Us
          </button>
        </div>
        <div className="animate-hero-4" style={{ display:'flex', gap:56, justifyContent:'center', marginTop:72, paddingTop:40, borderTop:'1px solid rgba(248,244,238,0.08)', flexWrap:'wrap' }}>
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

'use client'
import { useEffect, useRef, useState } from 'react'

function FadeIn({ children, delay=0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [v, setV] = useState(false)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true) }, { threshold:0.1 })
    if (ref.current) o.observe(ref.current)
    return () => o.disconnect()
  }, [])
  return <div ref={ref} style={{ opacity:v?1:0, transform:v?'translateY(0)':'translateY(36px)', transition:`opacity 0.7s ease ${delay}s,transform 0.7s ease ${delay}s` }}>{children}</div>
}

export default function WhyUs() {
  return (
    <section style={{ background:'#1A1208', padding:'90px 32px' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>
        <FadeIn>
          <div style={{ textAlign:'center', marginBottom:56 }}>
            <div style={{ fontSize:9, letterSpacing:5, textTransform:'uppercase', color:'#B8781A', marginBottom:12, fontWeight:700 }}>Why Home of Wax</div>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(32px,4vw,50px)', fontWeight:400, color:'#F8F4EE' }}>Crafted for makers</h2>
          </div>
        </FadeIn>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:28 }}>
          {[
            ['Premium Grade','Every material is tested and selected for consistent quality and performance.'],
            ['Natural Sources','We prioritize natural and responsibly sourced raw materials wherever possible.'],
            ['All Wax Types','From soy to beeswax to paraffin — materials for every candle style and technique.'],
            ['Expert Support','Browse our full catalog and contact us with any questions before ordering.'],
          ].map(([title,desc],i) => (
            <FadeIn key={title} delay={i*0.1}>
              <div style={{ padding:32, borderRadius:12, border:'1px solid rgba(248,244,238,0.08)', background:'rgba(248,244,238,0.03)' }}>
                <div style={{ width:32, height:2, background:'#B8781A', marginBottom:18 }}/>
                <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:22, color:'#F8F4EE', marginBottom:10, fontWeight:600 }}>{title}</h3>
                <p style={{ color:'rgba(248,244,238,0.45)', fontSize:13, lineHeight:1.75 }}>{desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

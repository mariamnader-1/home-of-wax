'use client'
import { useEffect, useRef, useState } from 'react'
import ProductModal, { type Product } from './ProductModal'

const products: Product[] = [
  { id:1, name:'Soy Wax', image:'/soy-wax.jpg', category:'Base Waxes', price:'$7.00', weight:'1 kg', description:'Natural soy wax made from hydrogenated soybean oil. Ideal for container candles with excellent scent throw and a clean burn.', specs:{'Melt Point':'49–55°C','Type':'Container Wax','Origin':'Soybean Oil','Fragrance Load':'Up to 10%','Color':'Creamy White'} },
  { id:2, name:'Beeswax', image:'/beeswax.jpg', category:'Base Waxes', price:'$7.00', weight:'1 kg', description:'Pure natural beeswax with a warm honey-like scent. Burns clean and slow, great for pillar and taper candles.', specs:{'Melt Point':'62–65°C','Type':'Pillar / Container','Origin':'Natural Bees','Fragrance Load':'Up to 6%','Color':'Natural Yellow'} },
  { id:3, name:'Paraffin Wax', image:'/paraffin.jpg', category:'Base Waxes', price:'$3.00', weight:'1 kg', description:'Classic paraffin wax — the most versatile candle-making wax. Strong scent throw and excellent color retention.', specs:{'Melt Point':'46–68°C','Type':'Container / Pillar','Origin':'Petroleum','Fragrance Load':'Up to 12%','Color':'Bright White'} },
  { id:4, name:'Sand Wax', image:'/sand-wax.jpg', category:'Base Waxes', price:'$7.00', weight:'1 kg', description:'Granular sand wax for textured rustic candles. Creates beautiful sandy finishes and unique visual effects.', specs:{'Melt Point':'55–60°C','Type':'Specialty / Pillar','Origin':'Synthetic Blend','Fragrance Load':'Up to 8%','Color':'Off White'} },
  { id:5, name:'Coconut Oil', image:'/coconut-oil.jpg', category:'Natural Additives', price:'$1.50', weight:'100 g', description:'Refined coconut oil used to soften wax blends and boost fragrance throw. Adds a glossy finish to candles.', specs:{'Melt Point':'24–25°C','Type':'Additive / Blending','Origin':'Coconut','Usage':'5–20% of wax blend','Color':'Clear / White'} },
  { id:6, name:'Shea Butter', image:'/shea-butter.jpg', category:'Natural Additives', price:'$3.00', weight:'100 g', description:'Unrefined shea butter that adds creaminess and a smooth surface to candles. Excellent moisturizing additive.', specs:{'Melt Point':'35–38°C','Type':'Additive / Blending','Origin':'Shea Tree','Usage':'5–15% of wax blend','Color':'Ivory'} },
  { id:7, name:'Fragrance Oil', image:'/fragrance-50.jpg', category:'Fragrance Oils', price:'$3.00', weight:'50 g', description:'Premium concentrated fragrance oils for candle making. Safe for all wax types with excellent scent throw.', specs:{'Usage Rate':'6–10% of wax weight','Flash Point':'>60°C','Type':'Candle-Safe Blend','Variants':'Multiple Scents Available','Size':'50g'} },
  { id:8, name:'Fragrance Oil', image:'/fragrance-100.jpg', category:'Fragrance Oils', price:'$5.00', weight:'100 g', description:'Premium concentrated fragrance oils for candle making. Safe for all wax types with excellent scent throw.', specs:{'Usage Rate':'6–10% of wax weight','Flash Point':'>60°C','Type':'Candle-Safe Blend','Variants':'Multiple Scents Available','Size':'100g'} },
]

const categories = ['All','Base Waxes','Natural Additives','Fragrance Oils']

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

export default function ProductsSection() {
  const [cat, setCat] = useState('All')
  const [sel, setSel] = useState<Product|null>(null)
  const filtered = cat==='All' ? products : products.filter(p=>p.category===cat)

  return (
    <section id="products" style={{ padding:'100px 32px', background:'#F8F4EE' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>
        <FadeIn>
          <div style={{ textAlign:'center', marginBottom:56 }}>
            <div style={{ fontSize:9, letterSpacing:5, textTransform:'uppercase', color:'#B8781A', marginBottom:12, fontWeight:700 }}>Our Catalog</div>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(36px,5vw,58px)', fontWeight:400, color:'#1A1208', marginBottom:14 }}>Raw Materials</h2>
            <p style={{ color:'#8a7a6a', fontSize:15, maxWidth:440, margin:'0 auto', lineHeight:1.75 }}>All materials are quality-tested and sourced specifically for candle making.</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div style={{ display:'flex', gap:10, justifyContent:'center', marginBottom:52, flexWrap:'wrap' }}>
            {categories.map(c => (
              <button key={c} onClick={()=>setCat(c)} style={{ padding:'9px 20px', borderRadius:100, border:'1.5px solid', borderColor:cat===c?'#1A1208':'#D0C8B8', background:cat===c?'#1A1208':'transparent', color:cat===c?'#F8F4EE':'#8a7a6a', fontSize:11, letterSpacing:2, textTransform:'uppercase', fontWeight:600, cursor:'pointer', fontFamily:"'DM Sans',sans-serif", transition:'all 0.25s' }}>
                {c}
              </button>
            ))}
          </div>
        </FadeIn>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:22 }}>
          {filtered.map((p,i) => (
            <FadeIn key={p.id} delay={i*0.07}>
              <div onClick={()=>setSel(p)} style={{ background:'#fff', borderRadius:14, padding:30, border:'1px solid #EDE8DC', boxShadow:'0 4px 24px rgba(0,0,0,0.06)', cursor:'pointer', position:'relative', overflow:'hidden', transition:'transform 0.3s,box-shadow 0.3s' }}
                onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-8px)';e.currentTarget.style.boxShadow='0 24px 60px rgba(0,0,0,0.14)';}}
                onMouseLeave={e=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='0 4px 24px rgba(0,0,0,0.06)';}}>
                <div style={{ position:'absolute', top:0, right:0, width:60, height:60, background:'linear-gradient(135deg,transparent 50%,rgba(184,120,26,0.07) 50%)', borderRadius:'0 14px 0 0', pointerEvents:'none' }}/>
                <div style={{ fontSize:9, letterSpacing:3, textTransform:'uppercase', color:'#B8781A', marginBottom:8, fontWeight:700 }}>{p.category}</div>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:12 }}>
                  <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:26, fontWeight:700, color:'#1A1208', lineHeight:1.1 }}>{p.name}</h3>
                  <span style={{ background:'#F0EBE0', borderRadius:100, padding:'4px 11px', fontSize:11, color:'#8a7a6a', fontWeight:500, whiteSpace:'nowrap', marginLeft:8, flexShrink:0 }}>{p.weight}</span>
                </div>
                <p style={{ color:'#8a7a6a', fontSize:13, lineHeight:1.65, marginBottom:22 }}>{p.description.slice(0,85)}...</p>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', borderTop:'1px solid #EDE8DC', paddingTop:16 }}>
                  <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:28, color:'#B8781A', fontWeight:700 }}>{p.price}</span>
                  <span style={{ fontSize:10, letterSpacing:2, textTransform:'uppercase', color:'#1A1208', fontWeight:700, borderBottom:'1.5px solid #1A1208', paddingBottom:1 }}>View Specs</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
      {sel && <ProductModal product={sel} onClose={()=>setSel(null)} />}
    </section>
  )
}

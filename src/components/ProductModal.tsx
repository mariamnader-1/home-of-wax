'use client'
import { useEffect } from 'react'

export type Product = {
  id: number
  name: string
  category: string
  price: string
  weight: string
  description: string
  specs: Record<string, string>
}

export default function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [onClose])

  return (
    <div onClick={onClose} style={{ position:'fixed', inset:0, background:'rgba(10,7,3,0.88)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:1000, backdropFilter:'blur(8px)', padding:20 }}>
      <div onClick={e => e.stopPropagation()} style={{ background:'#F8F4EE', borderRadius:18, maxWidth:520, width:'100%', padding:40, position:'relative', boxShadow:'0 30px 90px rgba(0,0,0,0.45)', animation:'modalIn 0.3s ease' }}>
        <button onClick={onClose} style={{ position:'absolute', top:18, right:22, background:'none', border:'none', fontSize:20, cursor:'pointer', color:'#8a7a6a' }}>✕</button>
        <div style={{ fontSize:10, letterSpacing:4, textTransform:'uppercase', color:'#B8781A', marginBottom:6, fontWeight:600 }}>{product.category}</div>
        <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:34, color:'#1A1208', margin:'0 0 6px', fontWeight:700 }}>{product.name}</h2>
        <div style={{ display:'flex', alignItems:'baseline', gap:8, marginBottom:18 }}>
          <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:28, color:'#B8781A', fontWeight:700 }}>{product.price}</span>
          <span style={{ fontSize:13, color:'#8a7a6a' }}>/ {product.weight}</span>
        </div>
        <p style={{ color:'#5a4a3a', lineHeight:1.75, marginBottom:24, fontSize:14 }}>{product.description}</p>
        <div style={{ background:'#EDE8DC', borderRadius:10, padding:20, marginBottom:24 }}>
          <div style={{ fontSize:9, letterSpacing:3, textTransform:'uppercase', color:'#8a7a6a', marginBottom:14, fontWeight:700 }}>Specifications</div>
          {Object.entries(product.specs).map(([k,v]) => (
            <div key={k} style={{ display:'flex', justifyContent:'space-between', borderBottom:'1px solid #D8D0C0', padding:'8px 0', fontSize:13 }}>
              <span style={{ color:'#8a7a6a' }}>{k}</span>
              <span style={{ color:'#1A1208', fontWeight:600 }}>{v}</span>
            </div>
          ))}
        </div>
        <button onClick={onClose} style={{ width:'100%', padding:15, background:'#1A1208', color:'#F8F4EE', border:'none', borderRadius:8, fontSize:11, letterSpacing:3, textTransform:'uppercase', cursor:'pointer', fontWeight:700, transition:'background 0.25s' }}
          onMouseEnter={e => (e.currentTarget.style.background='#B8781A')}
          onMouseLeave={e => (e.currentTarget.style.background='#1A1208')}>
          Contact Us to Order
        </button>
      </div>
    </div>
  )
}

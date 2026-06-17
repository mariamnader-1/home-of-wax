'use client'
import { useEffect, useRef, useState } from 'react'
import { supabase } from '@/lib/supabase'

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

export default function ContactSection() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', message:'' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true); setError('')
    const { error } = await supabase.from('contact_messages').insert([form])
    if (error) setError('Something went wrong. Please try again.')
    else setSubmitted(true)
    setLoading(false)
  }

  const inp = { width:'100%', padding:'14px 16px', background:'#F8F4EE', border:'1.5px solid #E0D8CC', borderRadius:6, color:'#1A1208', fontSize:14, fontFamily:"'DM Sans',sans-serif", outline:'none', transition:'border-color 0.2s' }

  return (
    <section id="contact" style={{ padding:'100px 32px', background:'#F8F4EE' }}>
      <div style={{ maxWidth:640, margin:'0 auto' }}>
        <FadeIn>
          <div style={{ textAlign:'center', marginBottom:56 }}>
            <div style={{ fontSize:9, letterSpacing:5, textTransform:'uppercase', color:'#B8781A', marginBottom:12, fontWeight:700 }}>Get in Touch</div>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(34px,5vw,54px)', fontWeight:400, color:'#1A1208', marginBottom:14 }}>Ready to order?</h2>
            <p style={{ color:'#8a7a6a', fontSize:15, lineHeight:1.75 }}>Browse our catalog, then send us a message. We will get back to you with pricing and delivery options.</p>
          </div>
        </FadeIn>
        {submitted ? (
          <FadeIn>
            <div style={{ textAlign:'center', padding:'64px 40px', background:'#fff', borderRadius:16, border:'1px solid #EDE8DC', boxShadow:'0 8px 40px rgba(0,0,0,0.07)' }}>
              <div style={{ width:56, height:56, background:'rgba(184,120,26,0.1)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 20px', fontSize:24 }}>✉️</div>
              <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:28, color:'#1A1208', marginBottom:8 }}>Message Sent!</h3>
              <p style={{ color:'#8a7a6a', fontSize:14 }}>We will be in touch shortly.</p>
            </div>
          </FadeIn>
        ) : (
          <FadeIn delay={0.12}>
            <form onSubmit={handleSubmit} style={{ background:'#fff', borderRadius:16, padding:48, border:'1px solid #EDE8DC', boxShadow:'0 8px 40px rgba(0,0,0,0.07)' }}>
              {[['Name','text','Your full name','name'],['Email','email','your@email.com','email'],['Phone (optional)','tel','+961 xx xxx xxx','phone']].map(([label,type,placeholder,field]) => (
                <div key={field} style={{ marginBottom:20 }}>
                  <label style={{ display:'block', fontSize:10, letterSpacing:2, textTransform:'uppercase', color:'#8a7a6a', marginBottom:8, fontWeight:700 }}>{label}</label>
                  <input type={type} placeholder={placeholder} value={form[field as keyof typeof form]} required={field!=='phone'}
                    onChange={e=>setForm(s=>({...s,[field]:e.target.value}))}
                    style={inp}
                    onFocus={e=>(e.target.style.borderColor='#B8781A')}
                    onBlur={e=>(e.target.style.borderColor='#E0D8CC')} />
                </div>
              ))}
              <div style={{ marginBottom:28 }}>
                <label style={{ display:'block', fontSize:10, letterSpacing:2, textTransform:'uppercase', color:'#8a7a6a', marginBottom:8, fontWeight:700 }}>Message</label>
                <textarea placeholder="Tell us what materials you need, quantities, or any questions..." rows={5} required value={form.message}
                  onChange={e=>setForm(s=>({...s,message:e.target.value}))}
                  style={{...inp, resize:'vertical'}}
                  onFocus={e=>(e.target.style.borderColor='#B8781A')}
                  onBlur={e=>(e.target.style.borderColor='#E0D8CC')} />
              </div>
              {error && <p style={{ color:'#c0392b', fontSize:13, marginBottom:16 }}>{error}</p>}
              <button type="submit" disabled={loading} style={{ width:'100%', padding:16, background:loading?'#8a7a6a':'#1A1208', color:'#F8F4EE', border:'none', borderRadius:6, fontSize:11, letterSpacing:3, textTransform:'uppercase', cursor:loading?'not-allowed':'pointer', fontWeight:700, fontFamily:"'DM Sans',sans-serif", transition:'background 0.25s' }}
                onMouseEnter={e=>{ if(!loading) e.currentTarget.style.background='#B8781A' }}
                onMouseLeave={e=>{ if(!loading) e.currentTarget.style.background='#1A1208' }}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </FadeIn>
        )}
      </div>
    </section>
  )
}

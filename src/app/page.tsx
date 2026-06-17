import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProductsSection from '@/components/ProductsSection'
import WhyUs from '@/components/WhyUs'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div style={{ background:'#B8781A', padding:'20px 32px' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', display:'flex', gap:48, justifyContent:'center', flexWrap:'wrap' }}>
          {['🕯️ Soy · Beeswax · Paraffin · Sand Wax','🌿 Coconut Oil · Shea Butter','🌸 Premium Fragrance Oils'].map(t=>(
            <span key={t} style={{ fontSize:11, letterSpacing:3, textTransform:'uppercase', color:'#fff', fontWeight:700, whiteSpace:'nowrap', fontFamily:"'DM Sans',sans-serif" }}>{t}</span>
          ))}
        </div>
      </div>
      <ProductsSection />
      <WhyUs />
      <ContactSection />
      <Footer />
    </main>
  )
}

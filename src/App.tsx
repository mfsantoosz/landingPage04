import Header from "@/components/layouts/Header"
import HeroSection from "@/components/sections/HeroSection"
import BrandsSection from "@/components/sections/BrandsSection"

function App() {
 
  return (
    <div className="bg-slate-100">
      <Header />
      <main>
        <HeroSection />
        <BrandsSection />
      </main>
    </div>
  )
}

export default App

import Header from "@/components/layouts/Header"
import HeroSection from "@/components/sections/HeroSection"
import BrandsSection from "@/components/sections/BrandsSection"
import FeaturesSection from "@/components/sections/FeaturesSection"
import ContentSection from "./components/sections/ContentSection"

import contentImg1 from "@/images/contentImg.png"
import contentImg2 from "@/images/contentImg2.png"
import contentImg3 from "@/images/contentImg3.png"
import PricingSection from "@/components/sections/PricingSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"

function App() {
 
  return (
    <div className="bg-slate-100">
      <Header />
      <main>
        <HeroSection />
        <BrandsSection />
        <FeaturesSection />
        <ContentSection 
          title="Track your progress with our advanced site" 
          description="Gain complete visibility into your business performance with our comprehensive analytics dashboard. Monitor key metrics, identify trends, and measure success across all your campaigns in real-time." 
          image={contentImg1} 
        />
        <ContentSection 
          title="Understand your visitors fast. Take quick actions" 
          description="Get instant insights into visitor behavior with our intelligent tracking system. Identify opportunities, spot issues early, and respond quickly to maximize conversions and improve user experience." 
          image={contentImg2} 
          reverse 
        />
        <ContentSection 
          title="Make your customers happy by giving services" 
          description="Deliver exceptional experiences that keep customers coming back. Our platform helps you provide personalized support, streamline service delivery, and build lasting relationships that drive loyalty and growth." 
          image={contentImg3} 
        />
        <PricingSection />
        <TestimonialsSection />
        {/* <Footer /> */}
      </main>
    </div>
  )
}

export default App

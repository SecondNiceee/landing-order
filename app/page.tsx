import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { AboutSection } from "@/components/about-section"
import { GeographySection } from "@/components/geography-section"
import { ClientsSection } from "@/components/clients-section"
import { CTASection } from "@/components/cta-section"
import { ContactsSection } from "@/components/contacts-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <GeographySection />
      <ClientsSection />
      <CTASection />
      <ContactsSection />
      <Footer />
    </main>
  )
}

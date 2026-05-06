"use client"

import Image from "next/image"
import { AnimatedSection, AnimatedText } from "./animated-section"

const clients = [
  {
    name: "ETG",
    logo: "/images/clients/etg.png",
  },
  {
    name: "ФОСАГРО",
    logo: "/images/clients/fosagro.png",
  },
  {
    name: "Увелка",
    logo: "/images/clients/uvelka.png",
  },
  {
    name: "УГМК ИММС",
    logo: "/images/clients/ugmk.png",
  },
]

export function ClientsSection() {
  return (
    <section id="clients" className="py-16 md:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <AnimatedText>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium mb-6">
              Доверие
            </span>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Наши <span className="text-primary">клиенты</span>
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Нам доверяют ведущие компании России
            </p>
          </AnimatedText>
        </div>

        {/* Clients Grid */}
        <AnimatedSection delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {clients.map((client) => (
              <div
                key={client.name}
                className="group relative flex items-center justify-center p-6 md:p-8 rounded-2xl bg-card/30 border border-border/30 hover:border-primary/30 hover:bg-card/50 hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-out cursor-pointer"
              >
                <div className="relative w-full h-16 md:h-20 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                  />
                </div>
                
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

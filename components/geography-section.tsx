"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import { AnimatedText, AnimatedSection } from "./animated-section"

export function GeographySection() {
  return (
    <section id="geography" className="pt-12 pb-12 md:pt-16 md:pb-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedText>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium mb-6">
              Доставка
            </span>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              География <span className="text-primary">поставок</span>
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Наш склад расположен в г. Муром — удобная логистическая точка для
              поставок по всей России
            </p>
          </AnimatedText>
        </div>

        {/* Map Container */}
        <AnimatedSection delay={0.3}>
          <div className="relative rounded-3xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm">
            {/* SVG Map */}
            <div className="relative aspect-[16/9] md:aspect-[21/9] p-8">
              <svg
                viewBox="0 0 1000 500"
                className="w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Background Grid */}
                <defs>
                  <pattern
                    id="grid"
                    width="50"
                    height="50"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 50 0 L 0 0 0 50"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="text-border/30"
                    />
                  </pattern>
                  <radialGradient id="murom-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="oklch(0.65 0.18 230)" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="oklch(0.65 0.18 230)" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="route-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="oklch(0.65 0.18 230)" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="oklch(0.65 0.18 230)" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="oklch(0.65 0.18 230)" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                <rect width="1000" height="500" fill="url(#grid)" />

                {/* Russia Outline (Simplified) */}
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  d="M100,200 Q150,150 250,180 T400,160 T550,150 T700,180 T850,200 Q900,250 880,300 T800,350 Q700,380 600,360 T400,350 T200,320 Q120,280 100,200 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-primary/30"
                />

                {/* Delivery Routes */}
                {[
                  { x1: 420, y1: 240, x2: 200, y2: 200 },
                  { x1: 420, y1: 240, x2: 300, y2: 180 },
                  { x1: 420, y1: 240, x2: 550, y2: 180 },
                  { x1: 420, y1: 240, x2: 700, y2: 200 },
                  { x1: 420, y1: 240, x2: 600, y2: 300 },
                  { x1: 420, y1: 240, x2: 250, y2: 280 },
                ].map((route, i) => (
                  <motion.line
                    key={i}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                    x1={route.x1}
                    y1={route.y1}
                    x2={route.x2}
                    y2={route.y2}
                    stroke="url(#route-gradient)"
                    strokeWidth="2"
                    strokeDasharray="8 4"
                  />
                ))}

                {/* Cities */}
                {[
                  { x: 200, y: 200, name: "СПб" },
                  { x: 300, y: 180, name: "Москва" },
                  { x: 550, y: 180, name: "Казань" },
                  { x: 700, y: 200, name: "Екатеринбург" },
                  { x: 600, y: 300, name: "Самара" },
                  { x: 250, y: 280, name: "Н. Новгород" },
                ].map((city, i) => (
                  <motion.g
                    key={city.name}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                  >
                    <circle
                      cx={city.x}
                      cy={city.y}
                      r="6"
                      className="fill-muted-foreground/50"
                    />
                    <text
                      x={city.x}
                      y={city.y - 15}
                      textAnchor="middle"
                      className="text-xs fill-muted-foreground font-medium"
                    >
                      {city.name}
                    </text>
                  </motion.g>
                ))}

                {/* Murom - Main Point */}
                <motion.g
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  {/* Glow */}
                  <circle cx="420" cy="240" r="60" fill="url(#murom-glow)" />
                  
                  {/* Pulse Animation */}
                  <motion.circle
                    cx="420"
                    cy="240"
                    r="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary"
                    animate={{ r: [20, 40, 20], opacity: [0.8, 0, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  {/* Main Point */}
                  <circle cx="420" cy="240" r="12" className="fill-primary" />
                  <circle cx="420" cy="240" r="6" className="fill-primary-foreground" />
                  
                  {/* Label */}
                  <text
                    x="420"
                    y="280"
                    textAnchor="middle"
                    className="text-sm fill-foreground font-bold"
                  >
                    МУРОМ
                  </text>
                  <text
                    x="420"
                    y="296"
                    textAnchor="middle"
                    className="text-xs fill-primary font-medium"
                  >
                    Главный склад
                  </text>
                </motion.g>
              </svg>
            </div>

            {/* Info Badge */}
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-background/80 backdrop-blur-sm border border-border/50"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    г. Муром, Владимирская область
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Центральное расположение для всей России
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

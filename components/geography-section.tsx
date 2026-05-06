"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import { AnimatedText, AnimatedSection } from "./animated-section"

// City coordinates on the map (relative to viewBox 0 0 1200 600)
const cities = [
  // Northwest
  { x: 85, y: 280, name: "Калининград" },
  { x: 235, y: 95, name: "Мурманск" },
  { x: 200, y: 195, name: "Санкт-Петербург" },
  { x: 310, y: 145, name: "Архангельск" },
  
  // Central
  { x: 250, y: 275, name: "Москва", isHub: true },
  { x: 310, y: 240, name: "Ярославль" },
  { x: 195, y: 320, name: "Брянск" },
  
  // South
  { x: 260, y: 360, name: "Воронеж" },
  { x: 245, y: 420, name: "Ростов-на-Дону" },
  { x: 230, y: 475, name: "Краснодар" },
  { x: 310, y: 400, name: "Волгоград" },
  
  // Volga-Ural
  { x: 340, y: 285, name: "Нижний Новгород" },
  { x: 395, y: 295, name: "Казань" },
  { x: 420, y: 340, name: "Самара" },
  { x: 465, y: 265, name: "Пермь" },
  { x: 530, y: 295, name: "Екатеринбург" },
  { x: 520, y: 345, name: "Челябинск" },
  { x: 575, y: 305, name: "Тюмень" },
  
  // Siberia
  { x: 660, y: 330, name: "Омск" },
  { x: 730, y: 295, name: "Томск" },
  { x: 740, y: 350, name: "Новосибирск" },
  { x: 830, y: 340, name: "Красноярск" },
  
  // Far East
  { x: 985, y: 220, name: "Якутск" },
  { x: 1085, y: 360, name: "Хабаровск" },
  { x: 1115, y: 440, name: "Владивосток" },
]

// Murom coordinates (central hub)
const murom = { x: 305, y: 280, name: "Муром" }

// Generate curved path between two points
function generateCurvedPath(from: { x: number; y: number }, to: { x: number; y: number }, curveIntensity = 0.2) {
  const midX = (from.x + to.x) / 2
  const midY = (from.y + to.y) / 2
  const dx = to.x - from.x
  const dy = to.y - from.y
  const dist = Math.sqrt(dx * dx + dy * dy)
  
  // Perpendicular offset for curve
  const offsetX = -dy * curveIntensity * (dist > 200 ? 0.15 : 0.25)
  const offsetY = dx * curveIntensity * (dist > 200 ? 0.15 : 0.25)
  
  const ctrlX = midX + offsetX
  const ctrlY = midY + offsetY
  
  return `M ${from.x} ${from.y} Q ${ctrlX} ${ctrlY} ${to.x} ${to.y}`
}

// Russia map outline path (simplified but recognizable)
const russiaPath = `
  M 70,290 
  L 60,270 L 55,250 L 70,230 L 90,220 L 85,200 L 100,180 
  L 130,170 L 160,155 L 180,140 L 200,130 L 220,115 L 250,100 
  L 280,90 L 310,85 L 350,95 L 400,110 L 450,100 L 500,95 
  L 550,100 L 600,95 L 650,90 L 700,85 L 750,90 L 800,100 
  L 850,95 L 900,100 L 950,120 L 1000,150 L 1050,180 
  L 1100,200 L 1130,230 L 1140,270 L 1150,310 L 1140,350 
  L 1120,390 L 1100,420 L 1130,450 L 1140,480 L 1120,500 
  L 1080,480 L 1050,450 L 1020,430 L 980,420 L 950,440 
  L 920,430 L 880,420 L 850,430 L 820,420 L 780,430 
  L 740,440 L 700,430 L 660,420 L 620,430 L 580,420 
  L 540,430 L 500,440 L 460,430 L 420,420 L 380,430 
  L 340,440 L 300,450 L 260,470 L 230,490 L 200,500 
  L 180,490 L 160,470 L 150,440 L 160,410 L 180,380 
  L 170,350 L 140,340 L 120,320 L 100,310 L 80,300 
  L 70,290 Z
  
  M 60,280 L 45,275 L 35,290 L 45,310 L 60,305 L 70,290 Z
`

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
          <div className="relative rounded-3xl overflow-hidden border border-border/50 bg-card/30 backdrop-blur-sm">
            {/* SVG Map */}
            <div className="relative aspect-[16/9] md:aspect-[2/1] p-4 md:p-8">
              <svg
                viewBox="0 0 1200 550"
                className="w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  {/* Gradient for routes */}
                  <linearGradient id="route-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="oklch(0.65 0.18 230)" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="oklch(0.65 0.18 230)" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="oklch(0.65 0.18 230)" stopOpacity="0.3" />
                  </linearGradient>
                  
                  {/* Glow for Murom */}
                  <radialGradient id="murom-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="oklch(0.65 0.18 230)" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="oklch(0.65 0.18 230)" stopOpacity="0" />
                  </radialGradient>

                  {/* Animated dash pattern */}
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Russia Map Outline */}
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  d={russiaPath}
                  fill="currentColor"
                  fillOpacity="0.05"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-muted-foreground/40"
                />

                {/* Delivery Routes from Murom to all cities */}
                {cities.map((city, i) => {
                  const curveDirection = i % 2 === 0 ? 0.15 : -0.15
                  const path = generateCurvedPath(murom, city, curveDirection)
                  
                  return (
                    <motion.path
                      key={city.name}
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      transition={{ 
                        duration: 1.2, 
                        delay: 0.8 + i * 0.08,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true }}
                      d={path}
                      fill="none"
                      stroke="url(#route-gradient)"
                      strokeWidth="1.5"
                      strokeDasharray="6 4"
                      filter="url(#glow)"
                    />
                  )
                })}

                {/* City Markers */}
                {cities.map((city, i) => (
                  <motion.g
                    key={city.name}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 1.5 + i * 0.05,
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                  >
                    {/* City dot */}
                    <circle
                      cx={city.x}
                      cy={city.y}
                      r={city.isHub ? 8 : 5}
                      className={city.isHub ? "fill-primary" : "fill-muted-foreground/70"}
                    />
                    {city.isHub && (
                      <circle
                        cx={city.x}
                        cy={city.y}
                        r="3"
                        className="fill-background"
                      />
                    )}
                    
                    {/* City label */}
                    <text
                      x={city.x}
                      y={city.y - 10}
                      textAnchor="middle"
                      className="text-[9px] md:text-[10px] fill-foreground/80 font-medium"
                      style={{ fontFamily: 'system-ui, sans-serif' }}
                    >
                      {city.name}
                    </text>
                  </motion.g>
                ))}

                {/* Murom - Main Hub */}
                <motion.g
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
                  viewport={{ once: true }}
                >
                  {/* Glow effect */}
                  <circle cx={murom.x} cy={murom.y} r="45" fill="url(#murom-glow)" />
                  
                  {/* Pulse animation */}
                  <motion.circle
                    cx={murom.x}
                    cy={murom.y}
                    r="15"
                    fill="none"
                    stroke="oklch(0.65 0.18 230)"
                    strokeWidth="2"
                    animate={{ 
                      r: [15, 30, 15], 
                      opacity: [0.8, 0, 0.8] 
                    }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Second pulse */}
                  <motion.circle
                    cx={murom.x}
                    cy={murom.y}
                    r="15"
                    fill="none"
                    stroke="oklch(0.65 0.18 230)"
                    strokeWidth="1.5"
                    animate={{ 
                      r: [15, 35, 15], 
                      opacity: [0.5, 0, 0.5] 
                    }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                  
                  {/* Main point */}
                  <circle 
                    cx={murom.x} 
                    cy={murom.y} 
                    r="12" 
                    className="fill-primary"
                    filter="url(#glow)"
                  />
                  <circle 
                    cx={murom.x} 
                    cy={murom.y} 
                    r="5" 
                    className="fill-background"
                  />
                  
                  {/* Label */}
                  <text
                    x={murom.x}
                    y={murom.y + 28}
                    textAnchor="middle"
                    className="text-[12px] fill-foreground font-bold"
                    style={{ fontFamily: 'system-ui, sans-serif' }}
                  >
                    МУРОМ
                  </text>
                  <text
                    x={murom.x}
                    y={murom.y + 42}
                    textAnchor="middle"
                    className="text-[9px] fill-primary font-medium"
                    style={{ fontFamily: 'system-ui, sans-serif' }}
                  >
                    Главный склад
                  </text>
                </motion.g>
              </svg>
            </div>

            {/* Info Badge */}
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
                viewport={{ once: true }}
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
                    Доставка в {cities.length}+ городов России
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Stats Badge */}
            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 }}
                viewport={{ once: true }}
                className="px-4 py-3 rounded-xl bg-background/80 backdrop-blur-sm border border-border/50"
              >
                <p className="text-2xl font-bold text-primary">{cities.length}</p>
                <p className="text-xs text-muted-foreground">городов доставки</p>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

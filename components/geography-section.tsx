"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import { AnimatedText, AnimatedSection } from "./animated-section"

// City coordinates on the map (relative to viewBox 0 0 1200 550)
const cities = [
  // Northwest - adjusted to fit inside map
  { x: 155, y: 280, name: "Калининград" },
  { x: 210, y: 175, name: "Мурманск" },
  { x: 205, y: 240, name: "Санкт-Петербург" },
  { x: 320, y: 190, name: "Архангельск" },
  
  // Central
  { x: 255, y: 295, name: "Москва", isHub: true },
  { x: 315, y: 265, name: "Ярославль" },
  { x: 210, y: 340, name: "Брянск" },
  
  // South
  { x: 265, y: 370, name: "Воронеж" },
  { x: 260, y: 420, name: "Ростов-на-Дону" },
  { x: 250, y: 465, name: "Краснодар" },
  { x: 330, y: 400, name: "Волгоград" },
  
  // Volga-Ural
  { x: 350, y: 300, name: "Нижний Новгород" },
  { x: 405, y: 310, name: "Казань" },
  { x: 430, y: 355, name: "Самара" },
  { x: 475, y: 280, name: "Пермь" },
  { x: 540, y: 310, name: "Екатеринбург" },
  { x: 530, y: 360, name: "Челябинск" },
  { x: 585, y: 320, name: "Тюмень" },
  
  // Siberia
  { x: 665, y: 345, name: "Омск" },
  { x: 735, y: 310, name: "Томск" },
  { x: 745, y: 365, name: "Новосибирск" },
  { x: 835, y: 355, name: "Красноярск" },
  
  // Far East - moved inside map boundaries
  { x: 960, y: 240, name: "Якутск" },
  { x: 1050, y: 365, name: "Хабаровск" },
  { x: 1080, y: 430, name: "Владивосток" },
]

// Murom coordinates (central hub)
const murom = { x: 315, y: 300, name: "Муром" }

// Curve offsets for each city to avoid overlaps (positive = curve up/left, negative = curve down/right)
const curveOffsets: { [key: string]: { intensity: number; direction: number } } = {
  // Northwest - larger curves for outer cities
  "Калининград": { intensity: 0.85, direction: 1 },
  "Мурманск": { intensity: 0.65, direction: -1 },
  "Санкт-Петербург": { intensity: 0.45, direction: 1 },
  "Архангельск": { intensity: 0.55, direction: -1 },
  
  // Central - smaller curves, spread apart
  "Москва": { intensity: 0.75, direction: 1 },
  "Ярославль": { intensity: 0.3, direction: -1 },
  "Брянск": { intensity: 0.7, direction: -1 },
  
  // South - alternate to avoid crossing with larger offsets
  "Воронеж": { intensity: 0.5, direction: 1 },
  "Ростов-на-Дону": { intensity: 0.65, direction: -1 },
  "Краснодар": { intensity: 0.8, direction: 1 },
  "Волгоград": { intensity: 0.4, direction: -1 },
  
  // Volga-Ural - spread out curves more
  "Нижний Новгород": { intensity: 0.25, direction: 1 },
  "Казань": { intensity: 0.35, direction: -1 },
  "Самара": { intensity: 0.45, direction: 1 },
  "Пермь": { intensity: 0.5, direction: -1 },
  "Екатеринбург": { intensity: 0.35, direction: 1 },
  "Челябинск": { intensity: 0.55, direction: -1 },
  "Тюмень": { intensity: 0.4, direction: 1 },
  
  // Siberia - larger curves for longer distances, alternate directions
  "Омск": { intensity: 0.3, direction: -1 },
  "Томск": { intensity: 0.25, direction: 1 },
  "Новосибирск": { intensity: 0.4, direction: -1 },
  "Красноярск": { intensity: 0.3, direction: 1 },
  
  // Far East - distinct curves with larger offsets
  "Якутск": { intensity: 0.35, direction: -1 },
  "Хабаровск": { intensity: 0.25, direction: 1 },
  "Владивосток": { intensity: 0.4, direction: -1 },
}

// Generate curved path between two points with custom intensity and direction
function generateCurvedPath(from: { x: number; y: number }, to: { x: number; y: number }, cityName: string) {
  const midX = (from.x + to.x) / 2
  const midY = (from.y + to.y) / 2
  const dx = to.x - from.x
  const dy = to.y - from.y
  
  const curve = curveOffsets[cityName] || { intensity: 0.3, direction: 1 }
  
  // Perpendicular offset for curve
  const offsetX = -dy * curve.intensity * curve.direction
  const offsetY = dx * curve.intensity * curve.direction
  
  const ctrlX = midX + offsetX
  const ctrlY = midY + offsetY
  
  return `M ${from.x} ${from.y} Q ${ctrlX} ${ctrlY} ${to.x} ${to.y}`
}

// Russia map outline path - realistic shape with all cities inside
const russiaPath = `
  M 145,270 
  L 140,250 L 150,230 L 165,210 L 180,195 L 175,175 L 195,160 
  L 225,150 L 260,140 L 295,130 L 340,125 L 390,130 L 440,140 
  L 490,130 L 545,125 L 600,130 L 655,125 L 715,120 L 775,125 
  L 835,130 L 895,135 L 955,155 L 1010,185 L 1060,215 
  L 1100,250 L 1115,290 L 1120,340 L 1115,385 
  L 1095,420 L 1080,450 L 1095,475 L 1085,500 
  L 1055,490 L 1020,465 L 985,450 L 945,455 
  L 905,445 L 865,440 L 825,445 L 785,440 L 745,450 
  L 705,445 L 665,435 L 625,445 L 585,435 
  L 545,445 L 505,455 L 465,445 L 425,435 L 385,445 
  L 345,455 L 305,465 L 265,480 L 235,495 L 210,505 
  L 185,495 L 165,475 L 155,450 L 165,420 L 180,390 
  L 175,365 L 155,350 L 140,330 L 135,305 L 140,285 
  L 145,270 Z
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
            <div className="relative aspect-[4/3] md:aspect-[16/9] p-2 md:p-4">
              <svg
                viewBox="100 100 1050 450"
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
                  strokeWidth="1"
                  className="text-muted-foreground/40"
                />

                {/* Delivery Routes from Murom to all cities */}
                {cities.map((city, i) => {
                  const path = generateCurvedPath(murom, city, city.name)
                  
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
                      strokeWidth="1"
                      strokeDasharray="4 3"
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

"use client"

import { motion } from "framer-motion"
import {
  ShieldCheck,
  Package,
  Layers,
  Warehouse,
  Truck,
  CreditCard,
} from "lucide-react"
import {
  AnimatedSection,
  AnimatedText,
  StaggerChildren,
  StaggerItem,
} from "./animated-section"

const benefits = [
  {
    icon: ShieldCheck,
    title: "Гарантия качества",
    description: "Сертифицированная продукция с полным пакетом документов",
  },
  {
    icon: Package,
    title: "Большой ассортимент",
    description: "Более 1000 наименований товаров в постоянном наличии",
  },
  {
    icon: Layers,
    title: "Проекты любой сложности",
    description: "Комплектуем объекты от небольших до крупных строек",
  },
  {
    icon: Warehouse,
    title: "Большой склад",
    description: "Собственный склад в Муроме с оперативной отгрузкой",
  },
  {
    icon: Truck,
    title: "Гибкая логистика",
    description: "Доставка по всей России любым удобным транспортом",
  },
  {
    icon: CreditCard,
    title: "Гибкие условия оплаты",
    description: "Работаем с НДС, возможна отсрочка платежа",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        
        {/* Floating gradient orbs - optimized with will-change and GPU acceleration */}
        <motion.div
          initial={{ opacity: 0.4 }}
          animate={{ 
            opacity: [0.4, 0.7, 0.4],
            x: [0, 30, 0],
            y: [0, -25, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[10%] w-[200px] h-[200px] bg-primary/35 rounded-full blur-3xl will-change-transform"
        />
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            x: [0, -35, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-[10%] w-[200px] h-[200px] bg-accent/35 rounded-full blur-3xl will-change-transform"
        />
        <motion.div
          initial={{ opacity: 0.25 }}
          animate={{ 
            opacity: [0.25, 0.5, 0.25],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-primary/30 rounded-full blur-3xl will-change-transform"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <AnimatedText>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-sm text-accent font-medium mb-6">
              Почему мы
            </span>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Почему с нами{" "}
              <span className="text-accent">стоит работать?</span>
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Более 35 лет поставляем материалы верхнего строения пути для
              железнодорожных предприятий и строительных организаций по всей
              России. Собственный склад в Муроме, большой ассортимент продукции в
              наличии и стабильные поставки позволяют быстро закрывать заявки
              любого объема — от небольших партий до крупных объектов.
            </p>
          </AnimatedText>
        </div>

        {/* Benefits Grid */}
        <StaggerChildren
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {benefits.map((benefit) => (
            <StaggerItem key={benefit.title}>
              <div className="benefit-card group relative p-6 rounded-2xl bg-card/50 border border-primary/30 hover:border-primary/60 hover:bg-card cursor-pointer">
                {/* Icon */}
                <div className="benefit-icon w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>

                {/* Permanent Glow Effect */}
                <div className="benefit-glow-outer absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/20 to-accent/10 blur-sm pointer-events-none -z-10" />
                <div className="benefit-glow-inner absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 pointer-events-none" />
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Stats Bar */}
        <AnimatedSection delay={0.4} className="mt-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-border/50">
            <div className="stat-item text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-1">35+</p>
              <p className="text-muted-foreground text-sm">лет на рынке</p>
            </div>
            <div className="w-px h-12 bg-border hidden md:block" />
            <div className="stat-item text-center">
              <p className="text-4xl md:text-5xl font-bold text-accent mb-1">1000+</p>
              <p className="text-muted-foreground text-sm">наименований</p>
            </div>
            <div className="w-px h-12 bg-border hidden md:block" />
            <div className="stat-item text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-1">500+</p>
              <p className="text-muted-foreground text-sm">клиентов</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

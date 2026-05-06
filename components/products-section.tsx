"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import {
  AnimatedSection,
  AnimatedText,
  StaggerChildren,
  StaggerItem,
} from "./animated-section"

const products = [
  {
    title: "Рельсы, шпалы, крепежные материалы",
    description:
      "Широкий ассортимент рельсов различных типов, деревянные и железобетонные шпалы, полный комплект крепежных элементов",
    image: "/images/rails.jpg",
    color: "from-primary/20 to-accent/20",
  },
  {
    title: "Путевой инструмент",
    description:
      "Профессиональный инструмент для укладки, ремонта и обслуживания железнодорожных путей",
    image: "/images/tools.jpg",
    color: "from-accent/20 to-primary/20",
  },
  {
    title: "Запчасти для вагонов",
    description:
      "Оригинальные комплектующие и запасные части для грузовых и пассажирских вагонов",
    image: "/images/wagon-parts.jpg",
    color: "from-primary/20 to-accent/20",
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-16 md:py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <AnimatedText>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium mb-6">
              Наша продукция
            </span>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Комплексные решения для{" "}
              <span className="text-primary">железнодорожной отрасли</span>
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Выберите категорию продукции для получения подробной информации
            </p>
          </AnimatedText>
        </div>

        <StaggerChildren
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          staggerDelay={0.15}
        >
          {products.map((product) => (
            <StaggerItem key={product.title}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative h-full cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-card border border-border/50 h-full">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-60`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="relative p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {product.description}
                    </p>

                    {/* Arrow */}
                    <div className="mt-6 flex items-center gap-2 text-primary">
                      <span className="text-sm font-medium">Подробнее</span>
                      <motion.div
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute -inset-px bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

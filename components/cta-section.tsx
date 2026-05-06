"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedText, AnimatedSection } from "./animated-section"

export function CTASection() {
  return (
    <section id="request" className="py-16 md:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        {/* Blue glowing circles */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          transition={{ duration: 1 }}
          className="absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[100px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/15 rounded-full blur-[150px]"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative">
        <AnimatedSection>
          <div className="relative p-8 md:p-16 rounded-3xl bg-gradient-to-br from-card via-card/80 to-card border border-border/50 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">
                  Бесплатная консультация
                </span>
              </motion.div>

              {/* Title */}
              <AnimatedText delay={0.1}>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                  Оставьте заявку на расчёт{" "}
                  <span className="text-primary">комплектации</span>
                </h2>
              </AnimatedText>

              {/* Description */}
              <AnimatedText delay={0.2}>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 text-pretty">
                  Подберём необходимые материалы под ваш объект, рассчитаем объём
                  поставки и подготовим коммерческое предложение в кратчайшие
                  сроки. Поможем выбрать оптимальное решение по наличию, срокам и
                  стоимости.
                </p>
              </AnimatedText>

              {/* CTA Button */}
              <AnimatedSection delay={0.3}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 rounded-full shadow-xl shadow-primary/30 h-16 text-lg group"
                  >
                    Оформить заявку
                    <motion.span
                      className="ml-2"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                    >
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.span>
                  </Button>
                </motion.div>
              </AnimatedSection>

              {/* Trust Badges */}
              <AnimatedSection delay={0.4}>
                <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Ответ в течение 2 часов
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Без скрытых платежей
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    Работаем с НДС
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

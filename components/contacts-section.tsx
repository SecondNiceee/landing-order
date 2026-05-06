"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Train } from "lucide-react"
import { AnimatedText, AnimatedSection, StaggerChildren, StaggerItem } from "./animated-section"

export function ContactsSection() {
  return (
    <section id="contacts" className="py-16 md:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <AnimatedText>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium mb-6">
                Контакты
              </span>
            </AnimatedText>
            <AnimatedText delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Свяжитесь{" "}
                <span className="text-primary">с нами</span>
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="text-muted-foreground text-lg mb-10">
                Готовы ответить на ваши вопросы и помочь с подбором материалов
              </p>
            </AnimatedText>

            {/* Contact Info */}
            <StaggerChildren className="space-y-6" staggerDelay={0.1}>
              <StaggerItem>
                <motion.a
                  href="tel:+79995448055"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Телефон</p>
                    <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      +7 999 544 80 55
                    </p>
                  </div>
                </motion.a>
              </StaggerItem>

              <StaggerItem>
                <motion.a
                  href="mailto:vsp@lsknn.ru"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      vsp@lsknn.ru
                    </p>
                  </div>
                </motion.a>
              </StaggerItem>

              <StaggerItem>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Адрес</p>
                    <p className="text-lg font-semibold text-foreground">
                      125130, г. Москва
                    </p>
                    <p className="text-muted-foreground">
                      ул. Зои и Александра Космодемьянских, д. 10, кв. 216
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            </StaggerChildren>
          </div>

          {/* Right Column - Company Card */}
          <AnimatedSection delay={0.3} direction="left">
            <div className="relative h-full">
              <motion.div
                whileHover={{ y: -4 }}
                className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-card via-card/90 to-primary/10 border border-primary/30 h-full shadow-[0_0_40px_rgba(56,189,248,0.15)]"
              >
                {/* Decorative Glow Elements */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-2xl" />
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-cyan-500/20 opacity-50 blur-sm pointer-events-none -z-10" />

                <div className="relative">
                  {/* Logo */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                      <Train className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        ООО «ЛСК-НН»
                      </h3>
                      <p className="text-muted-foreground">
                        Железнодорожные материалы ВСП
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Более 35 лет мы являемся надёжным поставщиком материалов
                    верхнего строения пути для железнодорожных предприятий и
                    строительных организаций по всей России.
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {[
                      "Сертифицированная продукция",
                      "Собственный склад в Муроме",
                      "Оперативная доставка",
                      "Гибкие условия оплаты",
                    ].map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

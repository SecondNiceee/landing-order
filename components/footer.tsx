"use client"

import { motion } from "framer-motion"
import { Train } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <Train className="w-7 h-7 text-primary" />
            </div>
            <div>
              <span className="font-bold text-foreground">ЛСК-НН</span>
              <p className="text-xs text-muted-foreground">Материалы ВСП</p>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm"
          >
            <a
              href="#products"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Продукция
            </a>
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              О компании
            </a>
            <a
              href="#geography"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              География
            </a>
            <a
              href="#contacts"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Контакты
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm text-muted-foreground"
          >
            © {currentYear} ООО «ЛСК-НН». Все права защищены.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}

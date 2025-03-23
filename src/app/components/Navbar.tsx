"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="border-b border-border bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-xl tracking-tight"
          >
            SyncPaste
          </motion.div>
        </Link>
        <nav className="flex gap-4">
          <Button variant={pathname === "/login" ? "default" : "outline"} asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button variant={pathname === "/register" ? "default" : "outline"} asChild>
            <Link href="/register">Register</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}


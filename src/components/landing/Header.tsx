'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="text-xl font-bold text-white">Rolevio</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-dark-300 hover:text-white transition">
              功能
            </Link>
            <Link href="#agents" className="text-dark-300 hover:text-white transition">
              Agent
            </Link>
            <Link href="#pricing" className="text-dark-300 hover:text-white transition">
              定价
            </Link>
            <Link href="/docs" className="text-dark-300 hover:text-white transition">
              文档
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-dark-300 hover:text-white transition"
            >
              登录
            </Link>
            <Link
              href="/register"
              className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition"
            >
              免费开始
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              <Link href="#features" className="text-dark-300 hover:text-white transition">
                功能
              </Link>
              <Link href="#agents" className="text-dark-300 hover:text-white transition">
                Agent
              </Link>
              <Link href="#pricing" className="text-dark-300 hover:text-white transition">
                定价
              </Link>
              <Link href="/login" className="text-dark-300 hover:text-white transition">
                登录
              </Link>
              <Link
                href="/register"
                className="bg-primary-600 text-white px-4 py-2 rounded-lg text-center"
              >
                免费开始
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Início', href: '#home' },
    { name: 'Recursos', href: '#features' },
    { name: 'Como Funciona', href: '#how-it-works' },
    { name: 'Benefícios', href: '#benefits' },
    { name: 'Contato', href: '#contact' }
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <span className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              SmartCiclo
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors hover:text-primary-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105">
              Entre em contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-md font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2">
                <button className="w-full bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  Entre em contato
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Instagram, Facebook, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '#about' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-12 py-4 border-b',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 border-border' : 'bg-transparent border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-serif font-bold tracking-[0.25em] text-gold italic editorial-underline"
        >
          ZEENORA
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path.startsWith('#') ? '/' + link.path : link.path}
              className={cn(
                'text-[10px] font-medium tracking-[0.2em] uppercase transition-colors hover:text-gold mx-6',
                location.pathname === link.path ? 'text-gold' : 'text-[#777]'
              )}
            >
              {link.name}
            </Link>
          ))}
          <button className="ml-6 px-6 py-2 bg-gold text-white text-[10px] uppercase tracking-widest font-bold rounded-full shadow-lg shadow-[#D4AF3744] hover:bg-premium-black transition-all">
            Shop Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-premium-black"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t mt-4 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path.startsWith('#') ? '/' + link.path : link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-serif font-medium text-premium-black hover:text-rose-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex space-x-6 pt-4 border-t">
                <Facebook size={20} className="text-rose-gold" />
                <Instagram size={20} className="text-rose-gold" />
                <Youtube size={20} className="text-rose-gold" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="h-40 md:h-24 bg-white border-t border-border px-12 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex flex-wrap justify-center gap-12">
        <div className="text-center md:text-left">
          <div className="text-[8px] uppercase tracking-[0.2em] text-[#999] mb-1">Call Us</div>
          <div className="text-xs font-medium text-premium-black">+8801676393979</div>
        </div>
        <div className="text-center md:text-left">
          <div className="text-[8px] uppercase tracking-[0.2em] text-[#999] mb-1">Visit</div>
          <div className="text-xs font-medium text-premium-black">Dhaka, Bangladesh</div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row items-center gap-6">
         <div className="flex space-x-4">
           <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-[10px] text-[#999] hover:border-gold hover:text-gold transition-colors">FB</div>
           <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-[10px] text-[#999] hover:border-gold hover:text-gold transition-colors">IG</div>
           <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-[10px] text-[#999] hover:border-gold hover:text-gold transition-colors">YT</div>
         </div>
         <div className="hidden md:block h-4 w-px bg-border"></div>
         <div className="text-[10px] tracking-wider text-[#999]">&copy; {new Date().getFullYear()} ZEENORA. All rights reserved.</div>
      </div>
    </footer>
  );
}

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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-3xl font-serif font-bold tracking-tighter text-rose-gold"
        >
          Zeenora
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path.startsWith('#') ? '/' + link.path : link.path}
              className={cn(
                'text-sm font-medium tracking-wide uppercase transition-colors hover:text-rose-gold mx-4',
                location.pathname === link.path ? 'text-rose-gold' : 'text-premium-black/70'
              )}
            >
              {link.name}
            </Link>
          ))}
          <button className="ml-4 p-2 text-premium-black hover:text-rose-gold transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute top-0 right-0 w-4 h-4 bg-rose-gold text-white text-[10px] rounded-full flex items-center justify-center">0</span>
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
    <footer className="bg-gold-light pt-20 pb-10 px-6 border-t border-gold/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-4xl font-serif font-bold text-rose-gold mb-4">Zeenora</h2>
          <p className="text-premium-black/60 max-w-md leading-relaxed mb-8">
            Elegance You Deserve. We don't just sell jewelry; we sell happiness and timeless style. Hand-selected pieces directly imported to bring quality to your doorstep.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full border border-rose-gold/30 flex items-center justify-center text-rose-gold hover:bg-rose-gold hover:text-white transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-rose-gold/30 flex items-center justify-center text-rose-gold hover:bg-rose-gold hover:text-white transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-rose-gold/30 flex items-center justify-center text-rose-gold hover:bg-rose-gold hover:text-white transition-all">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-rose-gold">Quick Links</h3>
          <ul className="space-y-4 text-premium-black/70">
            <li><Link to="/" className="hover:text-rose-gold transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-rose-gold transition-colors">Products</Link></li>
            <li><Link to="/#about" className="hover:text-rose-gold transition-colors">About Us</Link></li>
            <li><Link to="/#contact" className="hover:text-rose-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-rose-gold">Contact Us</h3>
          <ul className="space-y-4 text-premium-black/70 italic">
            <li>Dhaka, Bangladesh</li>
            <li>+8801676393979</li>
            <li>support@zeenora.com</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gold/10 text-center">
        <p className="text-sm text-premium-black/40">
          © {new Date().getFullYear()} Zeenora Jewelry. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

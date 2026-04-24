import { ArrowRight, ShoppingCart, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '@/src/constants';

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden bg-editorial-bg">
      <div className="absolute inset-0 bg-gradient-to-br from-white to-pale-pink z-10" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-soft-pink opacity-20 rounded-full blur-3xl z-0" />
      
      <div className="relative z-20 max-w-7xl mx-auto px-12 md:px-24 w-full flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold mb-8 block">Fine Jewelry Atelier</div>
          <h1 className="text-7xl md:text-9xl font-serif text-premium-black mb-8 leading-[0.85] tracking-tighter">
            Elegance <br /> <span className="text-gold italic">You</span> <br /> Deserve
          </h1>
          <p className="text-sm text-[#666] mb-12 max-w-sm leading-relaxed tracking-wide">
            "Happiness is the only material we truly sell." Hand-selected collections imported directly for perfection.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              to="/products"
              className="bg-gold text-white px-10 py-3 text-xs font-bold rounded-full shadow-lg shadow-gold/20 hover:bg-premium-black transition-all flex items-center justify-center gap-2 uppercase tracking-widest"
            >
              Shop Now
            </Link>
          </div>
        </motion.div>
        
        <div className="hidden lg:block relative w-1/3 aspect-[3/4] bg-editorial-bg rounded-full overflow-hidden border-[16px] border-white luxury-shadow scale-90 translate-y-12">
           <img
            src="https://images.unsplash.com/photo-1515562141207-7a18b5ce7142?auto=format&fit=crop&q=80&w=800&h=1200"
            alt="Zeenora Featured"
            className="w-full h-full object-cover grayscale-[10%]"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
}

export function ProductSection() {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <section className="py-24 px-12 max-w-7xl mx-auto border-y border-border">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="text-[10px] uppercase tracking-widest text-gold font-bold mb-4 block">Curated Selection</div>
          <h2 className="text-4xl md:text-5xl font-serif italic text-premium-black">Our Masterpieces</h2>
        </div>
        <Link 
          to="/products"
          className="text-[10px] uppercase font-bold tracking-widest text-[#777] flex items-center gap-2 hover:text-gold transition-colors pb-1"
        >
          View All Collections <ArrowRight size={12} />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group bg-white p-4 rounded-xl border border-border hover:border-gold transition-all"
          >
            <div className="relative aspect-square overflow-hidden rounded-lg mb-4 bg-editorial-bg flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2 left-2 px-2 py-1 bg-white text-[8px] uppercase tracking-wider text-gold font-bold rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Hand-Picked
              </div>
            </div>
            <div className="text-left">
              <h3 className="text-xs font-bold text-premium-black uppercase truncate mb-1">{product.name}</h3>
              <div className="text-gold font-serif text-sm italic">{product.price}</div>
              <button className="mt-4 w-full py-2 border border-gold text-gold text-[9px] uppercase font-bold rounded-full hover:bg-gold hover:text-white transition-colors tracking-widest">
                Order Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function PreOrderSection({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section id="pre-order" className="py-24 px-12">
      <div className="max-w-7xl mx-auto bg-premium-black text-white rounded-3xl p-12 md:p-20 relative overflow-hidden flex flex-col items-center text-center">
        <div className="absolute -right-12 -top-12 w-64 h-64 bg-gold rounded-full opacity-10 blur-3xl" />
        <div className="absolute -left-12 -bottom-12 w-64 h-64 bg-gold rounded-full opacity-5 blur-2xl" />
        
        <div className="relative z-10 max-w-2xl">
          <h3 className="text-4xl md:text-6xl font-serif italic mb-4 leading-tight tracking-tighter">Special Pre-Orders</h3>
          <p className="text-xs md:text-sm text-[#AAA] mb-12 uppercase tracking-[0.3em] font-medium leading-relaxed">
            Can't find your perfect fit? We take custom requests and curated pre-orders directly from our master artisans.
          </p>
          <button
            onClick={onOpenModal}
            className="w-fit px-12 py-4 bg-white text-premium-black text-xs uppercase tracking-widest font-bold rounded-full hover:bg-gold hover:text-white transition-all shadow-xl"
          >
            Place Pre-Order
          </button>
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative">
          <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img
              src="https://images.unsplash.com/photo-1573408302324-4643fe424397?auto=format&fit=crop&q=80&w=800&h=1000"
              alt="About Zeenora"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="absolute -bottom-8 -right-8 bg-white p-10 rounded-2xl border border-border shadow-sm max-w-xs"
          >
            <div className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold mb-4 block underline decoration-soft-pink underline-offset-4">Our Philosophy</div>
            <p className="font-serif italic text-2xl text-premium-black leading-tight">
              "We sell happiness, not materials."
            </p>
          </motion.div>
        </div>
        
        <div className="flex flex-col justify-center">
          <h2 className="text-6xl md:text-8xl font-serif mb-10 text-premium-black leading-[0.9] tracking-tighter">
            Curated <br /> <span className="text-gold italic">Quality</span> <br /> from China
          </h2>
          <div className="space-y-8 text-[#666] leading-relaxed text-sm tracking-wide">
            <p className="text-lg text-premium-black font-medium leading-normal italic">
              "We sell imported jewelry directly from China with a focus on quality and style."
            </p>
            <p>
              Hand-selected for the discerning individual, our pieces are more than just accessories—they are curated stories of beauty and artistry.
            </p>
            <ul className="space-y-6 pt-6">
              <li className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all">
                  ✦
                </div>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Direct Artisanal Import</span>
              </li>
              <li className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all">
                  ✦
                </div>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Curation First Approach</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SocialSection() {
  const platforms = [
    { name: 'Facebook', label: 'FB' },
    { name: 'Instagram', label: 'IG' },
    { name: 'YouTube', label: 'YT' },
  ];

  return (
    <section className="py-32 border-t border-border bg-white">
      <div className="max-w-7xl mx-auto px-12 text-center">
        <div className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold mb-4 block">Follow Our Journey</div>
        <h2 className="text-4xl font-serif italic mb-16">Connect With Zeenora</h2>
        <div className="flex justify-center gap-12 md:gap-24">
          {platforms.map((p) => (
            <a
              key={p.name}
              href="#"
              className="group flex flex-col items-center gap-6"
            >
              <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center text-xs font-bold text-[#777] group-hover:border-gold group-hover:text-gold transition-all duration-500 group-hover:scale-110">
                {p.label}
              </div>
              <span className="text-[8px] uppercase tracking-[0.3em] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {p.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="py-32 px-12 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div>
          <div className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold mb-8 block underline decoration-soft-pink underline-offset-4">Get In Touch</div>
          <h2 className="text-5xl md:text-7xl font-serif mb-12 leading-[0.9] tracking-tighter">
            Let's <span className="italic text-gold">Create</span> <br /> Your Story
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-12 border-t border-border">
            <div>
              <h4 className="text-[8px] uppercase tracking-[0.3em] font-bold text-[#999] mb-4">Location</h4>
              <p className="text-sm font-medium text-premium-black tracking-wide">Dhaka, Bangladesh</p>
            </div>
            <div>
              <h4 className="text-[8px] uppercase tracking-[0.3em] font-bold text-[#999] mb-4">Inquiries</h4>
              <p className="text-sm font-medium text-premium-black tracking-wide">+8801676393979</p>
              <p className="text-sm font-medium text-premium-black tracking-wide">atelier@zeenora.com</p>
            </div>
          </div>
        </div>

        <div className="bg-editorial-bg p-12 rounded-3xl border border-border mt-12 md:mt-0">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <label className="text-[8px] uppercase tracking-[0.3em] font-bold text-gold ml-1">Your Name</label>
              <input type="text" className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-gold transition-colors text-sm font-sans" placeholder="Abbie Gold" />
            </div>
            <div className="space-y-4">
              <label className="text-[8px] uppercase tracking-[0.3em] font-bold text-gold ml-1">Email Address</label>
              <input type="email" className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-gold transition-colors text-sm font-sans" placeholder="abbie@luxury.com" />
            </div>
            <div className="space-y-4">
              <label className="text-[8px] uppercase tracking-[0.3em] font-bold text-gold ml-1">Your Message</label>
              <textarea rows={3} className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-gold transition-colors text-sm font-sans resize-none" placeholder="I'm interested in the bridal collection..."></textarea>
            </div>
            <button className="w-full bg-gold text-white text-[10px] uppercase font-bold tracking-[0.3em] py-5 rounded-full shadow-lg shadow-gold/20 hover:bg-premium-black transition-all">Send Inquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
}

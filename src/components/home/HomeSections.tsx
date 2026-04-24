import { ArrowRight, ShoppingCart, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '@/src/constants';

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden bg-soft-pink/30">
      <div className="absolute inset-0 bg-gradient-to-r from-soft-pink/80 to-transparent z-10" />
      <img
        src="https://images.unsplash.com/photo-1515562141207-7a18b5ce7142?auto=format&fit=crop&q=80&w=1920&h=1080"
        alt="Zeenora Hero"
        className="absolute inset-0 w-full h-full object-cover grayscale-[20%]"
        referrerPolicy="no-referrer"
      />
      
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="text-gold font-bold uppercase tracking-[0.3em] mb-4 block">Premium Collection</span>
          <h1 className="text-6xl md:text-8xl font-serif text-premium-black mb-6 leading-tight">
            Elegance <br /> <span className="italic text-rose-gold">You Deserve</span>
          </h1>
          <p className="text-lg text-premium-black/70 mb-10 max-w-lg leading-relaxed">
            Discover our curated collection of fine jewelry, handcrafted to capture your unique essence and timeless beauty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/products"
              className="bg-rose-gold text-white px-10 py-4 font-bold rounded-full hover:bg-premium-black transition-all flex items-center justify-center gap-2"
            >
              Shop Now <ArrowRight size={18} />
            </Link>
            <a
              href="#pre-order"
              className="border border-rose-gold text-rose-gold px-10 py-4 font-bold rounded-full hover:bg-rose-gold hover:text-white transition-all flex items-center justify-center"
            >
              Place Pre-Order
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-rose-gold/30 rounded-full flex justify-center py-2"
        >
          <div className="w-1 h-2 bg-rose-gold rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}

export function ProductSection() {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-premium-black">Our Masterpieces</h2>
          <p className="text-premium-black/60 max-w-md">Each piece tells a story of elegance and craftsmanship tailored just for you.</p>
        </div>
        <Link 
          to="/products"
          className="text-rose-gold font-bold flex items-center gap-2 hover:translate-x-1 transition-transform border-b border-rose-gold/20 pb-1"
        >
          View All Collections <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group"
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl mb-6 luxury-shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-rose-gold hover:text-white transition-colors">
                  <Heart size={18} />
                </button>
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-rose-gold hover:text-white transition-colors">
                  <ShoppingCart size={18} />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <button className="w-full bg-white/90 backdrop-blur-sm text-premium-black py-3 rounded-xl font-bold text-sm shadow-xl hover:bg-rose-gold hover:text-white transition-all">
                  Order Now
                </button>
              </div>
            </div>
            <div className="text-center">
              <span className="text-[10px] uppercase tracking-widest text-rose-gold font-bold mb-1 block">{product.category}</span>
              <h3 className="font-serif text-xl text-premium-black group-hover:text-rose-gold transition-colors">{product.name}</h3>
              <p className="text-gold font-medium mt-1">{product.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function PreOrderSection({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section id="pre-order" className="py-24 bg-soft-purple/30 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-rose-gold/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif mb-6 text-premium-black">Something Special?</h2>
        <p className="text-xl text-premium-black/60 mb-10 leading-relaxed">
          Cant find what you are looking for? We offer exclusive pre-order services for custom designs and rare collections. Let us bring your vision to life.
        </p>
        <button
          onClick={onOpenModal}
          className="bg-premium-black text-white px-12 py-5 rounded-full font-bold hover:bg-rose-gold transition-all shadow-xl hover:-translate-y-1"
        >
          Place Pre-Order
        </button>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden luxury-shadow">
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
            className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-2xl max-w-xs border border-gold/10"
          >
            <p className="font-serif italic text-2xl text-rose-gold leading-tight mb-2">
              "We sell happiness, not materials."
            </p>
            <p className="text-xs text-premium-black/40 uppercase tracking-widest font-bold">Zeenora Philosophy</p>
          </motion.div>
        </div>
        
        <div>
          <span className="text-rose-gold font-bold uppercase tracking-widest mb-4 block">Our Story</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-premium-black leading-tight">Hand-Selected Quality from the Heart of Artistry</h2>
          <div className="space-y-6 text-premium-black/70 leading-relaxed text-lg">
            <p>
              At Zeenora, we believe that every piece of jewelry is a milestone, a memory, or an expression of love. That's why we meticulously hand-select our designs, importing directly from artisanal experts in China.
            </p>
            <p>
              Our focus remains steadfast on quality, authenticity, and trendsetting style. We aim to make high-end luxury accessible to everyone who appreciates the finer things in life.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-soft-pink flex items-center justify-center text-rose-gold">
                  <span className="font-bold">✓</span>
                </div>
                <span>Directly Imported Collections</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-soft-purple flex items-center justify-center text-rose-gold">
                  <span className="font-bold">✓</span>
                </div>
                <span>Certified Quality Assurance</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-rose-gold">
                  <span className="font-bold">✓</span>
                </div>
                <span>Personalized Concierge Service</span>
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
    { name: 'Instagram', icon: <Instagram />, color: 'bg-[#E1306C]', link: '#' },
    { name: 'Facebook', icon: <Facebook />, color: 'bg-[#1877F2]', link: '#' },
    { name: 'YouTube', icon: <Youtube />, color: 'bg-[#FF0000]', link: '#' },
  ];

  return (
    <section className="py-24 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-serif mb-12">Connect With Zeenora</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.link}
              className="flex flex-col items-center gap-4 group"
            >
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-white text-3xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl" style={{ backgroundColor: p.color.replace('bg-[', '').replace(']', '') }}>
                {p.icon}
              </div>
              <span className="font-bold uppercase tracking-widest text-xs opacity-50 group-hover:opacity-100 transition-opacity">
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
    <section id="contact" className="py-24 px-6 bg-premium-black text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        <img src="https://images.unsplash.com/photo-1515562141207-7a18b5ce7142?auto=format&fit=crop&q=80&w=800&h=1200" alt="bg" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 relative z-10">
        <div className="flex-1">
          <span className="text-rose-gold font-bold uppercase tracking-widest mb-4 block">Visit Our Boutique</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-12">Let's Create Your Story Together</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div>
              <h4 className="text-gold font-bold uppercase text-xs tracking-widest mb-4">Location</h4>
              <p className="text-lg opacity-70">Dhaka, Bangladesh</p>
            </div>
            <div>
              <h4 className="text-gold font-bold uppercase text-xs tracking-widest mb-4">Contact</h4>
              <p className="text-lg opacity-70">+8801676393979</p>
              <p className="text-lg opacity-70">support@zeenora.com</p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <form className="space-y-6 bg-white/5 p-8 rounded-3xl backdrop-blur-md border border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest opacity-50 font-bold ml-1">Name</label>
                <input type="text" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-rose-gold transition-colors" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest opacity-50 font-bold ml-1">Email</label>
                <input type="email" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-rose-gold transition-colors" placeholder="Email Address" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest opacity-50 font-bold ml-1">Message</label>
              <textarea rows={4} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-rose-gold transition-colors resize-none" placeholder="How can we help?"></textarea>
            </div>
            <button className="w-full bg-rose-gold text-white font-bold py-4 rounded-xl hover:bg-gold transition-all">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

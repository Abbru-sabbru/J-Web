import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, SlidersHorizontal, Heart, ShoppingCart } from 'lucide-react';
import { PRODUCTS } from '@/src/constants';
import { cn } from '@/src/lib/utils';

export function ProductsPage() {
  const [filter, setFilter] = useState<'All' | 'Necklace' | 'Ring' | 'Earrings' | 'Bracelet'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesFilter = filter === 'All' || p.category === filter;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const categories: ('All' | 'Necklace' | 'Ring' | 'Earrings' | 'Bracelet')[] = ['All', 'Necklace', 'Ring', 'Earrings', 'Bracelet'];

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-gold-light/20">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl font-serif text-premium-black mb-6">Our Collections</h1>
          <p className="text-premium-black/50 text-lg max-w-2xl italic">
            Rare gems, exquisite metals, and timeless designs—discover the perfect piece for every occasion.
          </p>
        </header>

        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between mb-12">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  'px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all border',
                  filter === cat 
                    ? 'bg-rose-gold text-white border-rose-gold shadow-lg shadow-rose-gold/20' 
                    : 'bg-white text-premium-black/60 border-gold/10 hover:border-rose-gold hover:text-rose-gold'
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-premium-black/30" size={20} />
            <input 
              type="text" 
              placeholder="Search collections..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gold/10 rounded-full py-3 pl-12 pr-6 focus:outline-none focus:border-rose-gold transition-colors"
            />
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-6 bg-white luxury-shadow">
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
                    <button className="w-full bg-premium-black text-white py-4 rounded-2xl font-bold text-sm shadow-xl hover:bg-rose-gold transition-all">
                      Order Now
                    </button>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-rose-gold font-bold">{product.category}</span>
                    <span className="text-gold font-bold">{product.price}</span>
                  </div>
                  <h3 className="font-serif text-xl text-premium-black mb-1 group-hover:text-rose-gold transition-colors">{product.name}</h3>
                  <p className="text-sm text-premium-black/40 italic">Imported Quality</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="py-32 text-center">
            <p className="text-2xl font-serif text-premium-black/40 italic">No exquisite matches found for your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}

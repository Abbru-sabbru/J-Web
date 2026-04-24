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
                  'px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all border outline-none',
                  filter === cat 
                    ? 'bg-gold text-white border-gold shadow-lg shadow-gold/20' 
                    : 'bg-white text-[#777] border-border hover:border-gold hover:text-gold'
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group bg-white p-4 rounded-xl border border-border hover:border-gold transition-all"
              >
                <div className="relative aspect-square overflow-hidden rounded-lg mb-4 bg-editorial-bg flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-1 bg-white text-[8px] uppercase tracking-wider text-gold font-bold rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    New Collection
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-premium-black uppercase truncate mb-1">{product.name}</div>
                  <div className="text-gold font-serif text-sm italic">{product.price}</div>
                  <button className="mt-4 w-full py-2 border border-gold text-gold text-[9px] uppercase font-bold rounded-full hover:bg-gold hover:text-white transition-all tracking-widest">
                    Order Now
                  </button>
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

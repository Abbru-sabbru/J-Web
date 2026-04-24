import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PreOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PreOrderModal({ isOpen, onClose }: PreOrderModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-premium-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 m-auto w-full max-w-lg h-fit bg-white rounded-3xl shadow-2xl z-[101] overflow-hidden"
          >
            <div className="relative p-8 md:p-12">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 text-premium-black/20 hover:text-rose-gold transition-colors"
              >
                <X size={24} />
              </button>

              <div className="text-center mb-8">
                <h3 className="text-3xl font-serif text-premium-black mb-2">Exquisite Pre-Order</h3>
                <p className="text-premium-black/50">Tell us what you desire, and we shall find it.</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Pre-order received! We will contact you soon.'); onClose(); }}>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-rose-gold ml-1">Full Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-soft-pink/20 border border-gold/10 rounded-xl px-5 py-4 focus:outline-none focus:border-rose-gold transition-colors" 
                    placeholder="Abir Hossain" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-rose-gold ml-1">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    className="w-full bg-soft-pink/20 border border-gold/10 rounded-xl px-5 py-4 focus:outline-none focus:border-rose-gold transition-colors" 
                    placeholder="+880 1XXX XXXXXX" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-rose-gold ml-1">Desired Product / Description</label>
                  <textarea 
                    required
                    rows={3} 
                    className="w-full bg-soft-pink/20 border border-gold/10 rounded-xl px-5 py-4 focus:outline-none focus:border-rose-gold transition-colors resize-none" 
                    placeholder="Diamond necklace with butterfly motifs..." 
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-rose-gold text-white font-bold py-5 rounded-xl shadow-xl shadow-rose-gold/20 hover:bg-premium-black hover:shadow-none transition-all duration-300"
                >
                  Send Pre-Order Request
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

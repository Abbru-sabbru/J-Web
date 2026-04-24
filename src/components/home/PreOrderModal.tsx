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
                className="absolute top-6 right-6 p-2 text-premium-black/20 hover:text-gold transition-colors"
              >
                <X size={24} />
              </button>

              <div className="text-center mb-8">
                <h3 className="text-3xl font-serif text-premium-black mb-2 italic">Exquisite Pre-Order</h3>
                <p className="text-xs uppercase tracking-widest text-[#999] font-medium">Atelier Custom Service</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Pre-order received! We will contact you soon.'); onClose(); }}>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold ml-1">Full Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-editorial-bg border border-border rounded-xl px-5 py-4 focus:outline-none focus:border-gold transition-colors text-sm" 
                    placeholder="Abbie Gold" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold ml-1">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    className="w-full bg-editorial-bg border border-border rounded-xl px-5 py-4 focus:outline-none focus:border-gold transition-colors text-sm" 
                    placeholder="+880 1XXX XXXXXX" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold ml-1">Desired Piece Description</label>
                  <textarea 
                    required
                    rows={3} 
                    className="w-full bg-editorial-bg border border-border rounded-xl px-5 py-4 focus:outline-none focus:border-gold transition-colors resize-none text-sm" 
                    placeholder="Diamond necklace with rare artisanal motifs..." 
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gold text-white text-[10px] uppercase font-bold tracking-[0.3em] py-5 rounded-full shadow-lg shadow-gold/20 hover:bg-premium-black transition-all"
                >
                  Send Inquiry Request
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

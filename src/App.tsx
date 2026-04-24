/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer } from '@/src/components/common/Layout';
import { Hero, ProductSection, PreOrderSection, AboutSection, SocialSection, ContactSection } from '@/src/components/home/HomeSections';
import { PreOrderModal } from '@/src/components/home/PreOrderModal';
import { ProductsPage } from '@/src/components/products/ProductsPage';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function HomePage() {
  const [isPreOrderModalOpen, setIsPreOrderModalOpen] = useState(false);

  return (
    <main>
      <Hero />
      <ProductSection />
      <PreOrderSection onOpenModal={() => setIsPreOrderModalOpen(true)} />
      <AboutSection />
      <SocialSection />
      <ContactSection />
      <PreOrderModal 
        isOpen={isPreOrderModalOpen} 
        onClose={() => setIsPreOrderModalOpen(false)} 
      />
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

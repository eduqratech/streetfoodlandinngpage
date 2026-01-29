
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Theme, FoodItem, Restaurant, Review } from './types';
import { FOOD_ITEMS, RESTAURANTS, REVIEWS } from './constants';
import { RevealText } from './components/RevealText';
import { FadeIn } from './components/FadeIn';
import { FoodCard } from './components/FoodCard';
import { RestaurantCard } from './components/RestaurantCard';
import { DeliveryMap } from './components/DeliveryMap';
// Added Star to the imports
import { Moon, Sun, ChevronDown, ArrowRight, Flame, Search, ShoppingBag, Star, Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const navigate = useNavigate();
  const theme = Theme.DARK;
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.2]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const isDark = true;
  const bgColor = 'bg-[#121212]';
  const textColor = 'text-[#F5F5F0]';
  const borderColor = 'border-white/10';

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#121212] flex items-center justify-center z-[100]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="text-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="mb-8 flex justify-center"
          >
            <Flame size={48} className="text-[#C5A059]" />
          </motion.div>
          <h1 className="text-2xl serif tracking-[0.5em] text-[#C5A059] uppercase">Zynrova</h1>
          <p className="text-[10px] tracking-[0.8em] text-white/40 mt-4 uppercase italic">Every flavour has a story</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-1000 ${bgColor} ${textColor} selection:bg-[#C5A059] selection:text-white`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-8 md:py-6 backdrop-blur-md border-b transition-all duration-300 bg-black/60 border-white/10">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-12">
            <span className="text-xl md:text-2xl serif tracking-tighter font-bold italic text-white cursor-pointer" onClick={() => navigate('/')}>ZYNROVA</span>
            <div className="hidden lg:flex items-center gap-10 text-[10px] tracking-[0.4em] uppercase font-medium text-white/70">
              <a href="#home" className="hover:text-[#C5A059] transition-colors">Home</a>
              <a href="#signature" className="hover:text-[#C5A059] transition-colors">Signatures</a>
              <a href="#nearby" className="hover:text-[#C5A059] transition-colors">Restaurants</a>
              <a href="#culture" className="hover:text-[#C5A059] transition-colors">Culture</a>
            </div>
          </div>
          <div className="flex items-center gap-4 md:gap-8">
            <button
              onClick={() => navigate('/cart')}
              className="relative p-2 rounded-full transition-all bg-white/5 hover:bg-[#C5A059] text-white hover:text-white"
            >
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-[#C5A059] text-white text-[8px] w-4 h-4 flex items-center justify-center rounded-full">2</span>
            </button>
            <button
              className="lg:hidden p-2 text-white hover:text-[#C5A059] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden bg-black/90 backdrop-blur-xl absolute top-full left-0 w-full border-b border-white/10"
            >
              <div className="flex flex-col gap-6 p-8 text-center text-xs tracking-[0.4em] uppercase font-medium text-white/80">
                <a href="#home" onClick={() => setIsMenuOpen(false)} className="hover:text-[#C5A059] py-2">Home</a>
                <a href="#signature" onClick={() => setIsMenuOpen(false)} className="hover:text-[#C5A059] py-2">Signatures</a>
                <a href="#nearby" onClick={() => setIsMenuOpen(false)} className="hover:text-[#C5A059] py-2">Restaurants</a>
                <a href="#culture" onClick={() => setIsMenuOpen(false)} className="hover:text-[#C5A059] py-2">Culture</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2400"
            className="w-full h-full object-cover grayscale brightness-50 contrast-125"
            alt="Cinematic Food Prep"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#121212]/70" />
        </motion.div>

        <div className="relative z-10 text-center px-4 md:px-0">
          <FadeIn>
            <p className="text-[#C5A059] text-[10px] tracking-[0.8em] uppercase mb-6 md:mb-10">Artisan Street Culture</p>
          </FadeIn>
          <RevealText
            text="Born on the streets.Crafted for indulgence."
            className="text-4xl md:text-6xl lg:text-9xl serif italic leading-tight mb-8 md:mb-12"
          />
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
            <button
              onClick={() => navigate('/enter-taste')}
              className="px-8 py-4 md:px-12 md:py-5 border border-[#C5A059] text-[#C5A059] text-[10px] md:text-xs tracking-[0.4em] md:tracking-[0.6em] uppercase hover:bg-[#C5A059] hover:text-white transition-all duration-700"
            >
              Enter the Taste
            </button>
          </motion.div>
        </div>

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-30">
          <ChevronDown />
        </motion.div>
      </section>

      {/* Narrative Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-center">
        <div className="md:w-1/2 order-2 md:order-1">
          <FadeIn delay={0.2}>
            <p className="text-[#C5A059] text-xs tracking-[0.5em] uppercase mb-6 md:mb-8">The Philosophy</p>
          </FadeIn>
          <RevealText
            text="From street fire to refined flavour."
            className="text-4xl md:text-5xl lg:text-7xl serif italic leading-[1.2] mb-8 md:mb-12"
          />
          <FadeIn delay={0.4}>
            <p className="text-sm opacity-60 leading-[2] font-light mb-8 max-w-lg">
              We believe that the most honest culinary expressions are born on the corner of busy streets. Zynrova elevates these raw, powerful flavours through meticulous plating and premium sourcing, bringing the soul of the city to your table.
            </p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <button
              onClick={() => navigate('/our-story')}
              className="flex items-center gap-4 text-[10px] tracking-[0.4em] uppercase group"
            >
              Read our story <div className="h-[1px] w-10 bg-[#C5A059] group-hover:w-16 transition-all" />
            </button>
          </FadeIn>
        </div>
        <div className="md:w-1/2 grid grid-cols-2 gap-4 order-1 md:order-2">
          <FadeIn delay={0.3} direction="left">
            <div className="aspect-[3/4] rounded-sm overflow-hidden translate-y-12 md:translate-y-20">
              <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Street" />
            </div>
          </FadeIn>
          <FadeIn delay={0.5} direction="left">
            <div className="aspect-[3/4] rounded-sm overflow-hidden">
              <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Refined" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Signature Grid */}
      <section id="signature" className="py-16 md:py-24 px-6 md:px-[5vw]">
        <div className="flex flex-col xl:flex-row justify-between items-end mb-16 md:mb-24 gap-8 md:gap-12">
          <div className="w-full xl:w-auto">
            <FadeIn>
              <p className="text-[#C5A059] text-xs tracking-[0.5em] uppercase mb-6">Signature Selection</p>
            </FadeIn>
            <RevealText text="The Craft Gallery" className="text-4xl md:text-5xl lg:text-6xl serif italic" />

          </div>
          <div className="flex flex-col md:flex-row items-start md:items-end gap-8 w-full xl:w-auto">
            <FadeIn delay={0.2}>
              <div className="flex items-center gap-3 border-b pb-1 border-white mb-1 w-full md:min-w-[200px] shadow-[0_2px_15px_rgba(255,255,255,0.1)]">
                <Search size={14} className="text-white" />
                <input
                  type="text"
                  placeholder="find your dish"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-[10px] uppercase tracking-widest outline-none text-white placeholder:text-white/60 w-full"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-4 md:gap-10 text-[10px] tracking-[0.3em] uppercase opacity-60">
                {['All', 'Spicy', 'Craft', 'Vegetarian', 'Sea'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`pb-2 border-b-2 transition-all ${category === cat ? 'border-[#C5A059] text-[#C5A059] opacity-100' : 'border-transparent hover:opacity-100'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {FOOD_ITEMS.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase())
          ).map((item, idx) => (
            <FadeIn key={item.id} delay={idx * 0.1}>
              <FoodCard item={item} theme={theme} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Nearby Restaurants */}
      <section id="nearby" className="py-16 md:py-24 px-6 md:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 md:mb-16 gap-6">
            <RevealText text="Kitchens in your vicinity" className="text-3xl md:text-4xl serif italic" />
            <FadeIn delay={0.4}>
              <button onClick={() => navigate('/map-view')} className="text-[10px] tracking-widest uppercase opacity-40 hover:opacity-100">See Map View</button>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESTAURANTS.filter(res =>
              res.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              res.cuisines.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()))
            ).map((res, idx) => (
              <FadeIn key={res.id} delay={idx * 0.1}>
                <RestaurantCard restaurant={res} theme={theme} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Map Delivery Experience */}
      <section className="py-16 md:py-20 px-6 md:px-[10vw]">
        <div className="mb-12 md:mb-16 max-w-2xl">
          <FadeIn>
            <p className="text-[#C5A059] text-xs tracking-[0.5em] uppercase mb-6">Real-Time Journey</p>
          </FadeIn>
          <RevealText text="Hot. Fast. Tracked." className="text-4xl md:text-5xl serif italic mb-8" />
          <FadeIn delay={0.4}>
            <p className="text-sm opacity-50 leading-relaxed font-light">Witness your order navigate the city in real-time. Our thermal-shielded delivery vessels ensure the street heat stays within the meal until it reaches your doorstep.</p>
          </FadeIn>
        </div>
        <FadeIn delay={0.6}>
          <DeliveryMap theme={theme} />
        </FadeIn>
      </section>

      {/* User Reviews */}
      <section className="py-16 md:py-20 px-0 md:px-8 overflow-hidden">
        <div className="text-center mb-12 md:mb-24 px-6">
          <RevealText text="Voices from the street" className="text-3xl md:text-4xl serif italic inline-block" />
        </div>
        <div className="flex gap-6 md:gap-12 overflow-x-auto pb-12 scrollbar-hide px-6 md:px-8 snap-x snap-mandatory">
          {REVIEWS.map((rev, idx) => (
            <FadeIn key={rev.id} delay={idx * 0.2} direction="right">
              <motion.div
                whileHover={{ y: -10 }}
                className={`min-w-[85vw] md:min-w-[350px] p-8 md:p-10 rounded-sm border ${borderColor} flex flex-col justify-between snap-center`}
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className={i < rev.rating ? 'fill-[#C5A059] text-[#C5A059]' : 'text-gray-600'} />
                    ))}
                  </div>
                  <p className="text-lg italic leading-relaxed opacity-80 mb-8">"{rev.text}"</p>
                </div>
                <div className="flex items-center gap-4">
                  <img src={rev.userImage} className="w-12 h-12 rounded-full object-cover border border-[#C5A059]/20" alt={rev.userName} />
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase">{rev.userName}</p>
                    <p className="text-[10px] opacity-40 tracking-widest uppercase">Verified Taster • {rev.itemReferenced}</p>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Culture Section */}
      <section id="culture" className="py-16 md:py-24 relative">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-[50vh] md:h-[80vh] bg-fixed">
            <img src="https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale" alt="Vendor" />
          </div>
          <div className="p-8 md:p-20 flex flex-col justify-center bg-[#1a1a1a]">
            <FadeIn>
              <p className="text-[#C5A059] text-[10px] tracking-[0.5em] uppercase mb-6 md:mb-8">The Community</p>
            </FadeIn>
            <RevealText text='"We cook for the soul, not just the palate."' className="text-3xl md:text-5xl serif italic mb-8 md:mb-12" />
            <FadeIn delay={0.4}>
              <p className="text-sm opacity-50 leading-[2.2] font-light max-w-md mb-8 md:mb-12 italic">
                Our network of 250+ street vendors are the true heroes. Zynrova provides them with global-standard sourcing while keeping their original, generations-old recipes intact.
              </p>
            </FadeIn>
            <FadeIn delay={0.6}>
              <div className="flex items-center gap-6">
                <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=200" className="w-16 h-16 rounded-full border-2 border-[#C5A059]" alt="Chef" />
                <div>
                  <p className="text-xs tracking-widest font-bold uppercase">Master Chef Han</p>
                  <p className="text-[10px] opacity-40 tracking-widest uppercase">3rd Gen Noodle Master</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Grand CTA */}
      <section className="py-20 md:py-32 px-6 md:px-8 text-center relative overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/cta-bg.jpg"
            alt="Taste the City"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
        </div>
        <div className="relative z-10">
          <FadeIn>
            <p className="text-[#C5A059] text-xs tracking-[0.5em] uppercase mb-8 md:mb-12">Immediate Indulgence</p>
          </FadeIn>
          <RevealText text="Taste the City." className="text-5xl md:text-8xl serif text-white italic mb-12 md:mb-20 leading-tight" />

          <div className="max-w-md mx-auto">
            <FadeIn delay={0.5}>
              <button
                onClick={() => navigate('/order-signature')}
                className="w-full py-6 bg-transparent border border-white text-white text-[10px] tracking-[0.8em] uppercase font-bold hover:bg-white hover:text-black rounded-lg transition-all duration-700 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
              >
                Order the Signature
              </button>
            </FadeIn>
            <FadeIn delay={0.7}>
              <p className="text-white text-[9px] tracking-[0.4em] uppercase mt-8 font-bold shadow-black drop-shadow-md">Available 24/7 across 12 metropolitan hubs</p>
            </FadeIn>
          </div>
        </div>

        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-[#C5A059]/20 rounded-full"
        />
      </section>


      {/* Footer */}
      <footer className={`py-8 px-6 md:px-8 border-t ${borderColor}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="max-w-sm">
            <h4 className="text-2xl serif italic mb-4">Zynrova</h4>
            <p className="text-xs opacity-40 leading-relaxed font-light mb-6">
              A global collective of street masters and digital pioneers. Transforming how the world experiences authentic flavour.
            </p>
            <div className="flex gap-8 text-[10px] tracking-widest uppercase opacity-60">
              <a href="https://www.linkedin.com/in/suresh-peddinti-5b6941232" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-all cursor-pointer">LinkedIn</a>
              <span onClick={() => navigate('/social/instagram')} className="hover:text-[#C5A059] transition-all cursor-pointer">Instagram</span>
              <span onClick={() => navigate('/social/pinterest')} className="hover:text-[#C5A059] transition-all cursor-pointer">Pinterest</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div className="space-y-3">
              <p className="text-[10px] tracking-widest uppercase font-bold">Explore</p>
              <div className="flex flex-col gap-2 text-[10px] tracking-widest uppercase opacity-40">
                <span onClick={() => navigate('/menu')} className="hover:text-[#C5A059] cursor-pointer">Menu</span>
                <span onClick={() => navigate('/locations')} className="hover:text-[#C5A059] cursor-pointer">Locations</span>
                <span onClick={() => navigate('/stories')} className="hover:text-[#C5A059] cursor-pointer">Stories</span>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-[10px] tracking-widest uppercase font-bold">Contact</p>
              <div className="flex flex-col gap-2 text-[10px] tracking-widest uppercase opacity-40">
                <a href="mailto:sureshpeddinti221@gmail.com" className="hover:text-[#C5A059] cursor-pointer normal-case">sureshpeddinti221@gmail.com</a>
                <a href="tel:+919618344086" className="hover:text-[#C5A059] cursor-pointer">+91 9618344086</a>
                <p className="leading-relaxed hover:text-[#C5A059] transition-colors">
                  Gallery milinium plaza upperpally chintalmate road, Rangareddy, Hyderbad 500048
                </p>
              </div>
            </div>
            <div className="space-y-3 hidden md:block">
              <p className="text-[10px] tracking-widest uppercase font-bold">Subscribe</p>
              <div className="flex items-center border-b border-[#C5A059]/40 pb-2">
                <input type="email" placeholder="YOUR EMAIL" className="bg-transparent text-[8px] outline-none w-32" />
                <ArrowRight size={12} className="text-[#C5A059]" />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row gap-4 justify-between items-center text-[8px] tracking-[0.4em] uppercase opacity-30 text-center md:text-left">
          <p>© 2024 ZYNROVA GLOBAL. ALL RIGHTS RESERVED.</p>
          <p>DESIGNED FOR THE EXCEPTIONAL.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
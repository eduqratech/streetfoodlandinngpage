
import React from 'react';
import { motion } from 'framer-motion';
import { Restaurant, Theme } from '../types';
import { MapPin, Star } from 'lucide-react';

interface RestaurantCardProps {
  restaurant: Restaurant;
  theme: Theme;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant, theme }) => {
  const isDark = theme === Theme.DARK;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`relative h-[300px] rounded-sm overflow-hidden cursor-pointer group border ${isDark ? 'border-white/5' : 'border-black/5'}`}
    >
      <img 
        src={restaurant.image} 
        alt={restaurant.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      
      <div className="absolute bottom-0 left-0 p-6 w-full text-white">
        <div className="flex justify-between items-end">
          <div>
            <div className="flex items-center gap-2 mb-2">
              {restaurant.cuisines.map((c, i) => (
                <span key={i} className="text-[8px] uppercase tracking-widest opacity-60 border border-white/20 px-2 py-0.5 rounded-full">{c}</span>
              ))}
            </div>
            <h3 className="text-2xl serif mb-1">{restaurant.name}</h3>
            <div className="flex items-center gap-4 text-[10px] tracking-widest opacity-70">
              <span className="flex items-center gap-1"><MapPin size={10} className="text-[#C5A059]" /> {restaurant.distance}</span>
              <span className="flex items-center gap-1"><Star size={10} className="fill-[#C5A059] text-[#C5A059]" /> {restaurant.rating}</span>
            </div>
          </div>
          <button className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-[#C5A059] pb-1 hover:text-[#C5A059] transition-all">
            View Menu
          </button>
        </div>
      </div>
    </motion.div>
  );
};

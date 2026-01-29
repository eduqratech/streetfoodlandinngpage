
import React from 'react';
import { motion } from 'framer-motion';
import { FoodItem, Theme } from '../types';
import { Star, Plus } from 'lucide-react';

interface FoodCardProps {
  item: FoodItem;
  theme: Theme;
}

export const FoodCard: React.FC<FoodCardProps> = ({ item, theme }) => {
  const isDark = theme === Theme.DARK;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group relative overflow-hidden rounded-sm transition-all duration-700 ${isDark ? 'bg-[#1a1a1a]' : 'bg-white shadow-sm'}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
        />
        {/* Oil shimmer hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#C5A059]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
        
        <div className="absolute top-4 left-4">
          <span className="bg-[#C5A059] text-white text-[8px] tracking-[0.3em] uppercase px-3 py-1 font-bold">
            {item.tag}
          </span>
        </div>
        
        <div className="absolute bottom-4 right-4 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
           <button className="p-3 bg-white text-black rounded-full shadow-xl hover:bg-[#C5A059] hover:text-white transition-colors">
              <Plus size={16} />
           </button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg serif italic group-hover:text-[#C5A059] transition-colors">{item.name}</h3>
          <div className="flex items-center gap-1">
            <Star size={10} className="fill-[#C5A059] text-[#C5A059]" />
            <span className="text-[10px] font-bold opacity-60">{item.rating}</span>
          </div>
        </div>
        <p className="text-xs opacity-50 mb-4 line-clamp-1">{item.description}</p>
        <p className="text-sm font-bold tracking-widest text-[#C5A059]">{item.price}</p>
      </div>
    </motion.div>
  );
};

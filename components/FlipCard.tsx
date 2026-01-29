
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EstateProject, Theme } from '../types';
import { MapPin, Maximize2 } from 'lucide-react';

interface FlipCardProps {
  project: EstateProject;
  theme: Theme;
}

export const FlipCard: React.FC<FlipCardProps> = ({ project, theme }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const isDark = theme === Theme.DARK;

  return (
    <div 
      className="perspective-1000 h-[500px] w-full cursor-pointer group"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-700"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Front */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-sm overflow-hidden shadow-2xl">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <p className="text-xs tracking-[0.3em] uppercase opacity-70 mb-2">{project.location}</p>
            <h3 className="text-3xl serif italic mb-4">{project.title}</h3>
            <div className="h-[1px] w-12 bg-[#C5A059]" />
          </div>
        </div>

        {/* Back */}
        <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 p-10 flex flex-col justify-between border ${isDark ? 'bg-[#1a1a1a] border-white/10' : 'bg-white border-black/5'} shadow-2xl`}>
          <div>
            <h3 className={`text-4xl serif mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
            <p className={`text-sm leading-relaxed opacity-70 mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {project.description}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#C5A059] shrink-0" />
                <p className={`text-xs uppercase tracking-widest leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {project.address}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Maximize2 className="w-5 h-5 text-[#C5A059] shrink-0" />
                <p className={`text-xs uppercase tracking-widest ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {project.sqft}
                </p>
              </div>
            </div>
          </div>

          <button className={`w-full py-4 border ${isDark ? 'border-white/20 hover:bg-white hover:text-black' : 'border-black/20 hover:bg-black hover:text-white'} text-[10px] tracking-[0.4em] uppercase transition-all duration-500`}>
            Discover Residence
          </button>
        </div>
      </motion.div>
    </div>
  );
};

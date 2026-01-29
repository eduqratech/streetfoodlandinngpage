
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PILLARS } from '../constants';
import { Theme } from '../types';

export const HorizontalSection: React.FC<{ theme: Theme }> = ({ theme }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  const isDark = theme === Theme.DARK;

  return (
    <div ref={containerRef} className="h-[400vh] relative">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div style={{ x }} className="flex gap-0 h-[70vh] items-center px-[10vw]">
          <div className="min-w-[40vw] flex flex-col justify-center pr-20">
            <p className="text-[#C5A059] text-sm tracking-[0.5em] uppercase mb-8">Pillars of Excellence</p>
            <h2 className="text-6xl serif leading-tight">Crafted for the<br/> Exceptional Few.</h2>
          </div>
          
          {PILLARS.map((pillar, idx) => (
            <div key={idx} className="min-w-[60vw] h-full relative group p-10 flex gap-10 items-end">
               <div className="absolute inset-0 -z-10 overflow-hidden">
                <img 
                  src={pillar.image} 
                  alt={pillar.title}
                  className="w-full h-full object-cover opacity-30 grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                />
               </div>
               <div className="mb-10 max-w-sm">
                  <span className="text-[#C5A059] serif italic text-4xl block mb-4">0{idx + 1}</span>
                  <h3 className="text-5xl serif mb-4">{pillar.title}</h3>
                  <p className="text-sm tracking-widest opacity-60 uppercase">{pillar.subtitle}</p>
               </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

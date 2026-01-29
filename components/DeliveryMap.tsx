
import React from 'react';
import { motion } from 'framer-motion';
import { Bike, Navigation } from 'lucide-react';

export const DeliveryMap: React.FC<{ theme: string }> = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <div className={`relative w-full aspect-video rounded-sm overflow-hidden border ${isDark ? 'bg-[#0f0f0f] border-white/5' : 'bg-gray-100 border-black/5'}`}>
      {/* Background Map Image - using the uploaded map */}
      <div className="absolute inset-0 z-0">
        <img
          src="/map-bg.png"
          alt="Delivery Route"
          className={`w-full h-full object-cover ${isDark ? 'grayscale brightness-[0.9] invert' : 'grayscale opacity-90'}`}
        />
        {/* Dark overlay for text readability */}
        <div className={`absolute inset-0 ${isDark ? 'bg-black/10' : 'bg-white/5'}`} />
      </div>

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 500">
        <motion.path
          d="M200 150 C 350 150, 450 350, 800 350"
          stroke="#C5A059"
          strokeWidth="3"
          strokeDasharray="10 10"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />

        {/* Point A: Restaurant */}
        <g transform="translate(200, 150)">
          <circle r="6" fill="#C5A059" />
          <text y="-15" x="-40" className={`text-[12px] font-bold tracking-widest fill-current ${isDark ? 'text-white' : 'text-black'}`}>RESTAURANT</text>
        </g>

        {/* Point B: User */}
        <g transform="translate(800, 350)">
          <motion.circle
            r="8"
            fill="#C5A059"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <text y="25" x="-20" className={`text-[12px] font-bold tracking-widest fill-current ${isDark ? 'text-white' : 'text-black'}`}>YOU</text>
        </g>

        {/* Courier */}
        <motion.g
          animate={{
            offsetDistance: ["0%", "100%"]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ offsetPath: "path('M200 150 C 350 150, 450 350, 800 350')", offsetRotate: "auto" }}
        >
          <foreignObject width="40" height="40" x="-20" y="-20">
            <div className="flex items-center justify-center w-full h-full bg-black rounded-full border border-[#C5A059] shadow-lg">
              <Bike size={16} className="text-[#C5A059]" />
            </div>
          </foreignObject>
        </motion.g>
      </svg>

      <div className="absolute top-8 right-8 max-w-xs">
        <div className={`p-6 backdrop-blur-md ${isDark ? 'bg-black/60 border-white/10' : 'bg-white/80 border-black/10'} border rounded-sm`}>
          <p className="text-[10px] tracking-[0.3em] uppercase mb-2 opacity-60">Status: En Route</p>
          <h4 className="text-xl serif italic mb-2">Artisanal Delivery</h4>
          <p className="text-xs opacity-50 mb-4">Your 48-hour Smoked Brisket is 8 minutes away from your sanctuary.</p>
          <button className="text-[10px] tracking-widest uppercase font-bold text-[#C5A059] flex items-center gap-2">
            Track Driver <Navigation size={12} />
          </button>
        </div>
      </div>
    </div>
  );
};

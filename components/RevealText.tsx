
import React from 'react';
import { motion } from 'framer-motion';

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

export const RevealText: React.FC<RevealTextProps> = ({ text, className = "", delay = 0, once = true }) => {
  const lines = text.split('\n');

  return (
    <div className={`overflow-hidden ${className}`}>
      {lines.map((line, idx) => (
        <div key={idx} className="overflow-hidden">
          <motion.p
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + (idx * 0.1)
            }}
          >
            {line}
          </motion.p>
        </div>
      ))}
    </div>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const HeartAnimation = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            opacity: 0,
            scale: 0,
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [-100, window.innerHeight * -1],
            x: (Math.random() - 0.5) * 200
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 20
          }}
        >
          <Heart className="text-pink-200/20 w-8 h-8" />
        </motion.div>
      ))}
    </div>
  );
};

export default HeartAnimation;
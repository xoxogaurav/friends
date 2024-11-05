import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Heart, ArrowLeft } from 'lucide-react';

const UnavailablePage = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 flex items-center justify-center px-4"
    >
      <div className="max-w-md w-full">
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 text-center"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="inline-block"
          >
            <Heart className="w-16 h-16 text-pink-500 mx-auto mb-6" />
          </motion.div>

          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            This Person is Currently Busy
          </h1>
          
          <p className="text-gray-600 mb-8">
            Don't worry! There are many other amazing people waiting to connect with you.
            Why not explore more profiles while you wait?
          </p>

          <div className="space-y-4">
            <button
              onClick={() => navigate('/profiles')}
              className="w-full btn-primary py-3"
            >
              Explore More Profiles
            </button>
            
            <button
              onClick={() => navigate(-1)}
              className="w-full flex items-center justify-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UnavailablePage;
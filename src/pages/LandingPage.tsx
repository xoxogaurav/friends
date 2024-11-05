import React from 'react';
import { motion } from 'framer-motion';
import HeartAnimation from '../components/HeartAnimation';
import ProfileCard from '../components/ProfileCard';
import { Heart } from 'lucide-react';

const featuredProfiles = [
  {
    id: '1',
    name: 'Sophie',
    age: 24,
    location: 'New York, USA',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    isOnline: true,
    tagline: 'Adventure seeker looking for someone to explore life with'
  },
  {
    id: '2',
    name: 'Emma',
    age: 27,
    location: 'London, UK',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
    isOnline: false,
    tagline: 'Art lover and coffee enthusiast seeking genuine connection'
  },
  {
    id: '3',
    name: 'Isabella',
    age: 25,
    location: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    isOnline: true,
    tagline: 'Passionate about music, travel, and meaningful conversations'
  }
];

const LandingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50"
    >
      <HeartAnimation />
      
      <header className="relative z-10 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Heart className="w-8 h-8 text-pink-500" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">LoveConnect</h1>
            </div>
            <button
              onClick={() => window.location.href = '/profile-selection'}
              className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors"
            >
              Join Now
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Find Your Perfect Match
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProfiles.map((profile) => (
                <ProfileCard key={profile.id} {...profile} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/80">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Your Journey to Love Starts Here
            </h2>
            <div className="prose prose-pink mx-auto">
              <p className="text-gray-600 mb-6">
                Welcome to LoveConnect, where meaningful connections bloom into lasting relationships. Our platform is designed to bring together individuals who share your values, interests, and aspirations for love.
              </p>
              <p className="text-gray-600 mb-6">
                We understand that finding the right person can be a journey, which is why we've created a safe, sophisticated environment where genuine connections can flourish. Our advanced matching system, secure messaging platform, and carefully curated profiles ensure that your search for love is both enjoyable and successful.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you're looking for a deep, lasting connection or someone who shares your specific interests, LoveConnect provides the tools and community to help you find exactly what you're looking for. Our verified profiles, real-time chat features, and dedicated support team work together to create an environment where authentic relationships can thrive.
              </p>
              <p className="text-gray-600">
                Join thousands of successful couples who found their perfect match on LoveConnect. Your love story is waiting to begin.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2024 LoveConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default LandingPage;
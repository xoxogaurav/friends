import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProfileCard from '../components/ProfileCard';
import { Search, SlidersHorizontal } from 'lucide-react';

const profiles = [
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
  },
  {
    id: '4',
    name: 'Olivia',
    age: 23,
    location: 'Sydney, AU',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    isOnline: true,
    tagline: 'Beach lover and yoga enthusiast seeking positive energy'
  },
  {
    id: '5',
    name: 'Mia',
    age: 26,
    location: 'Toronto, CA',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    isOnline: false,
    tagline: 'Foodie and book lover looking for deep conversations'
  },
  {
    id: '6',
    name: 'Ava',
    age: 28,
    location: 'Berlin, DE',
    image: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43',
    isOnline: true,
    tagline: 'Creative soul seeking artistic connection'
  }
];

const ProfilesDisplay = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.tagline.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50"
    >
      <header className="sticky top-0 bg-white/80 backdrop-blur-lg shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, location, or interests..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="ml-4 p-2 rounded-full hover:bg-gray-100">
              <SlidersHorizontal className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProfiles.map((profile) => (
            <ProfileCard key={profile.id} {...profile} />
          ))}
        </div>
      </main>
    </motion.div>
  );
};

export default ProfilesDisplay;
import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, MapPin, Calendar, Music, Coffee, Book, Plane, Camera, MessageCircle, Phone } from 'lucide-react';

const profiles = {
  '1': {
    name: 'Sophie',
    age: 24,
    location: 'New York, USA',
    images: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&q=75'
    ],
    bio: "Hey there! I'm Sophie, a free-spirited adventure seeker with a passion for life. When I'm not exploring new hiking trails or planning my next travel adventure, you can find me at local coffee shops with a good book in hand.",
    interests: ['Travel', 'Hiking', 'Photography', 'Coffee', 'Reading'],
    idealMatch: "Looking for someone who shares my sense of adventure and can keep up with my spontaneous spirit. If you're passionate about exploring both the world and deep conversations, we might just be a perfect match!"
  }
};

const ExpandedProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const profile = profiles[id as keyof typeof profiles];

  const handleContact = () => {
    navigate('/unavailable');
  };

  if (!profile) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50"
    >
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative h-96">
            <img
              src={profile.images[0]}
              alt={profile.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h1 className="text-4xl font-bold">{profile.name}, {profile.age}</h1>
              <div className="flex items-center mt-2">
                <MapPin className="w-5 h-5 mr-2" />
                {profile.location}
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex gap-4 mb-8">
              <button
                onClick={handleContact}
                className="flex-1 btn-primary flex items-center justify-center gap-2 py-3"
              >
                <MessageCircle className="w-5 h-5" />
                Message
              </button>
              <button
                onClick={handleContact}
                className="flex-1 bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </button>
            </div>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-4">About Me</h2>
                <p className="text-gray-600 leading-relaxed">{profile.bio}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Interests</h2>
                <div className="flex flex-wrap gap-3">
                  {profile.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-4 py-2 bg-pink-50 text-pink-600 rounded-full text-sm font-medium"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Looking For</h2>
                <p className="text-gray-600 leading-relaxed">{profile.idealMatch}</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExpandedProfile;
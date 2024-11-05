import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import HeartAnimation from '../components/HeartAnimation';
import { Heart, Calendar, User2 } from 'lucide-react';

const ProfileSelection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/profiles');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 py-12 px-4"
    >
      <HeartAnimation />
      
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900">Tell Us About Yourself</h1>
          <p className="mt-2 text-gray-600">Let's create your perfect profile</p>
        </div>

        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User2 className="w-4 h-4 inline-block mr-2" />
                Your Name
              </label>
              <input
                type="text"
                required
                className="input-field"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4 inline-block mr-2" />
                Date of Birth
              </label>
              <input
                type="date"
                required
                className="input-field"
                value={formData.dob}
                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender
              </label>
              <div className="grid grid-cols-2 gap-4">
                {['Male', 'Female'].map((gender) => (
                  <button
                    key={gender}
                    type="button"
                    className={`p-3 rounded-lg border-2 transition-all ${
                      formData.gender === gender
                        ? 'border-pink-500 bg-pink-50 text-pink-700'
                        : 'border-gray-200 hover:border-pink-200'
                    }`}
                    onClick={() => setFormData({ ...formData, gender })}
                  >
                    {gender}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full btn-primary py-3 text-lg font-semibold"
            >
              Continue
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProfileSelection;
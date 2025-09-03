'use client';

import Container from "@/app/_components/container";
import { useState } from 'react';
import { ORGANIZATION } from "@/lib/constants";
import { Metadata } from "next";

export default function Auditions() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    instrument: '',
    experience: '',
    availability: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.instrument.trim()) {
      newErrors.instrument = 'Instrument is required';
    }

    if (!formData.experience.trim()) {
      newErrors.experience = 'Experience level is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // In a real app, this would submit to an API endpoint
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        instrument: '',
        experience: '',
        availability: '',
        message: ''
      });
      setErrors({});
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const instruments = [
    'Violin', 'Viola', 'Cello', 'Double Bass',
    'Flute', 'Piccolo', 'Oboe', 'English Horn', 'Clarinet', 'Bass Clarinet', 'Bassoon', 'Contrabassoon',
    'French Horn', 'Trumpet', 'Trombone', 'Tuba',
    'Timpani', 'Percussion', 'Harp', 'Piano',
    'Other'
  ];

  const experienceLevels = [
    'Beginner (0-2 years)',
    'Intermediate (3-5 years)',
    'Advanced (6-10 years)',
    'Professional (10+ years)'
  ];

  return (
    <main>
      <Container>
        <div className="max-w-4xl mx-auto py-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-8">
            Auditions
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join the St. Louis Video Game Music Orchestra and be part of something unique! 
              We welcome musicians of all skill levels who share our passion for video game music.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Audition Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Audition Information</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                    What We're Looking For
                  </h3>
                  <ul className="text-blue-800 dark:text-blue-200 space-y-2">
                    <li>• Passion for video game music and orchestral performance</li>
                    <li>• Commitment to regular rehearsals and performances</li>
                    <li>• Collaborative spirit and positive attitude</li>
                    <li>• Basic to intermediate playing ability on your instrument</li>
                    <li>• Willingness to learn new repertoire</li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">
                    Audition Process
                  </h3>
                  <div className="text-green-800 dark:text-green-200 space-y-2">
                    <p><strong>1. Application:</strong> Submit the form below with your information</p>
                    <p><strong>2. Informal Audition:</strong> Play a short piece of your choice (2-3 minutes)</p>
                    <p><strong>3. Sight Reading:</strong> Simple sight reading exercise</p>
                    <p><strong>4. Welcome:</strong> Join us for a rehearsal to get started!</p>
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">
                    Rehearsal Schedule
                  </h3>
                  <div className="text-purple-800 dark:text-purple-200">
                    <p className="mb-2">
                      <strong>When:</strong> {ORGANIZATION.rehearsal.day} {ORGANIZATION.rehearsal.time}
                    </p>
                    <p className="mb-2">
                      <strong>Where:</strong> {ORGANIZATION.rehearsal.location}
                    </p>
                    <p>
                      <strong>Address:</strong> {ORGANIZATION.rehearsal.address}
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
                    Current Openings
                  </h3>
                  <div className="text-yellow-800 dark:text-yellow-200">
                    <p className="mb-2">We are currently seeking musicians for all sections:</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p><strong>Strings:</strong> All positions</p>
                        <p><strong>Woodwinds:</strong> All positions</p>
                      </div>
                      <div>
                        <p><strong>Brass:</strong> All positions</p>
                        <p><strong>Percussion:</strong> All positions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Apply to Join</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="instrument"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Primary Instrument *
                  </label>
                  <select
                    id="instrument"
                    name="instrument"
                    value={formData.instrument}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  >
                    <option value="">Select your instrument</option>
                    {instruments.map((instrument) => (
                      <option key={instrument} value={instrument}>
                        {instrument}
                      </option>
                    ))}
                  </select>
                  {errors.instrument && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.instrument}</p>}
                </div>

                <div>
                  <label
                    htmlFor="experience"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Experience Level *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  >
                    <option value="">Select your experience level</option>
                    {experienceLevels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                  {errors.experience && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.experience}</p>}
                </div>

                <div>
                  <label
                    htmlFor="availability"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Availability
                  </label>
                  <input
                    type="text"
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                    placeholder="e.g., Available Monday evenings, some weekends"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                    placeholder="Tell us about your musical background, favorite video game soundtracks, or any questions you have..."
                  ></textarea>
                </div>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-green-800 dark:text-green-200">
                          Application submitted successfully! We'll contact you soon to schedule your audition.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-red-800 dark:text-red-200">
                          Failed to submit application. Please try again later or contact us directly.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-900 hover:bg-primary-800 disabled:bg-primary-400 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </div>
                  ) : (
                    'Submit Application'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

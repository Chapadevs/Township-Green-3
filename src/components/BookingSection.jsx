import { useState } from 'react';
import useEmailJS from '../hooks/useEmailJS.js';

const BookingSection = () => {
  const { sendEmail, isLoading: emailLoading, error: emailError } = useEmailJS();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: 1,
    preferredDate: '',
    preferredTime: '',
    specialRequests: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name?.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.preferredDate?.trim()) {
      newErrors.preferredDate = 'Preferred date is required';
    }

    if (!formData.preferredTime?.trim()) {
      newErrors.preferredTime = 'Preferred time is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      const bookingData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        guests: formData.guests || 1,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        specialRequests: formData.specialRequests
      };

      // Send email via EmailJS
      await sendEmail(bookingData, 'booking');
      
      // Reset form and show success
      setFormData({
        name: '',
        email: '',
        phone: '',
        guests: 1,
        preferredDate: '',
        preferredTime: '',
        specialRequests: ''
      });
      setSubmitSuccess(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Booking submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section className="py-20 px-10 bg-white" id="booking">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#2d5a49] text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6">
            Book Your Creative Session
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed max-w-2xl mx-auto">
            Ready to unlock your creativity? Schedule your session today.
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-8 md:p-12 shadow-lg">
          <h3 className="text-[#2d5a49] text-2xl font-bold mb-8 text-center">Session Booking</h3>
          
          {/* Success Message */}
          {submitSuccess && (
            <div className="bg-green-100 border border-green-400 p-4 rounded-lg mb-6">
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <p className="text-green-700 font-medium">Booking submitted successfully!</p>
              </div>
              <p className="text-green-600 text-sm mt-1">You will receive a confirmation email shortly.</p>
            </div>
          )}

          {/* Error Message */}
          {emailError && (
            <div className="bg-red-100 border border-red-400 p-4 rounded-lg mb-6">
              <div className="flex items-center gap-2">
                <span className="text-red-600">✗</span>
                <p className="text-red-700 font-medium">Error submitting booking</p>
              </div>
              <p className="text-red-600 text-sm mt-1">{emailError}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-[#2d5a49] text-sm font-bold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name || ''}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:border-[var(--primary-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-20"
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-[#2d5a49] text-sm font-bold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email || ''}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:border-[var(--primary-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-20"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-[#2d5a49] text-sm font-bold mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone || ''}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:border-[var(--primary-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-20"
                  placeholder="(555) 123-4567"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="guests" className="block text-[#2d5a49] text-sm font-bold mb-2">
                  Number of Guests
                </label>
                <select
                  id="guests"
                  value={formData.guests || 1}
                  onChange={(e) => handleInputChange('guests', parseInt(e.target.value))}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:border-[var(--primary-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-20"
                >
                  {[...Array(8)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="preferredDate" className="block text-[#2d5a49] text-sm font-bold mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  value={formData.preferredDate || ''}
                  onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:border-[var(--primary-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-20"
                  min={new Date().toISOString().split('T')[0]}
                />
                {errors.preferredDate && <p className="text-red-500 text-sm mt-1">{errors.preferredDate}</p>}
              </div>

              <div>
                <label htmlFor="preferredTime" className="block text-[#2d5a49] text-sm font-bold mb-2">
                  Preferred Time *
                </label>
                <input
                  type="time"
                  id="preferredTime"
                  value={formData.preferredTime || ''}
                  onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:border-[var(--primary-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-20"
                />
                {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="specialRequests" className="block text-[#2d5a49] text-sm font-bold mb-2">
                Special Requests or Message
              </label>
              <textarea
                id="specialRequests"
                value={formData.specialRequests || ''}
                onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:border-[var(--primary-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-20 resize-none"
                placeholder="Tell us about your event, special needs, or any questions..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting || emailLoading}
                className="inline-flex items-center justify-center rounded-lg h-12 px-8 bg-[var(--primary-color)] text-white text-lg font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px]"
              >
                {(isSubmitting || emailLoading) ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Submitting...
                  </span>
                ) : (
                  'Book Your Session'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;

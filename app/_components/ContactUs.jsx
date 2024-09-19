'use client';
import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('http://localhost:1337/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: formData }), // Strapi expects a "data" object
      });

      const result = await res.json();
      if (res.ok) {
        setSuccess('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        });
      } else {
        setError(result.message || 'Something went wrong.');
      }
    } catch (err) {
      setError('Failed to send the message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="w-full h-screen flex items-center justify-center mt-10" 
      style={{
        backgroundImage: 'url("https://www.imacab.net/wp-content/uploads/2022/07/lost-places-1801660_1280-1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      {/* Dark blue gradient overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 31, 63, 0.8)', // Dark blue gradient with low opacity
        }}
      ></div>

      <section className="relative z-10 flex flex-col max-w-5xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-auto">
        {/* Contact Info Section */}
        <div className="md:flex md:items-center md:justify-center md:w-1/2 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-gray-700 dark:to-gray-900">
          <div className="px-6 py-8 md:px-10 md:py-0">
            <h2 className="text-lg font-bold text-white md:text-xl lg:text-2xl">
              Contact Us For <span className="text-blue-300">More Information</span>
            </h2>
            <p className="mt-4 text-sm text-gray-200 lg:text-base">
              We're here to help with any queries you have. Reach out to us for further assistance and project updates.
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="flex items-center justify-center py-8 md:w-1/2">
          <form className="w-full px-4 space-y-4" onSubmit={handleSubmit}>
            {/* First Name */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">First Name</label>
              <input
                className="px-4 py-3 mt-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-400 rounded-lg transition-all duration-300"
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Last Name</label>
              <input
                className="px-4 py-3 mt-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-400 rounded-lg transition-all duration-300"
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email Address</label>
              <input
                className="px-4 py-3 mt-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-400 rounded-lg transition-all duration-300"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                className="px-4 py-3 mt-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-400 rounded-lg transition-all duration-300"
                name="message"
                placeholder="Enter your message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button className="w-full px-5 py-3 text-sm font-medium tracking-wider text-white uppercase bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition-all duration-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {/* Success or Error Messages */}
          {success && <p className="mt-4 text-green-600">{success}</p>}
          {error && <p className="mt-4 text-red-600">{error}</p>}
        </div>
      </section>
    </div>
  );
}

export default ContactUs;

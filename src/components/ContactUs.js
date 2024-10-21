// src/pages/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic
    alert(`Message from ${formData.name} sent successfully!`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-extrabold text-blue-600">
            <a href="/" className="hover:text-blue-800 transition duration-200">One More Friend</a>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8 text-lg">
            <a href="/" className="text-gray-700 hover:text-blue-500 transition duration-200">Home</a>
            <a href="/category" className="text-gray-700 hover:text-blue-500 transition duration-200">Category</a>
            <a href="/product" className="text-gray-700 hover:text-blue-500 transition duration-200">Product Details</a>
            <a href="/about" className="text-gray-700 hover:text-blue-500 transition duration-200">About</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-500 transition duration-200">Contact</a>
          </div>

          {/* Search and Join Button */}
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search something here!"
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200">
              Join the Community
            </button>
          </div>
        </div>
      </nav>

      {/* Contact Section */}
      <section className="container mx-auto my-10 p-4 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold mb-4">Our Contact Details</h3>
          <p className="text-gray-700">Email: contact@onemorefriend.com</p>
          <p className="text-gray-700">Phone: +1 (234) 567-890</p>
          <p className="text-gray-700">Address: 123 Pet Street, Animal City, AS 12345</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto text-center">
          <p>Register Now So You Don't Miss Our Programs</p>
          <div className="flex justify-center mt-4">
            <input
              type="email"
              placeholder="Enter your Email"
              className="px-4 py-2 rounded-md text-gray-800"
            />
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md ml-2">Subscribe Now</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;

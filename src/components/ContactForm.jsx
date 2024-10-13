import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to an API)
    console.log(formData);
  };

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 text-black rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className=''>
          <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 text-black rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold mb-1">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 text-black rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-semibold mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 text-black rounded focus:outline-none focus:ring focus:ring-blue-300"
            rows="4"
          />
        </div>
        <div className='flex justify-center items-center'>
          <button
            type="submit"
            className="w-2/5   bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>

        </div>
      </form>
    </div>
  );
};

export default ContactForm;

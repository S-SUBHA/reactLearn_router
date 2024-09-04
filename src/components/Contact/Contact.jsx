// Contact.js
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-700 via-gray-900 to-gray-800 p-6 md:p-10 lg:p-16">
      <div className="max-w-4xl w-full p-8 md:p-10 lg:p-12 bg-gray-900 rounded-xl shadow-lg border border-gray-700">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-8 text-center">
          Contact Us
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8 text-center">
          We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out using the form below. Our team is here to assist you with any inquiries.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col space-y-4">
            <label htmlFor="name" className="text-gray-200 font-semibold text-sm md:text-base">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 border border-gray-600 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50 transition duration-300"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="flex flex-col space-y-4">
            <label htmlFor="email" className="text-gray-200 font-semibold text-sm md:text-base">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border border-gray-600 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50 transition duration-300"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="flex flex-col space-y-4">
            <label htmlFor="message" className="text-gray-200 font-semibold text-sm md:text-base">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 border border-gray-600 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50 transition duration-300 resize-none min-h-[150px]"
              placeholder="Your message here..."
              required
            />
          </div>
          <button type="submit" className="w-full py-3 px-6 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition-transform transform hover:scale-105 duration-300">
            Send Message
          </button>
        </form>
        {isSubmitted && <p className="text-teal-300 mt-6 text-center text-lg">Thank you for your message! We will get back to you soon.</p>}
      </div>
    </div>
  );
};

export default Contact;

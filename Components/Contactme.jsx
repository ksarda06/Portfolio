import React from 'react';

const Contactme = () => {
  return (
    <section id="contact" className=" mx-auto my-12 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact Me</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
          <input
            type="text"
            id="name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
          <textarea
            id="message"
            rows="5"
            className="w-full p-3 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contactme;

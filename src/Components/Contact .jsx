import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Contact</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Products & Order</h2>
          <p className="text-lg">
            <strong>(+1) 123-456-7890</strong>
            <br />
            available 24/7
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Info & Enquiries</h2>
          <p className="text-lg">
            <strong>(+1) 123-456-7890</strong>
            <br />
            available 24/7
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Store Locator</h2>
          <p className="text-lg">Find our retail near you</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Stay in Touch</h2>
          <p className="text-lg">Facebook</p>
          <p className="text-lg">Twitter</p>
          <p className="text-lg">Youtube</p>
        </div>
      </div>

      <div className="max-w-lg mx-auto mb-8">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-lg font-bold mb-2" htmlFor="name">
              Name *
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-bold mb-2" htmlFor="email">
              Email *
            </label>
            <input
              className="w-full p-2 border border-red-500 rounded"
              type="email"
              id="email"
              name="email"
              required
              placeholder="This field is required."
            />
          </div>

          <div>
            <label className="block text-lg font-bold mb-2" htmlFor="message">
              Comment or Message *
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              id="message"
              name="message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        {/* You can add FAQ content here if needed */}
      </div>
    </div>
  );
};

export default Contact;

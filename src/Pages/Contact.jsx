// components/Contact.jsx
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="hero min-h-screen bg-base-100 py-12">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12 max-w-5xl w-full px-4">

        {/* Left Side: Contact Information Text */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl font-bold tracking-tight">Get in Touch</h1>
          <p className="py-6 text-base-content/70 leading-relaxed">
            Have questions about data feeds, feature requests, or API configurations? Drop us a message and our team will get back to you as soon as conditions clear up.
          </p>

          {/* Quick Info Grid */}
          <div className="space-y-4 hidden lg:block mt-4">
            <div className="flex items-center gap-3 text-sm text-base-content/80">
              <span className="text-primary text-xl">📍</span> Global Headquarters / Open Web
            </div>
            <div className="flex items-center gap-3 text-sm text-base-content/80">
              <span className="text-primary text-xl">✉️</span> support@skyflow-weather.com
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Input Form Card */}
        <div className="card bg-base-200 w-full max-w-md shrink-0 shadow-md border border-base-300 lg:w-1/2">
          <form onSubmit={handleSubmit} className="card-body p-6 sm:p-8 space-y-4">

            {/* Name input field */}
            <div className="form-control">
              <label className="label py-1">
                <span className="label-text font-medium text-xs">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full focus:input-primary"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            {/* Email input field */}
            <div className="form-control">
              <label className="label py-1">
                <span className="label-text font-medium text-xs">Email Address</span>
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                className="input input-bordered w-full focus:input-primary"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            {/* Message text area */}
            <div className="form-control">
              <label className="label py-1">
                <span className="label-text font-medium text-xs">Message</span>
              </label>
              <textarea
                placeholder="How can we help you?"
                className="textarea textarea-bordered h-28 w-full focus:textarea-primary resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            {/* Action button */}
            <div className="form-control mt-4">
              <button type="submit" className="btn btn-primary w-full normal-case">
                Send Message
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}
import React, { useState } from "react";
import "./style.css";

const ContactUs = ({ isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  if (!isOpen) return null; // ✅ Modal tabhi dikhega jab open ho

  // Modal ko close karne ka function
  const closeModal = (e) => {
    if (e.target.classList.contains("modal")) {
      setIsOpen(false);
      resetForm(); // ✅ Modal band hone par form reset
    }
  };

  // Form ke inputs ko handle karna
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Message Send karne ka function
  const sendMessage = async (e) => {
    e.preventDefault(); // ✅ Prevent page reload

    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // ✅ Form reset
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err) {
      setError("Something went wrong! Please try again.");
    }

    setLoading(false);
  };

  // ✅ Modal close hone par form reset karne ka function
  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
    setSuccess(null);
    setError(null);
    setLoading(false);
  };

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content">
        <span className="close" onClick={() => setIsOpen(false)}>&times;</span>

        {/* ✅ Image added here */}
        <div className="image-container">
          <img src="/img/contact.webp" alt="Contact" />
        </div>

        <div className="contact-form">
          <h2>Contact Us</h2>

          {success && <p className="success">{success}</p>}
          {error && <p className="error">{error}</p>}

          <form onSubmit={sendMessage}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

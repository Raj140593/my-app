import React, { useState } from "react";
import "./style.css";

const ContactUs = ({ isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  if (!isOpen) return null;

  const closeModal = (e) => {
    if (e.target.classList.contains("modal")) {
      setIsOpen(false);
      resetForm();
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    setUploadProgress(0);

    try {
      const formData = new FormData();
      formData.append("name", formData.name);
      formData.append("email", formData.email);
      formData.append("message", formData.message);
      if (file) {
        formData.append("file", file);
      }

      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: formData,
        headers: {},
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percentCompleted);
        },
      });

      if (response.ok) {
        setSuccess("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setFile(null);
        setUploadProgress(0);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err) {
      setError("Something went wrong! Please try again.");
    }

    setLoading(false);
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
    setSuccess(null);
    setError(null);
    setLoading(false);
    setFile(null);
    setUploadProgress(0);
  };

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content">
        <span className="close" onClick={() => setIsOpen(false)}>&times;</span>

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
            <input type="file" onChange={handleFileChange} />
            {file && <p>Selected File: {file.name}</p>}
            {uploadProgress > 0 && <progress value={uploadProgress} max="100" />}
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

import { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './Contact.css';

// Use environment variable for API URL
const API_URL = import.meta.env.VITE_API_URL || "/api/contact";

const initialFormState = { name: '', email: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(initialFormState);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ success: null, msg: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setStatus({ success: null, msg: '' });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ success: null, msg: '' });
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ success: true, msg: 'Your message was sent successfully!' });
        setForm(initialFormState);
      } else {
        setStatus({ success: false, msg: data.error || 'Something went wrong.' });
      }
    } catch {
      setStatus({ success: false, msg: 'Unable to send message. Please try again later.' });
    }
    setSubmitting(false);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>
      <div className="contact-container">
        <div className="section-header">
          <div className="header-icon"><FaEnvelope /></div>
          <h2 className="section-title">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Interested in working together, collaborating, or just want to say hello? Fill out the form below or connect through socials!
          </p>
        </div>
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" required name="name" id="name" placeholder="Your Name" value={form.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" required name="email" id="email" placeholder="your@email.com" value={form.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea required name="message" id="message" rows="5" placeholder="How can I help you?" value={form.message} onChange={handleChange} />
            </div>
            <button type="submit" className="cta-button primary" disabled={submitting}>
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
            {status.msg && (
              <div className={`form-status ${status.success ? 'success' : 'error'}`}>
                {status.msg}
              </div>
            )}
          </form>
          {/* Contact Info Box */}
          <div className="contact-info-box">
            <h3>Connect Directly</h3>
            <ul>
              <li>
                <FaEnvelope className="contact-info-icon" />
                <a href="mailto:mohitchamyal58@gmail.com">mohitchamyal58@gmail.com</a>
              </li>
              <li>
                <FaLinkedin className="contact-info-icon" />
                <a href="https://www.linkedin.com/in/mohit-chamyal-57254724b/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <FaGithub className="contact-info-icon" />
                <a href="https://github.com/MohitChamyal" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <FaTwitter className="contact-info-icon" />
                <a href="https://x.com/MOHITCHAMYAL58" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </li>
            </ul>
            <div className="or-divider"><span>OR</span></div>
            <div className="contact-extra-text">
              Feel free to DM me on LinkedIn or email for freelance/part-time gigs, collaborations, or tech chats!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

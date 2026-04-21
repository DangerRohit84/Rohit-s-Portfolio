import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiMapPin, FiPhone, FiSend, FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

const contactMethods = [
  { icon: <FiMail />, title: 'Email', info: 'desinarohit2007@gmail.com' },
  { icon: <FiMapPin />, title: 'Location', info: 'AP, India' },
  { icon: <FiPhone />, title: 'Phone', info: '+91 9391084844' },
];

const socials = [
  { icon: <FiGithub />, href: '#', label: 'GitHub' },
  { icon: <FiLinkedin />, href: '#', label: 'LinkedIn' },
  { icon: <FiTwitter />, href: '#', label: 'Twitter' },
  { icon: <FiInstagram />, href: '#', label: 'Instagram' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Prepare the mailto details
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:desinarohit2007@gmail.com?subject=${subject}&body=${body}`;
    
    // Open default mail client
    window.location.href = mailtoLink;
    
    // Switch to success view handshake
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          custom={0}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-description" style={{ margin: '0 auto' }}>
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="contact-content">
          <div className="contact-info">
            <motion.div
              className="contact-methods"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeUp}
              custom={1}
            >
              {contactMethods.map((method) => (
                <div className="contact-method" key={method.title}>
                  <div className="contact-method-icon">{method.icon}</div>
                  <div>
                    <h4>{method.title}</h4>
                    <p>{method.info}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="contact-socials"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeUp}
              custom={2}
            >
              {socials.map((social) => (
                <a
                  href={social.href}
                  className="social-link"
                  key={social.label}
                  id={`social-${social.label.toLowerCase()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {submitted ? (
            <motion.div 
              className="contact-success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 0.8, bounce: 0.4 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-surface)', padding: '50px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-glass)', textAlign: 'center', width: '100%' }}
            >
              <motion.div 
                className="handshake-icon"
                animate={{ rotate: [-20, 20, -15, 15, -10, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                style={{ fontSize: '5rem', marginBottom: '20px' }}
              >
                🤝
              </motion.div>
              <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', marginBottom: '15px' }}>Thank You!</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}>I'll get back to you very soon. Let's build something great together.</p>
            </motion.div>
          ) : (
            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeUp}
              custom={2}
            >
              <h3>Send me a message ✉️</h3>

              <div className="form-group">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Your Email</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="form-submit" id="contact-submit">
                <FiSend /> Send Message
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
}

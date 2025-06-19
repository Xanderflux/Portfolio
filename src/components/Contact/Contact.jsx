import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';
import Section from '../UI/Section';
import bioData from '../../data/bio.json';
import { FaLinkedin, FaGithub, FaXTwitter, FaEnvelope,  } from 'react-icons/fa6';
import { FaMapMarkerAlt, FaPhoneAlt} from 'react-icons/fa';

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const submitButtonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
    disabled: { opacity: 0.7 }
  };

  const formFieldClasses = `w-full px-4 py-3 rounded-lg ${
    theme === 'dark' 
      ? 'bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-blue-500' 
      : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200`;

  return (
    <Section id="contact" title="Contact Me">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          className="space-y-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className={`text-2xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Get In Touch
          </h3>
          
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            I'm currently available for freelance work and full-time positions. If you have a project that needs some creative attention or a position that matches my skills, feel free to contact me.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-full ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
              }`}>
                <FaMapMarkerAlt className="text-blue-500" />
              </div>
              <div>
                <h4 className={`text-lg font-medium ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Location
                </h4>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {bioData.location}
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-full ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
              }`}>
                <FaEnvelope className="text-blue-500" />
              </div>
              <div>
                <h4 className={`text-lg font-medium ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Email
                </h4>
                <a 
                  href={`mailto:${bioData.email}`}
                  className="text-blue-500 hover:underline"
                >
                  {bioData.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-full ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
              }`}>
                <FaPhoneAlt className="text-blue-500" />
              </div>
              <div>
                <h4 className={`text-lg font-medium ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Phone
                </h4>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {bioData.phone}
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className={`text-lg font-medium mb-3 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Connect With Me
            </h4>
            <div className="flex space-x-4">
              <a 
                href={bioData.social_links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-colors duration-300 ${
                  theme === 'dark' 
                    ? 'bg-gray-800 hover:bg-gray-700 text-blue-400 hover:text-blue-300' 
                    : 'bg-gray-100 hover:bg-gray-200 text-blue-600 hover:text-blue-700'
                }`}
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href={bioData.social_links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-colors duration-300 ${
                  theme === 'dark' 
                    ? 'bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-gray-300' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900'
                }`}
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href={bioData.social_links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-colors duration-300 ${
                  theme === 'dark' 
                    ? 'bg-gray-800 hover:bg-gray-700 text-blue-400 hover:text-blue-300' 
                    : 'bg-gray-100 hover:bg-gray-200 text-blue-600 hover:text-blue-700'
                }`}
                aria-label="Twitter"
              >
                <FaXTwitter size={20} />
              </a>
              <a 
                href={`mailto:${bioData.email}`}
                className={`p-3 rounded-full transition-colors duration-300 ${
                  theme === 'dark' 
                    ? 'bg-gray-800 hover:bg-gray-700 text-green-400 hover:text-green-300' 
                    : 'bg-gray-100 hover:bg-gray-200 text-green-600 hover:text-green-700'
                }`}
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className={`block mb-2 font-medium ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className={formFieldClasses}
              />
            </div>
            
            <div>
              <label htmlFor="email" className={`block mb-2 font-medium ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                required
                className={formFieldClasses}
              />
            </div>
            
            <div>
              <label htmlFor="subject" className={`block mb-2 font-medium ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                required
                className={formFieldClasses}
              />
            </div>
            
            <div>
              <label htmlFor="message" className={`block mb-2 font-medium ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your message"
                required
                className={formFieldClasses}
              />
            </div>
            
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-300"
              variants={submitButtonVariants}
              whileHover="hover"
              whileTap="tap"
              animate={isSubmitting ? "disabled" : ""}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
            
            {submitSuccess && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-md bg-green-100 text-green-800"
              >
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}
            
            {submitError && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-md bg-red-100 text-red-800"
              >
                Something went wrong! Please try again later.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
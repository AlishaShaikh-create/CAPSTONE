
// // import { useTheme } from '../context/ThemeContext';

// // import React, { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import '../Styles/Landing.css';

// // const Landing = () => {
// //   const [isDarkMode, setIsDarkMode] = useState(false);

// //   useEffect(() => {
// //     // Load theme from localStorage on mount
// //     const savedTheme = localStorage.getItem('theme');
// //     if (savedTheme === 'dark') {
// //       setIsDarkMode(true);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     // Apply theme class to document root and save to localStorage
// //     if (isDarkMode) {
// //       document.documentElement.classList.add('dark');
// //       localStorage.setItem('theme', 'dark');
// //     } else {
// //       document.documentElement.classList.remove('dark');
// //       localStorage.setItem('theme', 'light');
// //     }
// //   }, [isDarkMode]);

// //   const toggleTheme = () => {
// //     setIsDarkMode(!isDarkMode);
// //   };

// //   // Add scroll animation observer
// //   useEffect(() => {
// //     const observerOptions = {
// //       threshold: 0.1,
// //       rootMargin: '0px 0px -50px 0px'
// //     };

// //     const observer = new IntersectionObserver((entries) => {
// //       entries.forEach(entry => {
// //         if (entry.isIntersecting) {
// //           entry.target.classList.add('animate-in');
// //         }
// //       });
// //     }, observerOptions);

// //     // Observe all animated elements
// //     document.querySelectorAll('.animate-on-scroll').forEach(el => {
// //       observer.observe(el);
// //     });

// //     return () => observer.disconnect();
// //   }, []);

// //   return (
// //     <div className="landing-page">
// //       {/* Navigation */}
// //       <nav className="landing-navbar">
// //         <div className="landing-nav-container">
// //           <div className="landing-logo animate-fade-in">
// //             <h1>TeachMe</h1>
// //           </div>
// //           <ul className="landing-nav-links">
// //             <li><a href="#hero" className="landing-nav-link">Home</a></li>
// //             <li><a href="#features" className="landing-nav-link">Explore</a></li>
// //             <li><a href="#how-it-works" className="landing-nav-link">How It Works</a></li>
// //             <li><Link to="/register" className="landing-nav-btn">Get Started</Link></li>
// //           </ul>
// //           <div className="theme-toggle-container">
// //             <button
// //               onClick={toggleTheme}
// //               className="theme-toggle"
// //               aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
// //             >
// //               {isDarkMode ? '☀️' : '🌙'}
// //             </button>
// //           </div>
// //         </div>
// //       </nav>

// //       {/* Hero Section with Wave */}
// //       <section id="hero" className="landing-hero">
// //         <div className="hero-background-animation">
// //           <div className="floating-shape shape-1"></div>
// //           <div className="floating-shape shape-2"></div>
// //           <div className="floating-shape shape-3"></div>
// //         </div>
// //         <div className="landing-hero-content animate-slide-up">
// //           <h1 className="landing-hero-title">
// //             Unlock Your Learning Potential
// //           </h1>
// //           <p className="landing-hero-subtitle">
// //             Connect with experts for personalized skill growth
// //           </p>
// //           <p className="landing-hero-description">
// //             Join a community of learners and teachers. Share skills, learn new ones, and build connections that matter.
// //           </p>
// //           <div className="landing-hero-buttons">
// //             <Link to="/register" className="landing-btn-primary pulse-animation">
// //               Get Started
// //             </Link>
// //             <a href="#features" className="landing-btn-secondary">
// //               Learn More
// //             </a>
// //           </div>
// //           <div className="landing-hero-stats">
// //             <div className="landing-stat-item animate-count">
// //               <span className="landing-stat-number">10K+</span>
// //               <span className="landing-stat-label">Active Users</span>
// //             </div>
// //             <div className="landing-stat-item animate-count">
// //               <span className="landing-stat-number">500+</span>
// //               <span className="landing-stat-label">Skills Shared</span>
// //             </div>
// //             <div className="landing-stat-item animate-count">
// //               <span className="landing-stat-number">95%</span>
// //               <span className="landing-stat-label">Success Rate</span>
// //             </div>
// //           </div>
// //         </div>
// //         {/* Wave Animation */}
// //         <div className="wave-container">
// //           <svg className="wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
// //             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="wave-path"></path>
// //           </svg>
// //         </div>
// //       </section>

// //       {/* Features Section with Images */}
// //       <section id="features" className="landing-features">
// //         <div className="landing-container">
// //           <div className="landing-section-header animate-on-scroll">
// //             <h2 className="landing-section-title">How TeachMe Works</h2>
// //             <p className="landing-section-subtitle">
// //               Your journey to skill mastery in four simple steps
// //             </p>
// //           </div>
// //           <div className="landing-features-grid">
// //             <div className="landing-feature-card image-card animate-on-scroll">
// //               <div className="feature-image-container">
// //                 <img
// //                   src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
// //                   alt="Collaborative Learning"
// //                   className="feature-image"
// //                 />
// //                 <div className="image-overlay"></div>
// //               </div>
// //               <div className="feature-content">
// //                 <h3 className="landing-feature-title">Create Your Profile</h3>
// //                 <p className="landing-feature-description">
// //                   Set up your profile with skills you can teach and skills you want to learn. Let others discover your expertise.
// //                 </p>
// //               </div>
// //             </div>

// //             <div className="landing-feature-card image-card animate-on-scroll">
// //               <div className="feature-image-container">
// //                 <img
// //                   src="https://images.unsplash.com/photo-1561346745-5db62ae43861"
// //                   alt="Skill Matching"
// //                   className="feature-image"
// //                 />
// //                 <div className="image-overlay"></div>
// //               </div>
// //               <div className="feature-content">
// //                 <h3 className="landing-feature-title">Find Your Match</h3>
// //                 <p className="landing-feature-description">
// //                   Connect with the right people to teach or learn from using our smart matching system.
// //                 </p>
// //               </div>
// //             </div>

// //             <div className="landing-feature-card image-card animate-on-scroll">
// //               <div className="feature-image-container">
// //                 <img
// //                   src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
// //                   alt="Knowledge Exchange"
// //                   className="feature-image"
// //                 />
// //                 <div className="image-overlay"></div>
// //               </div>
// //               <div className="feature-content">
// //                 <h3 className="landing-feature-title">Start Learning</h3>
// //                 <p className="landing-feature-description">
// //                   Schedule sessions, exchange knowledge, and build lasting learning relationships.
// //                 </p>
// //               </div>
// //             </div>

// //             <div className="landing-feature-card image-card animate-on-scroll">
// //               <div className="feature-image-container">
// //                 <img
// //                   src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d"
// //                   alt="Learning Motivation"
// //                   className="feature-image"
// //                 />
// //                 <div className="image-overlay"></div>
// //               </div>
// //               <div className="feature-content">
// //                 <h3 className="landing-feature-title">Grow Together</h3>
// //                 <p className="landing-feature-description">
// //                   Track progress, expand your network, and thrive in a community of continuous learning.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Benefits Section with Icons */}
// //       <section className="landing-benefits">
// //         <div className="landing-container">
// //           <div className="landing-section-header animate-on-scroll">
// //             <h2 className="landing-section-title">Why Choose TeachMe?</h2>
// //             <p className="landing-section-subtitle">
// //               Everything you need to master new skills and share your knowledge
// //             </p>
// //           </div>
// //           <div className="benefits-grid">
// //             <div className="benefit-item animate-on-scroll">
// //               <div className="benefit-icon-wrapper">
// //                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //                   <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
// //                 </svg>
// //               </div>
// //               <h3>Free to Start</h3>
// //               <p>Create your profile and connect with others at no cost</p>
// //             </div>

// //             <div className="benefit-item animate-on-scroll">
// //               <div className="benefit-icon-wrapper">
// //                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //                   <circle cx="12" cy="12" r="10"></circle>
// //                   <polyline points="12 6 12 12 16 14"></polyline>
// //                 </svg>
// //               </div>
// //               <h3>Flexible Schedule</h3>
// //               <p>Learn and teach on your own time, at your own pace</p>
// //             </div>

// //             <div className="benefit-item animate-on-scroll">
// //               <div className="benefit-icon-wrapper">
// //                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //                   <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
// //                   <circle cx="9" cy="7" r="4"></circle>
// //                   <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
// //                   <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
// //                 </svg>
// //               </div>
// //               <h3>Community Support</h3>
// //               <p>Join a network of passionate learners and teachers</p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA Section with Wave */}
// //       <section id="join" className="landing-cta">
// //         <div className="wave-container wave-top">
// //           <svg className="wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
// //             <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="wave-path"></path>
// //           </svg>
// //         </div>
// //         <div className="landing-cta-content animate-on-scroll">
// //           <h2 className="landing-cta-title">
// //             Ready to Start Your Journey?
// //           </h2>
// //           <p className="landing-cta-subtitle">
// //             Join thousands of learners and teachers today!
// //           </p>
// //           <Link to="/register" className="landing-cta-button pulse-animation">
// //             Join TeachMe Now
// //           </Link>
// //         </div>
// //       </section>

// //       {/* Footer */}
// //       <footer className="landing-footer">
// //         <div className="landing-footer-content">
// //           <div className="landing-footer-section">
// //             <h3 className="landing-footer-logo">TeachMe</h3>
// //             <p className="landing-footer-description">
// //               Connecting learners and teachers to share skills and grow together.
// //             </p>
// //           </div>
// //           <div className="landing-footer-section">
// //             <h4 className="landing-footer-title">Platform</h4>
// //             <ul className="landing-footer-links">
// //               <li><a href="#">How it Works</a></li>
// //               <li><a href="#">Features</a></li>
// //               <li><a href="#">Pricing</a></li>
// //             </ul>
// //           </div>
// //           <div className="landing-footer-section">
// //             <h4 className="landing-footer-title">Company</h4>
// //             <ul className="landing-footer-links">
// //               <li><a href="#">About Us</a></li>
// //               <li><a href="#">Contact</a></li>
// //               <li><a href="#">Careers</a></li>
// //             </ul>
// //           </div>
// //           <div className="landing-footer-section">
// //             <h4 className="landing-footer-title">Legal</h4>
// //             <ul className="landing-footer-links">
// //               <li><a href="#">Privacy Policy</a></li>
// //               <li><a href="#">Terms of Service</a></li>
// //               <li><a href="#">Cookie Policy</a></li>
// //             </ul>
// //           </div>
// //         </div>
// //         <div className="landing-footer-bottom">
// //           <p>&copy; 2025 TeachMe. All rights reserved.</p>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default Landing;



// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
//  // Import global theme
// import '../Styles/Landing.css';

// const Landing = () => {
//   const { isDarkMode, toggleTheme } = useTheme();

//   // Scroll animation observer
//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.1,
//       rootMargin: '0px 0px -50px 0px'
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate-in');
//         }
//       });
//     }, observerOptions);

//     document.querySelectorAll('.animate-on-scroll').forEach(el => {
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="landing-page">
//       {/* Navigation */}
//       <nav className="landing-navbar">
//         <div className="landing-nav-container">
//           <div className="landing-logo animate-fade-in">
//             <h1>TeachMe</h1>
//           </div>
//           <ul className="landing-nav-links">
//             <li><a href="#hero" className="landing-nav-link">Home</a></li>
//             <li><a href="#features" className="landing-nav-link">Explore</a></li>
//             <li><a href="#how-it-works" className="landing-nav-link">How It Works</a></li>
//             <li><Link to="/register" className="landing-nav-btn">Get Started</Link></li>
//           </ul>
//           <div className="theme-toggle-container">
//             <button
//               onClick={toggleTheme}
//               className="theme-toggle"
//               aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
//             >
//               {isDarkMode ? '☀️' : '🌙'}
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section with Wave */}
//       <section id="hero" className="landing-hero">
//         <div className="hero-background-animation">
//           <div className="floating-shape shape-1"></div>
//           <div className="floating-shape shape-2"></div>
//           <div className="floating-shape shape-3"></div>
//         </div>
//         <div className="landing-hero-content animate-slide-up">
//           <h1 className="landing-hero-title">
//             Unlock Your Learning Potential
//           </h1>
//           <p className="landing-hero-subtitle">
//             Connect with experts for personalized skill growth
//           </p>
//           <p className="landing-hero-description">
//             Join a community of learners and teachers. Share skills, learn new ones, and build connections that matter.
//           </p>
//           <div className="landing-hero-buttons">
//             <Link to="/register" className="landing-btn-primary pulse-animation">
//               Get Started
//             </Link>
//             <a href="#features" className="landing-btn-secondary">
//               Learn More
//             </a>
//           </div>
//           <div className="landing-hero-stats">
//             <div className="landing-stat-item animate-count">
//               <span className="landing-stat-number">10K+</span>
//               <span className="landing-stat-label">Active Users</span>
//             </div>
//             <div className="landing-stat-item animate-count">
//               <span className="landing-stat-number">500+</span>
//               <span className="landing-stat-label">Skills Shared</span>
//             </div>
//             <div className="landing-stat-item animate-count">
//               <span className="landing-stat-number">95%</span>
//               <span className="landing-stat-label">Success Rate</span>
//             </div>
//           </div>
//         </div>
//         {/* Wave Animation */}
//         <div className="wave-container">
//           <svg className="wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
//             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="wave-path"></path>
//           </svg>
//         </div>
//       </section>

//       {/* Features Section with Images */}
//       <section id="features" className="landing-features">
//         <div className="landing-container">
//           <div className="landing-section-header animate-on-scroll">
//             <h2 className="landing-section-title">How TeachMe Works</h2>
//             <p className="landing-section-subtitle">
//               Your journey to skill mastery in four simple steps
//             </p>
//           </div>
//           <div className="landing-features-grid">
//             <div className="landing-feature-card image-card animate-on-scroll">
//               <div className="feature-image-container">
//                 <img
//                   src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
//                   alt="Collaborative Learning"
//                   className="feature-image"
//                 />
//                 <div className="image-overlay"></div>
//               </div>
//               <div className="feature-content">
//                 <h3 className="landing-feature-title">Create Your Profile</h3>
//                 <p className="landing-feature-description">
//                   Set up your profile with skills you can teach and skills you want to learn. Let others discover your expertise.
//                 </p>
//               </div>
//             </div>

//             <div className="landing-feature-card image-card animate-on-scroll">
//               <div className="feature-image-container">
//                 <img
//                   src="https://images.unsplash.com/photo-1561346745-5db62ae43861"
//                   alt="Skill Matching"
//                   className="feature-image"
//                 />
//                 <div className="image-overlay"></div>
//               </div>
//               <div className="feature-content">
//                 <h3 className="landing-feature-title">Find Your Match</h3>
//                 <p className="landing-feature-description">
//                   Connect with the right people to teach or learn from using our smart matching system.
//                 </p>
//               </div>
//             </div>

//             <div className="landing-feature-card image-card animate-on-scroll">
//               <div className="feature-image-container">
//                 <img
//                   src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
//                   alt="Knowledge Exchange"
//                   className="feature-image"
//                 />
//                 <div className="image-overlay"></div>
//               </div>
//               <div className="feature-content">
//                 <h3 className="landing-feature-title">Start Learning</h3>
//                 <p className="landing-feature-description">
//                   Schedule sessions, exchange knowledge, and build lasting learning relationships.
//                 </p>
//               </div>
//             </div>

//             <div className="landing-feature-card image-card animate-on-scroll">
//               <div className="feature-image-container">
//                 <img
//                   src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d"
//                   alt="Learning Motivation"
//                   className="feature-image"
//                 />
//                 <div className="image-overlay"></div>
//               </div>
//               <div className="feature-content">
//                 <h3 className="landing-feature-title">Grow Together</h3>
//                 <p className="landing-feature-description">
//                   Track progress, expand your network, and thrive in a community of continuous learning.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section with Icons */}
//       <section className="landing-benefits">
//         <div className="landing-container">
//           <div className="landing-section-header animate-on-scroll">
//             <h2 className="landing-section-title">Why Choose TeachMe?</h2>
//             <p className="landing-section-subtitle">
//               Everything you need to master new skills and share your knowledge
//             </p>
//           </div>
//           <div className="benefits-grid">
//             <div className="benefit-item animate-on-scroll">
//               <div className="benefit-icon-wrapper">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
//                 </svg>
//               </div>
//               <h3>Free to Start</h3>
//               <p>Create your profile and connect with others at no cost</p>
//             </div>

//             <div className="benefit-item animate-on-scroll">
//               <div className="benefit-icon-wrapper">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <circle cx="12" cy="12" r="10"></circle>
//                   <polyline points="12 6 12 12 16 14"></polyline>
//                 </svg>
//               </div>
//               <h3>Flexible Schedule</h3>
//               <p>Learn and teach on your own time, at your own pace</p>
//             </div>

//             <div className="benefit-item animate-on-scroll">
//               <div className="benefit-icon-wrapper">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
//                   <circle cx="9" cy="7" r="4"></circle>
//                   <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
//                   <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
//                 </svg>
//               </div>
//               <h3>Community Support</h3>
//               <p>Join a network of passionate learners and teachers</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section with Wave */}
//       <section id="join" className="landing-cta">
//         <div className="wave-container wave-top">
//           <svg className="wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
//             <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="wave-path"></path>
//           </svg>
//         </div>
//         <div className="landing-cta-content animate-on-scroll">
//           <h2 className="landing-cta-title">
//             Ready to Start Your Journey?
//           </h2>
//           <p className="landing-cta-subtitle">
//             Join thousands of learners and teachers today!
//           </p>
//           <Link to="/register" className="landing-cta-button pulse-animation">
//             Join TeachMe Now
//           </Link>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="landing-footer">
//         <div className="landing-footer-content">
//           <div className="landing-footer-section">
//             <h3 className="landing-footer-logo">TeachMe</h3>
//             <p className="landing-footer-description">
//               Connecting learners and teachers to share skills and grow together.
//             </p>
//           </div>
//           <div className="landing-footer-section">
//             <h4 className="landing-footer-title">Platform</h4>
//             <ul className="landing-footer-links">
//               <li><a href="#">How it Works</a></li>
//               <li><a href="#">Features</a></li>
//               <li><a href="#">Pricing</a></li>
//             </ul>
//           </div>
//           <div className="landing-footer-section">
//             <h4 className="landing-footer-title">Company</h4>
//             <ul className="landing-footer-links">
//               <li><a href="#">About Us</a></li>
//               <li><a href="#">Contact</a></li>
//               <li><a href="#">Careers</a></li>
//             </ul>
//           </div>
//           <div className="landing-footer-section">
//             <h4 className="landing-footer-title">Legal</h4>
//             <ul className="landing-footer-links">
//               <li><a href="#">Privacy Policy</a></li>
//               <li><a href="#">Terms of Service</a></li>
//               <li><a href="#">Cookie Policy</a></li>
//             </ul>
//           </div>
//         </div>
//         <div className="landing-footer-bottom">
//           <p>&copy; 2025 TeachMe. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Landing;



// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import '../Styles/Landing.css';

// const Landing = () => {
//   // Scroll animation observer
//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.1,
//       rootMargin: '0px 0px -50px 0px'
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate-in');
//         }
//       });
//     }, observerOptions);

//     document.querySelectorAll('.animate-on-scroll').forEach(el => {
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="landing-page">
//       {/* Navigation */}
//       <nav className="landing-navbar">
//         <div className="landing-nav-container">
//           <div className="landing-logo animate-fade-in">
//             <h1>TeachMe</h1>
//           </div>
//           <ul className="landing-nav-links">
//             <li><a href="#hero" className="landing-nav-link">Home</a></li>
//             <li><a href="#features" className="landing-nav-link">Explore</a></li>
//             <li><a href="#how-it-works" className="landing-nav-link">How It Works</a></li>
//             <li><Link to="/register" className="landing-nav-btn">Get Started</Link></li>
//           </ul>
//         </div>
//       </nav>

//       {/* Hero Section with Wave */}
//       <section id="hero" className="landing-hero">
//         <div className="hero-background-animation">
//           <div className="floating-shape shape-1"></div>
//           <div className="floating-shape shape-2"></div>
//           <div className="floating-shape shape-3"></div>
//         </div>
//         <div className="landing-hero-content animate-slide-up">
//           <h1 className="landing-hero-title">
//             Unlock Your Learning Potential
//           </h1>
//           <p className="landing-hero-subtitle">
//             Connect with experts for personalized skill growth
//           </p>
//           <p className="landing-hero-description">
//             Join a community of learners and teachers. Share skills, learn new ones, and build connections that matter.
//           </p>
//           <div className="landing-hero-buttons">
//             <Link to="/register" className="landing-btn-primary pulse-animation">
//               Get Started
//             </Link>
//             <a href="#features" className="landing-btn-secondary">
//               Learn More
//             </a>
//           </div>
//           <div className="landing-hero-stats">
//             <div className="landing-stat-item animate-count">
//               <span className="landing-stat-number">10K+</span>
//               <span className="landing-stat-label">Active Users</span>
//             </div>
//             <div className="landing-stat-item animate-count">
//               <span className="landing-stat-number">500+</span>
//               <span className="landing-stat-label">Skills Shared</span>
//             </div>
//             <div className="landing-stat-item animate-count">
//               <span className="landing-stat-number">95%</span>
//               <span className="landing-stat-label">Success Rate</span>
//             </div>
//           </div>
//         </div>
//         {/* Wave Animation */}
//         <div className="wave-container">
//           <svg className="wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
//             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="wave-path"></path>
//           </svg>
//         </div>
//       </section>

//       {/* Features Section with Images */}
//       <section id="features" className="landing-features">
//         <div className="landing-container">
//           <div className="landing-section-header animate-on-scroll">
//             <h2 className="landing-section-title">How TeachMe Works</h2>
//             <p className="landing-section-subtitle">
//               Your journey to skill mastery in four simple steps
//             </p>
//           </div>
//           <div className="landing-features-grid">
//             <div className="landing-feature-card image-card animate-on-scroll">
//               <div className="feature-image-container">
//                 <img
//                   src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
//                   alt="Collaborative Learning"
//                   className="feature-image"
//                 />
//                 <div className="image-overlay"></div>
//               </div>
//               <div className="feature-content">
//                 <h3 className="landing-feature-title">Create Your Profile</h3>
//                 <p className="landing-feature-description">
//                   Set up your profile with skills you can teach and skills you want to learn. Let others discover your expertise.
//                 </p>
//               </div>
//             </div>

//             <div className="landing-feature-card image-card animate-on-scroll">
//               <div className="feature-image-container">
//                 <img
//                   src="https://images.unsplash.com/photo-1561346745-5db62ae43861"
//                   alt="Skill Matching"
//                   className="feature-image"
//                 />
//                 <div className="image-overlay"></div>
//               </div>
//               <div className="feature-content">
//                 <h3 className="landing-feature-title">Find Your Match</h3>
//                 <p className="landing-feature-description">
//                   Connect with the right people to teach or learn from using our smart matching system.
//                 </p>
//               </div>
//             </div>

//             <div className="landing-feature-card image-card animate-on-scroll">
//               <div className="feature-image-container">
//                 <img
//                   src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
//                   alt="Knowledge Exchange"
//                   className="feature-image"
//                 />
//                 <div className="image-overlay"></div>
//               </div>
//               <div className="feature-content">
//                 <h3 className="landing-feature-title">Start Learning</h3>
//                 <p className="landing-feature-description">
//                   Schedule sessions, exchange knowledge, and build lasting learning relationships.
//                 </p>
//               </div>
//             </div>

//             <div className="landing-feature-card image-card animate-on-scroll">
//               <div className="feature-image-container">
//                 <img
//                   src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d"
//                   alt="Learning Motivation"
//                   className="feature-image"
//                 />
//                 <div className="image-overlay"></div>
//               </div>
//               <div className="feature-content">
//                 <h3 className="landing-feature-title">Grow Together</h3>
//                 <p className="landing-feature-description">
//                   Track progress, expand your network, and thrive in a community of continuous learning.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section with Icons */}
//       <section className="landing-benefits">
//         <div className="landing-container">
//           <div className="landing-section-header animate-on-scroll">
//             <h2 className="landing-section-title">Why Choose TeachMe?</h2>
//             <p className="landing-section-subtitle">
//               Everything you need to master new skills and share your knowledge
//             </p>
//           </div>
//           <div className="benefits-grid">
//             <div className="benefit-item animate-on-scroll">
//               <div className="benefit-icon-wrapper">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
//                 </svg>
//               </div>
//               <h3>Free to Start</h3>
//               <p>Create your profile and connect with others at no cost</p>
//             </div>

//             <div className="benefit-item animate-on-scroll">
//               <div className="benefit-icon-wrapper">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <circle cx="12" cy="12" r="10"></circle>
//                   <polyline points="12 6 12 12 16 14"></polyline>
//                 </svg>
//               </div>
//               <h3>Flexible Schedule</h3>
//               <p>Learn and teach on your own time, at your own pace</p>
//             </div>

//             <div className="benefit-item animate-on-scroll">
//               <div className="benefit-icon-wrapper">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
//                   <circle cx="9" cy="7" r="4"></circle>
//                   <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
//                   <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
//                 </svg>
//               </div>
//               <h3>Community Support</h3>
//               <p>Join a network of passionate learners and teachers</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section with Wave */}
//       <section id="join" className="landing-cta">
//         <div className="wave-container wave-top">
//           <svg className="wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
//             <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="wave-path"></path>
//           </svg>
//         </div>
//         <div className="landing-cta-content animate-on-scroll">
//           <h2 className="landing-cta-title">
//             Ready to Start Your Journey?
//           </h2>
//           <p className="landing-cta-subtitle">
//             Join thousands of learners and teachers today!
//           </p>
//           <Link to="/register" className="landing-cta-button pulse-animation">
//             Join TeachMe Now
//           </Link>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="landing-footer">
//         <div className="landing-footer-content">
//           <div className="landing-footer-section">
//             <h3 className="landing-footer-logo">TeachMe</h3>
//             <p className="landing-footer-description">
//               Connecting learners and teachers to share skills and grow together.
//             </p>
//           </div>
//           <div className="landing-footer-section">
//             <h4 className="landing-footer-title">Platform</h4>
//             <ul className="landing-footer-links">
//               <li><a href="#">How it Works</a></li>
//               <li><a href="#">Features</a></li>
//               <li><a href="#">Pricing</a></li>
//             </ul>
//           </div>
//           <div className="landing-footer-section">
//             <h4 className="landing-footer-title">Company</h4>
//             <ul className="landing-footer-links">
//               <li><a href="#">About Us</a></li>
//               <li><a href="#">Contact</a></li>
//               <li><a href="#">Careers</a></li>
//             </ul>
//           </div>
//           <div className="landing-footer-section">
//             <h4 className="landing-footer-title">Legal</h4>
//             <ul className="landing-footer-links">
//               <li><a href="#">Privacy Policy</a></li>
//               <li><a href="#">Terms of Service</a></li>
//               <li><a href="#">Cookie Policy</a></li>
//             </ul>
//           </div>
//         </div>
//         <div className="landing-footer-bottom">
//           <p>&copy; 2025 TeachMe. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Landing;



// // src/pages/Landing.jsx
// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useTheme } from '../context/ThemeContext';
// import '../Styles/Landing.css';

// const Landing = () => {
//   const { isDarkMode, toggleTheme } = useTheme();

//   // Scroll animation observer
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate-in');
//           }
//         });
//       },
//       { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
//     );

//     document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="landing-page">

//       {/* ==== NAVBAR ==== */}
//       <nav className="landing-navbar">
//         <div className="landing-nav-container">
//           <div className="landing-logo animate-fade-in">
//             <h1>TeachMe</h1>
//           </div>

//           <ul className="landing-nav-links">
//             <li><a href="#hero" className="landing-nav-link">Home</a></li>
//             <li><a href="#features" className="landing-nav-link">Explore</a></li>
//             <li><a href="#how-it-works" className="landing-nav-link">How It Works</a></li>
//             <li><Link to="/register" className="landing-nav-btn">Get Started</Link></li>
//           </ul>

//           {/* Dark / Light Toggle */}
//           <button
//             onClick={toggleTheme}
//             className="theme-toggle-btn"
//             aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
//           >
//             {isDarkMode ? 'Sun' : 'Moon'}
//           </button>
//         </div>
//       </nav>

//       {/* ==== HERO ==== */}
//       <section id="hero" className="landing-hero">
//         <div className="hero-background-animation">
//           <div className="floating-shape shape-1"></div>
//           <div className="floating-shape shape-2"></div>
//           <div className="floating-shape shape-3"></div>
//         </div>

//         <div className="landing-hero-content animate-slide-up">
//           <h1 className="landing-hero-title">Unlock Your Learning Potential</h1>
//           <p className="landing-hero-subtitle">Connect with experts for personalized skill growth</p>
//           <p className="landing-hero-description">
//             Join a community of learners and teachers. Share skills, learn new ones, and build connections that matter.
//           </p>

//           <div className="landing-hero-buttons">
//             <Link to="/register" className="landing-btn-primary pulse-animation">Get Started</Link>
//             <a href="#features" className="landing-btn-secondary">Learn More</a>
//           </div>

//           <div className="landing-hero-stats">
//             <div className="landing-stat-item animate-count"><span className="landing-stat-number">10K+</span><span className="landing-stat-label">Active Users</span></div>
//             <div className="landing-stat-item animate-count"><span className="landing-stat-number">500+</span><span className="landing-stat-label">Skills Shared</span></div>
//             <div className="landing-stat-item animate-count"><span className="landing-stat-number">95%</span><span className="landing-stat-label">Success Rate</span></div>
//           </div>
//         </div>

//         <div className="wave-container">
//           <svg className="wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
//             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="wave-path"></path>
//           </svg>
//         </div>
//       </section>

//       {/* ==== FEATURES ==== */}
//       <section id="features" className="landing-features">
//         <div className="landing-container">
//           <div className="landing-section-header animate-on-scroll">
//             <h2 className="landing-section-title">How TeachMe Works</h2>
//             <p className="landing-section-subtitle">Your journey to skill mastery in four simple steps</p>
//           </div>

//           <div className="landing-features-grid">
//             {/* Card 1 */}
//             <div className="landing-feature-card image-card animate-on-scroll">
//               <div className="feature-image-container">
//                 <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655" alt="Collaborative Learning" className="feature-image" />
//                 <div className="image-overlay"></div>
//               </div>
//               <div className="feature-content">
//                 <h3 className="landing-feature-title">Create Your Profile</h3>
//                 <p className="landing-feature-description">
//                   Set up your profile with skills you can teach and skills you want to learn. Let others discover your expertise.
//                 </p>
//               </div>
//             </div>

//             {/* Card 2 */}
//             <div className="landing-feature-card image-card animate-on-scroll">
//               <div className="feature-image-container">
//                 <img src="https://images.unsplash.com/photo-1561346745-5db62ae43861" alt="Skill Matching" className="feature-image" />
//                 <div className="image-overlay"></div>
//               </div>
//               <div className="feature-content">
//                 <h3 className="landing-feature-title">Find Your Match</h3>
//                 <p className="landing-feature-description">
//                   Connect with the right people to teach or learn from using our smart matching system.
//                 </p>
//               </div>
//             </div>

//             {/* Card 3 */}
//             <div className="landing-feature-card image-card animate-on-scroll">
//               <div className="feature-image-container">
//                 <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644" alt="Knowledge Exchange" className="feature-image" />
//                 <div className="image-overlay"></div>
//               </div>
//               <div className="feature-content">
//                 <h3 className="landing-feature-title">Start Learning</h3>
//                 <p className="landing-feature-description">
//                   Schedule sessions, exchange knowledge, and build lasting learning relationships.
//                 </p>
//               </div>
//             </div>

//             {/* Card 4 */}
//             <div className="landing-feature-card image-card animate-on-scroll">
//               <div className="feature-image-container">
//                 <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d" alt="Learning Motivation" className="feature-image" />
//                 <div className="image-overlay"></div>
//               </div>
//               <div className="feature-content">
//                 <h3 className="landing-feature-title">Grow Together</h3>
//                 <p className="landing-feature-description">
//                   Track progress, expand your network, and thrive in a community of continuous learning.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==== BENEFITS ==== */}
//       <section className="landing-benefits">
//         <div className="landing-container">
//           <div className="landing-section-header animate-on-scroll">
//             <h2 className="landing-section-title">Why Choose TeachMe?</h2>
//             <p className="landing-section-subtitle">Everything you need to master new skills and share your knowledge</p>
//           </div>

//           <div className="benefits-grid">
//             <div className="benefit-item animate-on-scroll">
//               <div className="benefit-icon-wrapper">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
//                 </svg>
//               </div>
//               <h3>Free to Start</h3>
//               <p>Create your profile and connect with others at no cost</p>
//             </div>

//             <div className="benefit-item animate-on-scroll">
//               <div className="benefit-icon-wrapper">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <circle cx="12" cy="12" r="10"></circle>
//                   <polyline points="12 6 12 12 16 14"></polyline>
//                 </svg>
//               </div>
//               <h3>Flexible Schedule</h3>
//               <p>Learn and teach on your own time, at your own pace</p>
//             </div>

//             <div className="benefit-item animate-on-scroll">
//               <div className="benefit-icon-wrapper">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
//                   <circle cx="9" cy="7" r="4"></circle>
//                   <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
//                   <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
//                 </svg>
//               </div>
//               <h3>Community Support</h3>
//               <p>Join a network of passionate learners and teachers</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==== CTA ==== */}
//       <section id="join" className="landing-cta">
//         <div className="wave-container wave-top">
//           <svg className="wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
//             <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34,168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="wave-path"></path>
//           </svg>
//         </div>

//         <div className="landing-cta-content animate-on-scroll">
//           <h2 className="landing-cta-title">Ready to Start Your Journey?</h2>
//           <p className="landing-cta-subtitle">Join thousands of learners and teachers today!</p>
//           <Link to="/register" className="landing-cta-button pulse-animation">Join TeachMe Now</Link>
//         </div>
//       </section>

//       {/* ==== FOOTER ==== */}
//       <footer className="landing-footer">
//         <div className="landing-footer-content">
//           <div className="landing-footer-section">
//             <h3 className="landing-footer-logo">TeachMe</h3>
//             <p className="landing-footer-description">Connecting learners and teachers to share skills and grow together.</p>
//           </div>

//           <div className="landing-footer-section">
//             <h4 className="landing-footer-title">Platform</h4>
//             <ul className="landing-footer-links">
//               <li><a href="#">How it Works</a></li>
//               <li><a href="#">Features</a></li>
//               <li><a href="#">Pricing</a></li>
//             </ul>
//           </div>

//           <div className="landing-footer-section">
//             <h4 className="landing-footer-title">Company</h4>
//             <ul className="landing-footer-links">
//               <li><a href="#">About Us</a></li>
//               <li><a href="#">Contact</a></li>
//               <li><a href="#">Careers</a></li>
//             </ul>
//           </div>

//           <div className="landing-footer-section">
//             <h4 className="landing-footer-title">Legal</h4>
//             <ul className="landing-footer-links">
//               <li><a href="#">Privacy Policy</a></li>
//               <li><a href="#">Terms of Service</a></li>
//               <li><a href="#">Cookie Policy</a></li>
//             </ul>
//           </div>
//         </div>

//         <div className="landing-footer-bottom">
//           <p>© 2025 TeachMe. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Landing;



// src/pages/Landing.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import '../Styles/Landing.css';

const Landing = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="landing-page">

      {/* ==== NAVBAR ==== */}
      <nav className="landing-navbar">
        <div className="landing-nav-container">
          <div className="landing-logo animate-fade-in">
            <h1>TeachMe</h1>
          </div>

          <ul className="landing-nav-links">
            <li><a href="#hero" className="landing-nav-link">Home</a></li>
            <li><a href="#features" className="landing-nav-link">Explore</a></li>
            <li><a href="#how-it-works" className="landing-nav-link">How It Works</a></li>
            <li><Link to="/register" className="landing-nav-btn">Get Started</Link></li>
          </ul>

          {/* === THEME TOGGLE BUTTON === */}
          {/* <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span className="sun-icon">Sun</span>
            <span className="moon-icon">Moon</span>
            <div className="toggle-slider"></div>
          </button> */}

          {/* === THEME TOGGLE – SVG ICONS + SLIDING SWITCH === */}

<button
  onClick={toggleTheme}
  className="theme-toggle-btn"
  aria-label={isDarkMode ? 'Light mode' : 'Dark mode'}
>
  <svg className="sun-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="5"></circle>
    <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42m12.72-12.72l1.42-1.42"></path>
  </svg>
  <svg className="moon-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
  <div className="toggle-slider"></div>
</button>
        </div>
      </nav>

      {/* ==== HERO ==== */}
      <section id="hero" className="landing-hero">
        <div className="hero-background-animation">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>

        <div className="landing-hero-content animate-slide-up">
          <h1 className="landing-hero-title">Unlock Your Learning Potential</h1>
          <p className="landing-hero-subtitle">Connect with experts for personalized skill growth</p>
          <p className="landing-hero-description">
            Join a community of learners and teachers. Share skills, learn new ones, and build connections that matter.
          </p>

          <div className="landing-hero-buttons">
            <Link to="/register" className="landing-btn-primary pulse-animation">Get Started</Link>
            <a href="#features" className="landing-btn-secondary">Learn More</a>
          </div>

          <div className="landing-hero-stats">
            <div className="landing-stat-item animate-count"><span className="landing-stat-number">10K+</span><span className="landing-stat-label">Active Users</span></div>
            <div className="landing-stat-item animate-count"><span className="landing-stat-number">500+</span><span className="landing-stat-label">Skills Shared</span></div>
            <div className="landing-stat-item animate-count"><span className="landing-stat-number">95%</span><span className="landing-stat-label">Success Rate</span></div>
          </div>
        </div>

        <div className="wave-container">
          <svg className="wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="wave-path"></path>
          </svg>
        </div>
      </section>

      {/* ==== FEATURES ==== */}
      <section id="features" className="landing-features">
        <div className="landing-container">
          <div className="landing-section-header animate-on-scroll">
            <h2 className="landing-section-title">How TeachMe Works</h2>
            <p className="landing-section-subtitle">Your journey to skill mastery in four simple steps</p>
          </div>

          <div className="landing-features-grid">
            <div className="landing-feature-card image-card animate-on-scroll">
              <div className="feature-image-container">
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655" alt="Collaborative Learning" className="feature-image" />
                <div className="image-overlay"></div>
              </div>
              <div className="feature-content">
                <h3 className="landing-feature-title">Create Your Profile</h3>
                <p className="landing-feature-description">
                  Set up your profile with skills you can teach and skills you want to learn. Let others discover your expertise.
                </p>
              </div>
            </div>

            <div className="landing-feature-card image-card animate-on-scroll">
              <div className="feature-image-container">
                <img src="https://images.unsplash.com/photo-1561346745-5db62ae43861" alt="Skill Matching" className="feature-image" />
                <div className="image-overlay"></div>
              </div>
              <div className="feature-content">
                <h3 className="landing-feature-title">Find Your Match</h3>
                <p className="landing-feature-description">
                  Connect with the right people to teach or learn from using our smart matching system.
                </p>
              </div>
            </div>

            <div className="landing-feature-card image-card animate-on-scroll">
              <div className="feature-image-container">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644" alt="Knowledge Exchange" className="feature-image" />
                <div className="image-overlay"></div>
              </div>
              <div className="feature-content">
                <h3 className="landing-feature-title">Start Learning</h3>
                <p className="landing-feature-description">
                  Schedule sessions, exchange knowledge, and build lasting learning relationships.
                </p>
              </div>
            </div>

            <div className="landing-feature-card image-card animate-on-scroll">
              <div className="feature-image-container">
                <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d" alt="Learning Motivation" className="feature-image" />
                <div className="image-overlay"></div>
              </div>
              <div className="feature-content">
                <h3 className="landing-feature-title">Grow Together</h3>
                <p className="landing-feature-description">
                  Track progress, expand your network, and thrive in a community of continuous learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==== BENEFITS ==== */}
      <section className="landing-benefits">
        <div className="landing-container">
          <div className="landing-section-header animate-on-scroll">
            <h2 className="landing-section-title">Why Choose TeachMe?</h2>
            <p className="landing-section-subtitle">Everything you need to master new skills and share your knowledge</p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-item animate-on-scroll">
              <div className="benefit-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3>Free to Start</h3>
              <p>Create your profile and connect with others at no cost</p>
            </div>

            <div className="benefit-item animate-on-scroll">
              <div className="benefit-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3>Flexible Schedule</h3>
              <p>Learn and teach on your own time, at your own pace</p>
            </div>

            <div className="benefit-item animate-on-scroll">
              <div className="benefit-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Community Support</h3>
              <p>Join a network of passionate learners and teachers</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==== CTA ==== */}
      <section id="join" className="landing-cta">
        <div className="wave-container wave-top">
          <svg className="wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34,168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="wave-path"></path>
          </svg>
        </div>

        <div className="landing-cta-content animate-on-scroll">
          <h2 className="landing-cta-title">Ready to Start Your Journey?</h2>
          <p className="landing-cta-subtitle">Join thousands of learners and teachers today!</p>
          <Link to="/register" className="landing-cta-button pulse-animation">Join TeachMe Now</Link>
        </div>
      </section>

      {/* ==== FOOTER ==== */}
      <footer className="landing-footer">
        <div className="landing-footer-content">
          <div className="landing-footer-section">
            <h3 className="landing-footer-logo">TeachMe</h3>
            <p className="landing-footer-description">Connecting learners and teachers to share skills and grow together.</p>
          </div>

          <div className="landing-footer-section">
            <h4 className="landing-footer-title">Platform</h4>
            <ul className="landing-footer-links">
              <li><a href="#">How it Works</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>

          <div className="landing-footer-section">
            <h4 className="landing-footer-title">Company</h4>
            <ul className="landing-footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          <div className="landing-footer-section">
            <h4 className="landing-footer-title">Legal</h4>
            <ul className="landing-footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="landing-footer-bottom">
          <p>&copy; 2025 TeachMe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
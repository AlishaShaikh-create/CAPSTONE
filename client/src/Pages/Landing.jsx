
// import React from 'react';
// import '../Styles/Landing.css';
// import { Link } from 'react-router-dom';

// const Landing = () => {
//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar-brand">
//           <h1>TeachMe</h1>
//         </div>
//         <ul className="navbar-links">
//           <li><a href="#hero" className="nav-link">Home</a></li>
//           <li><a href="#features" className="nav-link">How It Works</a></li>
//           <li><a href="#join" className="nav-link">Join Now</a></li>
//           <li><Link to="/register" className="nav-link cta">Get Started</Link></li>
//         </ul>
//       </nav>

//       <div className="landing-page">
//         <section id="hero" className="landing-hero">
//           <div className="hero-content">
//             <h1 className="hero-title">Learn. Teach. Connect.</h1>
//             <p className="hero-subtitle">The platform where skills meet opportunity</p>
//             <p className="hero-description">
//               Connect with passionate learners and expert teachers in your community. 
//               Share your skills, learn new ones, and build meaningful connections through knowledge exchange.
//             </p>
//             <Link to="/register" data-testid="get-started-btn" className="btn-primary">
//               Get Started Today
//             </Link>
//           </div>
//         </section>

//         <section id="features" className="features-section">
//           <div className="features-container">
//             <h2 className="features-title">How TeachMe Works</h2>
//             <div className="features-grid">
//               <div className="feature-card">
//                 <div className="feature-icon">
//                   <img
//                     src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
//                     alt="Collaborative Learning"
//                     style={{
//                       width: '100%',
//                       height: '100%',
//                       objectFit: 'cover',
//                       borderRadius: '15px',
//                     }}
//                   />
//                 </div>
//                 <h3 className="feature-title">Create Your Profile</h3>
//                 <p className="feature-description">
//                   Set up your profile with skills you can teach and skills you want to learn. 
//                   Let others discover your expertise and interests.
//                 </p>
//               </div>

//               <div className="feature-card">
//                 <div className="feature-icon">
//                   <img
//                     src="https://images.unsplash.com/photo-1561346745-5db62ae43861"
//                     alt="Skill Matching"
//                     style={{
//                       width: '100%',
//                       height: '100%',
//                       objectFit: 'cover',
//                       borderRadius: '15px',
//                     }}
//                   />
//                 </div>
//                 <h3 className="feature-title">Find Your Match</h3>
//                 <p className="feature-description">
//                   Search for people who can teach you new skills or who want to learn from you. 
//                   Our smart matching connects you with the right people.
//                 </p>
//               </div>

//               <div className="feature-card">
//                 <div className="feature-icon">
//                   <img
//                     src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
//                     alt="Knowledge Exchange"
//                     style={{
//                       width: '100%',
//                       height: '100%',
//                       objectFit: 'cover',
//                       borderRadius: '15px',
//                     }}
//                   />
//                 </div>
//                 <h3 className="feature-title">Start Learning</h3>
//                 <p className="feature-description">
//                   Connect and chat with your matches. Schedule sessions, exchange knowledge, 
//                   and build lasting learning relationships.
//                 </p>
//               </div>

//               <div className="feature-card">
//                 <div className="feature-icon">
//                   <img
//                     src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d"
//                     alt="Learning Motivation"
//                     style={{
//                       width: '100%',
//                       height: '100%',
//                       objectFit: 'cover',
//                       borderRadius: '15px',
//                     }}
//                   />
//                 </div>
//                 <h3 className="feature-title">Grow Together</h3>
//                 <p className="feature-description">
//                   Track your learning progress, expand your network, and become part of 
//                   a community that values continuous learning and teaching.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section id="join" className="landing-hero" style={{ minHeight: '60vh' }}>
//           <div className="hero-content">
//             <h2 className="hero-title" style={{ fontSize: '3rem' }}>
//               Ready to Start Your Learning Journey?
//             </h2>
//             <p className="hero-subtitle">
//               Join thousands of learners and teachers already sharing knowledge
//             </p>
//             <Link to="/register" data-testid="join-now-btn" className="btn-primary">
//               Join TeachMe Now
//             </Link>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default Landing;





import React from 'react';
import '../Styles/Landing.css';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <h1>TeachMe</h1>
        </div>
        <ul className="navbar-links">
          <li><a href="#hero" className="nav-link">Home</a></li>
          <li><a href="#features" className="nav-link">Explore</a></li>
          <li><a href="#join" className="nav-link">Teachers</a></li>
          <li><Link to="/register" className="nav-link cta">Get Started</Link></li>
        </ul>
      </nav>

      <div className="landing-page">
        <section id="hero" className="landing-hero">
          <div className="hero-content">
            <h1 className="hero-title">Unlock Your Learning Potential</h1>
            <p className="hero-subtitle">Connect with experts for personalized skill growth</p>
            <p className="hero-description">
              Join a community of learners and teachers. Share skills, learn new ones, and build connections that matter.
            </p>
            <div className="hero-buttons">
              <Link to="/register" className="btn-primary">Get Started</Link>
             
            </div>
          </div>
        </section>

        <section id="features" className="features-section">
          <div className="features-container">
            <h2 className="features-title">How TeachMe Works</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <img
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
                    alt="Collaborative Learning"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }}
                  />
                </div>
                <h3 className="feature-title">Create Your Profile</h3>
                <p className="feature-description">
                  Set up your profile with skills you can teach and skills you want to learn. Let others discover your expertise.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <img
                    src="https://images.unsplash.com/photo-1561346745-5db62ae43861"
                    alt="Skill Matching"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }}
                  />
                </div>
                <h3 className="feature-title">Find Your Match</h3>
                <p className="feature-description">
                  Connect with the right people to teach or learn from using our smart matching system.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
                    alt="Knowledge Exchange"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }}
                  />
                </div>
                <h3 className="feature-title">Start Learning</h3>
                <p className="feature-description">
                  Schedule sessions, exchange knowledge, and build lasting learning relationships.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <img
                    src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d"
                    alt="Learning Motivation"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }}
                  />
                </div>
                <h3 className="feature-title">Grow Together</h3>
                <p className="feature-description">
                  Track progress, expand your network, and thrive in a community of continuous learning.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="join" className="landing-hero join-section">
          <div className="hero-content">
            <h2 className="hero-title">Ready to Start Your Journey?</h2>
            <p className="hero-subtitle">Join thousands of learners and teachers today!</p>
            <Link to="/register" className="btn-primary">Join TeachMe Now</Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Landing;
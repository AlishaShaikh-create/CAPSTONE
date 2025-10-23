
import React from 'react'
import '../Styles/Landing.css'
import { Link } from 'react-router-dom'
const Landing = () => {

  return (
 
    <>
    <div>
      <div className="landing-page">
      <section className="landing-hero">
        <div className="hero-content">
          <h1 className="hero-title">Learn. Teach. Connect.</h1>
          <p className="hero-subtitle">The platform where skills meet opportunity</p>
          <p className="hero-description">
            Connect with passionate learners and expert teachers in your community. 
            Share your skills, learn new ones, and build meaningful connections through knowledge exchange.
          </p>
       
          {/* Register button */}

          {/* <button 
            data-testid="get-started-btn"
            className="btn-primary" 
          >
            Get Started Today
          </button>  */}


          <Link to="register"  data-testid="get-started-btn"
            className="btn-primary" > Get Started Today</Link>

        </div>
      </section>

  
      <section className="features-section">
        <div className="features-container">
          <h2 className="features-title">How TeachMe works</h2>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655" 
                  alt="Collaborative Learning"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '15px'
                  }}
                />
              </div>
              <h3 className="feature-title">Create Your Profile</h3>
              <p className="feature-description">
                Set up your profile with skills you can teach and skills you want to learn. 
                Let others discover your expertise and interests.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <img 
                  src="https://images.unsplash.com/photo-1561346745-5db62ae43861" 
                  alt="Skill Matching"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '15px'
                  }}
                />
              </div>
              <h3 className="feature-title">Find Your Match</h3>
              <p className="feature-description">
                Search for people who can teach you new skills or who want to learn from you. 
                Our smart matching connects you with the right people.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644" 
                  alt="Knowledge Exchange"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '15px'
                  }}
                />
              </div>
              <h3 className="feature-title">Start Learning</h3>
              <p className="feature-description">
                Connect and chat with your matches. Schedule sessions, exchange knowledge, 
                and build lasting learning relationships.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <img 
                  src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d" 
                  alt="Learning Motivation"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '15px'
                  }}
                />
              </div>
              <h3 className="feature-title">Grow Together</h3>
              <p className="feature-description">
                Track your learning progress, expand your network, and become part of 
                a community that values continuous learning and teaching.
              </p>
            </div>
          </div>
        </div>
      </section>

     
      <section className="landing-hero" style={{ minHeight: '60vh' }}>
        <div className="hero-content">
          <h2 className="hero-title" style={{ fontSize: '3rem' }}>
            Ready to Start Your Learning Journey?
          </h2>
          <p className="hero-subtitle">
            Join thousands of learners and teachers already sharing knowledge
          </p>
          {/* <button 
            data-testid="join-now-btn"
            className="btn-primary" 
            
          >
            Join SkillShare Now
          </button> */}
    
            <Link to="register"   data-testid="get-started-btn"
            className="btn-primary" > TechMe Now</Link>

        </div>
      </section>
    </div>
    </div>
    </>
  )
}

export default Landing


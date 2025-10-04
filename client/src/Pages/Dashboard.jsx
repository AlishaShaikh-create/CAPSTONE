
// // import React from 'react';
// // import { Link, NavLink } from 'react-router-dom';
// // import '../Styles/Dashboard.css';

// // const Dashboard = () => {

// //   const logout = () => {
// //     console.log("User logged out");
// //   };

// //   return (
// //     <div className="dashboard-container">
// //       {/* Header */}
// //       <header className="dashboard-header">
// //         <div className="header-content">
// //           <div className="logo">SkillShare</div>
// //           <nav className="nav-buttons">
            
// //             <NavLink to="/search" className="nav-btn" data-testid="search-nav">
// //               Find Skills
// //             </NavLink>
            
// //             {/* <button 
// //               className="logout-btn" 
// //               onClick={logout}
// //               data-testid="logout-btn"
// //             >
// //               Logout
// //             </button> */}
// //           </nav>
// //         </div>
// //       </header>

// //       {/* Content */}
// //       <main className="dashboard-content">
// //         {/* Welcome Message */}
// //         <div className="dashboard-welcome" data-testid="dashboard-welcome">
// //           <h1 className="welcome-title">
// //             Welcome back! 👋
// //           </h1>
// //           <p className="welcome-subtitle">
// //             Ready to learn something new or share your knowledge with others?
// //           </p>
// //         </div>

// //         {/* Quick Actions */}
// //         <div className="quick-actions">
// //           <Link to="/search" className="action-card" data-testid="find-skills-card">
// //             <div className="action-icon">🔍</div>
// //             <h3 className="action-title">Find Skills</h3>
// //             <p className="action-description">
// //               Search for people who can teach you new skills
// //             </p>
// //           </Link>

// //           <Link to="/profile" className="action-card" data-testid="update-profile-card">
// //             <div className="action-icon">👤</div>
// //             <h3 className="action-title">Update Profile</h3>
// //             <p className="action-description">
// //               Manage your skills and profile information
// //             </p>
// //           </Link>

// //           <div className="action-card" data-testid="my-connections-card">
// //             <div className="action-icon">🤝</div>
// //             <h3 className="action-title">My Connections</h3>
// //             <p className="action-description">
// //               View and chat with your learning partners
// //             </p>
// //           </div>

// //           <div className="action-card" data-testid="skill-stats-card">
// //             <div className="action-icon">📊</div>
// //             <h3 className="action-title">My Stats</h3>
// //             <p className="action-description">
// //               Track your learning and teaching progress
// //             </p>
// //           </div>
// //         </div>

// //         {/* User Stats */}
// //         <div style={{ marginTop: '3rem' }}>
// //           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
// //             <div style={cardStyle}>
// //               <h4 style={numberStyle}>{user?.skills_to_teach?.length || 0}</h4>
// //               <p style={labelStyle}>Skills I Can Teach</p>
// //             </div>
            
// //             <div style={cardStyle}>
// //               <h4 style={numberStyle}>{user?.skills_to_learn?.length || 0}</h4>
// //               <p style={labelStyle}>Skills I Want to Learn</p>
// //             </div>
            
// //             <div style={cardStyle}>
// //               <h4 style={numberStyle}>0</h4>
// //               <p style={labelStyle}>Active Connections</p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Recent Activity */}
// //         <div style={activityBoxStyle}>
// //           <h3 style={activityTitleStyle}>Recent Activity</h3>
// //           <div style={{ textAlign: 'center', color: '#64748b', padding: '2rem' }}>
// //             <p>No recent activity yet. Start by updating your profile or searching for skills!</p>
// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // };

// // // Inline styles
// // const cardStyle = {
// //   background: 'white',
// //   padding: '2rem',
// //   borderRadius: '15px',
// //   textAlign: 'center',
// //   boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)'
// // };

// // const numberStyle = {
// //   color: '#667eea',
// //   fontSize: '2rem',
// //   fontWeight: '700',
// //   marginBottom: '0.5rem'
// // };

// // const labelStyle = {
// //   color: '#64748b',
// //   fontWeight: '600'
// // };

// // const activityBoxStyle = {
// //   marginTop: '3rem',
// //   background: 'white',
// //   borderRadius: '20px',
// //   padding: '2rem',
// //   boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
// // };

// // const activityTitleStyle = {
// //   fontSize: '1.5rem',
// //   fontWeight: '700',
// //   color: '#1e293b',
// //   marginBottom: '1.5rem'
// // };

// // export default Dashboard;

// import React from 'react';

// const Dashboard = () => {
//   const user = {
//     name: "John Doe",
//     skills_to_teach: ["React", "Node.js"],
//     skills_to_learn: ["Python", "Data Science"]
//   };

//   const logout = () => {
//     console.log("User logged out");
//   };

//   const styles = {
//     page: {
//       fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
//       background: '#f1f5f9',
//       minHeight: '100vh',
//       padding: '2rem'
//     },
//     header: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       marginBottom: '2rem',
//       gap: '1rem'
//     },
//     logo: {
//       fontSize: '1.35rem',
//       fontWeight: 800,
//       color: '#334155'
//     },
//     nav: {
//       display: 'flex',
//       gap: '0.75rem',
//       alignItems: 'center'
//     },
//     navBtn: {
//       padding: '0.5rem 0.9rem',
//       borderRadius: '999px',
//       background: 'transparent',
//       border: '1px solid transparent',
//       cursor: 'pointer',
//       fontWeight: 600,
//       color: '#334155',
//       textDecoration: 'none'
//     },
//     primaryBtn: {
//       padding: '0.55rem 0.95rem',
//       borderRadius: '10px',
//       background: '#4f46e5',
//       color: '#fff',
//       border: 'none',
//       cursor: 'pointer',
//       fontWeight: 700
//     },
//     container: {
//       maxWidth: 1100,
//       margin: '0 auto'
//     },
//     cardGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
//       gap: '1.25rem',
//       marginTop: '1.25rem'
//     },
//     actionCard: {
//       background: 'linear-gradient(180deg, #ffffff, #fbfdff)',
//       padding: '1.25rem',
//       borderRadius: '14px',
//       boxShadow: '0 8px 30px rgba(2,6,23,0.06)',
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '0.45rem',
//       textDecoration: 'none',
//       color: '#0f172a'
//     },
//     actionIcon: {
//       fontSize: '1.45rem'
//     },
//     welcomeBox: {
//       background: 'linear-gradient(90deg,#fff,#fcfdff)',
//       padding: '1.6rem',
//       borderRadius: '14px',
//       boxShadow: '0 10px 40px rgba(2,6,23,0.05)',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       gap: '1rem'
//     },
//     welcomeText: {
//       lineHeight: 1.1
//     },
//     title: {
//       margin: 0,
//       fontSize: '1.5rem',
//       color: '#0f172a',
//       fontWeight: 800
//     },
//     subtitle: {
//       margin: 0,
//       marginTop: '0.35rem',
//       color: '#64748b',
//       fontWeight: 600
//     },
//     statsGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//       gap: '1rem',
//       marginTop: '1.6rem'
//     },
//     statCard: {
//       background: '#fff',
//       padding: '1.2rem',
//       borderRadius: '12px',
//       textAlign: 'center',
//       boxShadow: '0 6px 24px rgba(2,6,23,0.06)'
//     },
//     statNumber: {
//       fontSize: '1.65rem',
//       color: '#4f46e5',
//       fontWeight: 800,
//       margin: 0
//     },
//     statLabel: {
//       marginTop: '0.45rem',
//       color: '#64748b',
//       fontWeight: 700
//     },
//     recentBox: {
//       marginTop: '1.75rem',
//       background: '#fff',
//       padding: '1.25rem',
//       borderRadius: '14px',
//       boxShadow: '0 10px 30px rgba(2,6,23,0.05)'
//     },
//     footerRow: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       marginTop: '1.25rem',
//       gap: '1rem'
//     }
//   };

//   return (
//     <div style={styles.page}>
//       <div style={styles.container}>
//         <header style={styles.header}>
//           <div style={styles.logo}>SkillShare</div>
//           <div style={styles.nav}>
//             <a href="/search" style={styles.navBtn}>Find Skills</a>
//             <a href="/profile" style={styles.navBtn}>My Profile</a>
//             <button onClick={logout} style={styles.primaryBtn}>Logout</button>
//           </div>
//         </header>

//         <section style={styles.welcomeBox}>
//           <div style={styles.welcomeText}>
//             <h1 style={styles.title}>Welcome back, {user?.name || 'Learner'}! 👋</h1>
//             <p style={styles.subtitle}>Ready to learn something new or share your knowledge with others?</p>
//           </div>
//           <div>
//             <button style={{ ...styles.primaryBtn, padding: '0.6rem 1rem' }}>Find a Tutor</button>
//           </div>
//         </section>

//         <div style={styles.cardGrid}>
//           <a href="/search" style={styles.actionCard}>
//             <div style={styles.actionIcon}>🔍</div>
//             <div>
//               <h3 style={{ margin: '0.35rem 0 0', fontSize: '1rem' }}>Find Skills</h3>
//               <p style={{ margin: 0, marginTop: '0.4rem', color: '#475569', fontWeight: 600 }}>Search for people who can teach you new skills</p>
//             </div>
//           </a>

//           <a href="/profile" style={styles.actionCard}>
//             <div style={styles.actionIcon}>👤</div>
//             <div>
//               <h3 style={{ margin: '0.35rem 0 0', fontSize: '1rem' }}>Update Profile</h3>
//               <p style={{ margin: 0, marginTop: '0.4rem', color: '#475569', fontWeight: 600 }}>Manage your skills and profile information</p>
//             </div>
//           </a>

//           <div style={styles.actionCard}>
//             <div style={styles.actionIcon}>🤝</div>
//             <div>
//               <h3 style={{ margin: '0.35rem 0 0', fontSize: '1rem' }}>My Connections</h3>
//               <p style={{ margin: 0, marginTop: '0.4rem', color: '#475569', fontWeight: 600 }}>View and chat with your learning partners</p>
//             </div>
//           </div>

//           <div style={styles.actionCard}>
//             <div style={styles.actionIcon}>📊</div>
//             <div>
//               <h3 style={{ margin: '0.35rem 0 0', fontSize: '1rem' }}>My Stats</h3>
//               <p style={{ margin: 0, marginTop: '0.4rem', color: '#475569', fontWeight: 600 }}>Track your learning and teaching progress</p>
//             </div>
//           </div>
//         </div>

//         <div style={styles.statsGrid}>
//           <div style={styles.statCard}>
//             <p style={styles.statNumber}>{user?.skills_to_teach?.length || 0}</p>
//             <p style={styles.statLabel}>Skills I Can Teach</p>
//           </div>

//           <div style={styles.statCard}>
//             <p style={styles.statNumber}>{user?.skills_to_learn?.length || 0}</p>
//             <p style={styles.statLabel}>Skills I Want to Learn</p>
//           </div>

//           <div style={styles.statCard}>
//             <p style={styles.statNumber}>0</p>
//             <p style={styles.statLabel}>Active Connections</p>
//           </div>
//         </div>

//         <div style={styles.recentBox}>
//           <h3 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 800, color: '#0f172a' }}>Recent Activity</h3>
//           <div style={{ padding: '1rem 0', color: '#64748b', textAlign: 'center' }}>
//             <p style={{ margin: 0 }}>No recent activity yet. Start by updating your profile or searching for skills!</p>
//           </div>

//           <div style={styles.footerRow}>
//             <div style={{ color: '#475569', fontWeight: 700 }}>Suggestions</div>
//             <div style={{ display: 'flex', gap: '0.6rem' }}>
//               <button style={{ ...styles.navBtn, border: '1px solid #e2e8f0' }}>Refresh</button>
//               <button style={{ ...styles.primaryBtn, padding: '0.45rem 0.8rem' }}>Explore</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


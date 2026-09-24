import React from "react";
import StatCard from "./StatCard";

export default function Profile() {
  const semesters = [
    { term: "Fall 2023", credits: 16, gpa: "3.78", status: "Dean's Honor Roll" },
    { term: "Spring 2024", credits: 17, gpa: "3.82", status: "Dean's Honor Roll" },
    { term: "Fall 2024", credits: 18, gpa: "3.88", status: "President's List" },
    { term: "Spring 2025", credits: 16, gpa: "3.85", status: "Dean's Honor Roll" },
    { term: "Fall 2025", credits: 17, gpa: "3.89", status: "President's List" },
  ];

  const badges = [
    { title: "Algorithmic Master", desc: "Top 5% score in Data Structures exam", icon: "🏆" },
    { title: "100-Hour Focus Club", desc: "Logged over 100 deep Pomodoro sessions", icon: "⭐" },
    { title: "Database Architect", desc: "Optimized indexing for 1M+ row test sets", icon: "💾" },
    { title: "Peer Mentor", desc: "Helped 12 junior peers in programming labs", icon: "🤝" },
  ];

  const skills = [
    "Data Structures & Algorithms",
    "Database Architecture & SQL",
    "React & Modern JavaScript",
    "Computer Networking & TCP/IP",
    "Linux Systems & Shell Scripting",
    "Discrete Mathematics & Logic",
    "Git & Collaborative Version Control",
  ];

  return (
    <div className="profile-page">
      {/* Student Banner */}
      <div className="profile-banner">
        <div className="profile-avatar-large">AM</div>
        <div className="profile-header-info">
          <h2>Alex Morgan</h2>
          <p>B.S. in Computer Science • Department of Computer Engineering</p>
          <p style={{ fontSize: "0.85rem", color: "#cbd5e1" }}>Student ID: #STU-2023-8841 • Class of 2026</p>
          <div className="badge-row">
            <span className="profile-badge">🎓 Senior Standing</span>
            <span className="profile-badge">🌟 Top 5% Percentile</span>
            <span className="profile-badge">🏛️ Faculty of Computing</span>
          </div>
        </div>
      </div>

      {/* Profile KPI Cards */}
      <div className="stats-grid">
        <StatCard
          title="Degree Progress"
          value="84 / 120"
          change="70%"
          changeType="positive"
          subtitle="total credits satisfied"
          colorClass="stat-icon-blue"
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
          }
        />

        <StatCard
          title="Cumulative GPA"
          value="3.84"
          change="Summa Cum Laude"
          changeType="positive"
          subtitle="institutional standing"
          colorClass="stat-icon-emerald"
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="8" r="7" />
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
            </svg>
          }
        />

        <StatCard
          title="Major GPA"
          value="3.91"
          change="+0.07"
          changeType="positive"
          subtitle="core CS coursework"
          colorClass="stat-icon-purple"
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          }
        />

        <StatCard
          title="Dean's List Honors"
          value="5 Terms"
          change="Consecutive"
          changeType="positive"
          subtitle="academic commendation"
          colorClass="stat-icon-amber"
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          }
        />
      </div>

      <div className="dashboard-grid-2">
        {/* Left Column: Academic Transcript Summary */}
        <div className="section-card">
          <div className="section-card-header">
            <div>
              <h3 className="section-card-title">Academic Semester History</h3>
              <span className="section-card-subtitle">Verified institutional grading records</span>
            </div>
          </div>

          <div className="data-table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Semester Term</th>
                  <th>Credits Earned</th>
                  <th>Term GPA</th>
                  <th>Honor / Distinction</th>
                </tr>
              </thead>
              <tbody>
                {semesters.map((s, idx) => (
                  <tr key={idx}>
                    <td><strong>{s.term}</strong></td>
                    <td>{s.credits} Credits</td>
                    <td><span style={{ fontWeight: 700, color: "var(--primary)" }}>{s.gpa}</span></td>
                    <td>
                      <span className="priority-tag low">{s.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: Badges & Competencies */}
        <div>
          <div className="section-card">
            <div className="section-card-header">
              <div>
                <h3 className="section-card-title">Academic Distinctions</h3>
                <span className="section-card-subtitle">Earned merit certifications</span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {badges.map((b, idx) => (
                <div key={idx} className="activity-item">
                  <div style={{ fontSize: "1.4rem", marginRight: "0.25rem" }}>{b.icon}</div>
                  <div className="activity-content">
                    <div className="activity-title">{b.title}</div>
                    <div className="activity-meta">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="section-card">
            <div className="section-card-header">
              <div>
                <h3 className="section-card-title">Technical Competencies</h3>
                <span className="section-card-subtitle">Verified subject proficiencies</span>
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    border: "1px solid var(--border-color)",
                    padding: "0.35rem 0.65rem",
                    borderRadius: "6px",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    color: "var(--text-primary)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import StatCard from "./StatCard";
import ActivityCard from "./ActivityCard";

export default function Home() {
  const recentActivities = [
    {
      id: 1,
      title: "Submitted Lab 4: B-Tree Indexing",
      course: "CS 340: Database Management",
      timestamp: "2 hours ago",
      icon: "📁",
      iconBg: "#eff6ff",
    },
    {
      id: 2,
      title: "Completed Chapter 7 Practice Quiz (Score: 95%)",
      course: "CS 301: Data Structures",
      timestamp: "5 hours ago",
      icon: "✅",
      iconBg: "#ecfdf5",
    },
    {
      id: 3,
      title: "Logged 2.5 hours Pomodoro focus session",
      course: "MATH 220: Linear Algebra",
      timestamp: "Yesterday at 4:30 PM",
      icon: "⏱️",
      iconBg: "#fef3c7",
    },
    {
      id: 4,
      title: "Downloaded Packet Sniffer starter code",
      course: "CS 315: Computer Networks",
      timestamp: "Yesterday at 11:15 AM",
      icon: "🌐",
      iconBg: "#f5f3ff",
    },
  ];

  const todaySchedule = [
    {
      time: "09:00 - 10:30 AM",
      course: "CS 301: Advanced Data Structures",
      location: "Hall B3 • Prof. Dr. Henderson",
      type: "Lecture & Algorithm Analysis",
      color: "blue",
    },
    {
      time: "01:30 - 03:00 PM",
      course: "CS 340: Database Management Systems",
      location: "Lab Room 402 • Prof. Vance",
      type: "Hands-on Query Optimization Lab",
      color: "purple",
    },
    {
      time: "04:30 - 06:00 PM",
      course: "MATH 220: Linear Algebra Study Group",
      location: "Library Discussion Pod 6",
      type: "Matrix Decomposition Review",
      color: "emerald",
    },
  ];

  return (
    <div className="home-page">
      <h1 className="sr-only bg">this website is with lazyloading</h1>
      <div className="page-header">
        <div>
          <h2 className="page-title">Welcome back, Alex! 👋</h2>
          <p className="page-subtitle">
            Here is your academic overview for Fall Semester 2026. You are on track to meet your weekly study goals.
          </p>
        </div>
        <div className="page-actions">
          <Link to="/dashboard" className="btn btn-secondary">
            Go to Dashboard
          </Link>
          <Link to="/analytics" className="btn btn-primary">
            View Analytics
          </Link>
        </div>
      </div>

      {/* Summary Statistics */}
      <div className="stats-grid">
        <StatCard
          title="Cumulative GPA"
          value="3.84"
          change="+0.08"
          changeType="positive"
          subtitle="from last semester"
          colorClass="stat-icon-blue"
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          }
        />

        <StatCard
          title="Study Time This Week"
          value="28.5 hrs"
          change="89%"
          changeType="neutral"
          subtitle="of 32.0 hr target"
          colorClass="stat-icon-emerald"
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          }
        />

        <StatCard
          title="Assignments Due"
          value="4 Pending"
          change="2 urgent"
          changeType="negative"
          subtitle="due within 48 hours"
          colorClass="stat-icon-amber"
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          }
        />

        <StatCard
          title="Course Completion"
          value="76.2%"
          change="+4.5%"
          changeType="positive"
          subtitle="ahead of curriculum pace"
          colorClass="stat-icon-purple"
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          }
        />
      </div>

      <div className="dashboard-grid-2">
        {/* Left Column: Schedule & Key Courses */}
        <div>
          <div className="section-card">
            <div className="section-card-header">
              <div>
                <h3 className="section-card-title">Today's Class Schedule</h3>
                <span className="section-card-subtitle">Thursday, Fall 2026 Session</span>
              </div>
              <span className="course-badge">3 Sessions Today</span>
            </div>

            <div className="schedule-list">
              {todaySchedule.map((item, idx) => (
                <div key={idx} className={`schedule-card ${item.color}`}>
                  <div className="schedule-time">{item.time}</div>
                  <div className="schedule-details">
                    <h4>{item.course}</h4>
                    <p>{item.type} • {item.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="section-card">
            <div className="section-card-header">
              <div>
                <h3 className="section-card-title">Active Courses Progress</h3>
                <span className="section-card-subtitle">Key subjects for Fall 2026</span>
              </div>
              <Link to="/dashboard" className="btn btn-sm btn-secondary">
                View All Courses
              </Link>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <div className="progress-header">
                  <strong>CS 301: Advanced Data Structures & Algorithms</strong>
                  <span>82%</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: "82%" }}></div>
                </div>
              </div>

              <div>
                <div className="progress-header">
                  <strong>CS 340: Database Management Systems</strong>
                  <span>68%</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill purple" style={{ width: "68%" }}></div>
                </div>
              </div>

              <div>
                <div className="progress-header">
                  <strong>MATH 220: Linear Algebra & Applications</strong>
                  <span>91%</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill emerald" style={{ width: "91%" }}></div>
                </div>
              </div>

              <div>
                <div className="progress-header">
                  <strong>CS 315: Computer Networks & Security</strong>
                  <span>74%</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill amber" style={{ width: "74%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Activity Stream & Announcements */}
        <div>
          <div className="section-card">
            <div className="section-card-header">
              <div>
                <h3 className="section-card-title">Recent Academic Activity</h3>
                <span className="section-card-subtitle">Last 48 hours</span>
              </div>
            </div>

            <div className="activity-list">
              {recentActivities.map((act) => (
                <ActivityCard key={act.id} activity={act} />
              ))}
            </div>
          </div>

          <div className="section-card" style={{ background: "linear-gradient(135deg, #eff6ff, #f5f3ff)", border: "1px solid #dbeafe" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
              <span style={{ fontSize: "1.2rem" }}>💡</span>
              <h4 style={{ fontSize: "0.95rem", fontWeight: 600, color: "#1e40af" }}>Study Tip of the Week</h4>
            </div>
            <p style={{ fontSize: "0.85rem", color: "#334155", lineHeight: 1.5 }}>
              Interleaved practice between algorithmic problem solving and theoretical proofs enhances concept retention by over 30% compared to blocked repetition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

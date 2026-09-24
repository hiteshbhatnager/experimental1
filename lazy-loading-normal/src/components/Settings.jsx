import React, { useState } from "react";

export default function Settings() {
  const [sessionLength, setSessionLength] = useState("25");
  const [breakLength, setBreakLength] = useState("5");
  const [dailyGoal, setDailyGoal] = useState("4.5");
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [deadlinePush, setDeadlinePush] = useState(true);
  const [soundEffects, setSoundEffects] = useState(false);
  const [compactView, setCompactView] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [savedNotification, setSavedNotification] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSavedNotification(true);
    setTimeout(() => {
      setSavedNotification(false);
    }, 2500);
  };

  const handleExportData = () => {
    const studyData = {
      student: "Alex Morgan",
      studentId: "STU-2023-8841",
      semester: "Fall 2026",
      gpa: 3.84,
      totalHours: 187.2,
      courses: [
        { code: "CS 301", progress: 82, hours: 48.5 },
        { code: "CS 340", progress: 68, hours: 36.0 },
        { code: "MATH 220", progress: 91, hours: 42.0 },
        { code: "CS 315", progress: 74, hours: 31.5 },
        { code: "CS 350", progress: 59, hours: 29.0 },
      ],
      exportedAt: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(studyData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `StudyFlow_Data_AlexMorgan_${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="settings-page">
      <div className="page-header">
        <div>
          <h2 className="page-title">Application & Study Settings</h2>
          <p className="page-subtitle">
            Customize your study interval durations, notification triggers, and learning preferences.
          </p>
        </div>
        <div className="page-actions">
          {savedNotification && (
            <span style={{ fontSize: "0.85rem", color: "var(--accent-emerald)", fontWeight: 600 }}>
              ✓ Preferences Saved
            </span>
          )}
          <button type="button" className="btn btn-primary" onClick={handleSave}>
            Save All Preferences
          </button>
        </div>
      </div>

      <div className="dashboard-grid-2">
        {/* Left Column: Core Preferences */}
        <div>
          {/* Study & Timer Settings */}
          <div className="section-card">
            <div className="section-card-header">
              <div>
                <h3 className="section-card-title">Study Session & Timer Setup</h3>
                <span className="section-card-subtitle">Configure Pomodoro intervals and target objectives</span>
              </div>
            </div>

            <div className="settings-section">
              <div className="setting-item">
                <div className="setting-label">
                  <h4>Focus Session Interval</h4>
                  <p>Duration of uninterrupted deep study time block</p>
                </div>
                <select
                  value={sessionLength}
                  onChange={(e) => setSessionLength(e.target.value)}
                  className="setting-select"
                >
                  <option value="25">25 Minutes (Standard)</option>
                  <option value="45">45 Minutes (Extended)</option>
                  <option value="60">60 Minutes (Intensive)</option>
                </select>
              </div>

              <div className="setting-item">
                <div className="setting-label">
                  <h4>Rest & Recharge Interval</h4>
                  <p>Rest break duration between consecutive study blocks</p>
                </div>
                <select
                  value={breakLength}
                  onChange={(e) => setBreakLength(e.target.value)}
                  className="setting-select"
                >
                  <option value="5">5 Minutes</option>
                  <option value="10">10 Minutes</option>
                  <option value="15">15 Minutes</option>
                </select>
              </div>

              <div className="setting-item">
                <div className="setting-label">
                  <h4>Daily Target Hours</h4>
                  <p>Baseline study objective tracked on your dashboard</p>
                </div>
                <select
                  value={dailyGoal}
                  onChange={(e) => setDailyGoal(e.target.value)}
                  className="setting-select"
                >
                  <option value="3.0">3.0 Hours / Day</option>
                  <option value="4.5">4.5 Hours / Day</option>
                  <option value="6.0">6.0 Hours / Day</option>
                </select>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="section-card">
            <div className="section-card-header">
              <div>
                <h3 className="section-card-title">Academic Alerts & Reminders</h3>
                <span className="section-card-subtitle">Manage automated notification channels</span>
              </div>
            </div>

            <div className="settings-section">
              <div className="setting-item">
                <div className="setting-label">
                  <h4>Assignment Deadline Alerts</h4>
                  <p>Receive reminder notifications 24 hours prior to submission deadlines</p>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={deadlinePush}
                    onChange={(e) => setDeadlinePush(e.target.checked)}
                  />
                  <span className="slider"></span>
                </label>
              </div>

              <div className="setting-item">
                <div className="setting-label">
                  <h4>Weekly Academic Performance Digest</h4>
                  <p>Receive comprehensive weekly analytics summary via email</p>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={emailAlerts}
                    onChange={(e) => setEmailAlerts(e.target.checked)}
                  />
                  <span className="slider"></span>
                </label>
              </div>

              <div className="setting-item">
                <div className="setting-label">
                  <h4>Timer Sound Effects</h4>
                  <p>Play chime upon completion of study and break intervals</p>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={soundEffects}
                    onChange={(e) => setSoundEffects(e.target.checked)}
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Display & Connected Accounts */}
        <div>
          {/* Display & Interface */}
          <div className="section-card">
            <div className="section-card-header">
              <div>
                <h3 className="section-card-title">Display & Visual Preferences</h3>
                <span className="section-card-subtitle">Adjust layout density and graphics options</span>
              </div>
            </div>

            <div className="settings-section">
              <div className="setting-item">
                <div className="setting-label">
                  <h4>Compact Table Density</h4>
                  <p>Display denser spacing for coursework and grade tables</p>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={compactView}
                    onChange={(e) => setCompactView(e.target.checked)}
                  />
                  <span className="slider"></span>
                </label>
              </div>

              <div className="setting-item">
                <div className="setting-label">
                  <h4>High Contrast Visualizations</h4>
                  <p>Enhance contrast boundaries in SVG performance charts</p>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={highContrast}
                    onChange={(e) => setHighContrast(e.target.checked)}
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </div>

          {/* Connected Integrations */}
          <div className="section-card">
            <div className="section-card-header">
              <div>
                <h3 className="section-card-title">Connected Academic Integrations</h3>
                <span className="section-card-subtitle">Sync with your university portal</span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              <div className="activity-item">
                <div style={{ fontSize: "1.3rem" }}>🎓</div>
                <div className="activity-content">
                  <div className="activity-title">Canvas LMS Integration</div>
                  <div className="activity-meta">Status: Connected • Last sync: 15m ago</div>
                </div>
                <span className="priority-tag low">ACTIVE</span>
              </div>

              <div className="activity-item">
                <div style={{ fontSize: "1.3rem" }}>📅</div>
                <div className="activity-content">
                  <div className="activity-title">Google Calendar Sync</div>
                  <div className="activity-meta">Status: Active • Auto-import lectures</div>
                </div>
                <span className="priority-tag low">ACTIVE</span>
              </div>

              <div className="activity-item">
                <div style={{ fontSize: "1.3rem" }}>🐙</div>
                <div className="activity-content">
                  <div className="activity-title">GitHub Classroom</div>
                  <div className="activity-meta">Status: Linked to @alex-morgan-cs</div>
                </div>
                <span className="priority-tag low">ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Data Export */}
          <div className="section-card">
            <div className="section-card-header">
              <div>
                <h3 className="section-card-title">Academic Data Management</h3>
                <span className="section-card-subtitle">Download your complete study log history</span>
              </div>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
              Export all your course tracking logs, Pomodoro focus sessions, and performance ratings in standardized JSON format.
            </p>

            <button type="button" className="btn btn-secondary btn-sm" onClick={handleExportData}>
              Download Study Data (JSON)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

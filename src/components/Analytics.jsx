import React, { useState } from "react";
import StatCard from "./StatCard";

export default function Analytics() {
  const [selectedDay, setSelectedDay] = useState(null);

  const dailyStudyData = [
    { day: "Mon", hours: 4.2, label: "4.2h" },
    { day: "Tue", hours: 5.5, label: "5.5h" },
    { day: "Wed", hours: 6.8, label: "6.8h" },
    { day: "Thu", hours: 4.0, label: "4.0h" },
    { day: "Fri", hours: 5.2, label: "5.2h" },
    { day: "Sat", hours: 3.0, label: "3.0h" },
    { day: "Sun", hours: 2.0, label: "2.0h" },
  ];

  const maxHours = 8.0;
  const chartHeight = 160;

  const courseAnalytics = [
    {
      code: "CS 301",
      name: "Advanced Data Structures & Algorithms",
      hours: 48.5,
      quizAvg: "92%",
      assignmentScore: "95%",
      projectedGrade: "A (4.0)",
      status: "Excellent",
    },
    {
      code: "CS 340",
      name: "Database Management Systems",
      hours: 36.0,
      quizAvg: "86%",
      assignmentScore: "88%",
      projectedGrade: "A- (3.7)",
      status: "On Track",
    },
    {
      code: "MATH 220",
      name: "Linear Algebra & Applications",
      hours: 42.0,
      quizAvg: "94%",
      assignmentScore: "96%",
      projectedGrade: "A (4.0)",
      status: "Excellent",
    },
    {
      code: "CS 315",
      name: "Computer Networks & Security",
      hours: 31.5,
      quizAvg: "84%",
      assignmentScore: "85%",
      projectedGrade: "B+ (3.3)",
      status: "Good",
    },
    {
      code: "CS 350",
      name: "Operating Systems Principles",
      hours: 29.0,
      quizAvg: "81%",
      assignmentScore: "83%",
      projectedGrade: "B (3.0)",
      status: "Needs Focus",
    },
  ];

  return (
    <div className="analytics-page">
      <div className="page-header">
        <div>
          <h2 className="page-title">Study Analytics & Learning Metrics</h2>
          <p className="page-subtitle">
            Quantitative analysis of study hours, cognitive retention patterns, and grade projections.
          </p>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary" onClick={() => window.print()}>
            Export Report
          </button>
        </div>
      </div>

      {/* Analytics KPI Row */}
      <div className="stats-grid">
        <StatCard
          title="Overall Efficiency Index"
          value="91.4%"
          change="+3.2%"
          changeType="positive"
          subtitle="cognitive retention rate"
          colorClass="stat-icon-emerald"
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
              <line x1="16" y1="8" x2="2" y2="22" />
              <line x1="17.5" y1="15" x2="9" y2="15" />
            </svg>
          }
        />

        <StatCard
          title="Average Quiz Score"
          value="89.6%"
          change="+2.4%"
          changeType="positive"
          subtitle="across 5 enrolled courses"
          colorClass="stat-icon-blue"
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="8" r="7" />
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
            </svg>
          }
        />

        <StatCard
          title="Focus Sessions Completed"
          value="64 Blocks"
          change="100%"
          changeType="neutral"
          subtitle="25-min Pomodoro units"
          colorClass="stat-icon-purple"
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          }
        />

        <StatCard
          title="Revision Consistency"
          value="96.0%"
          change="Top 5%"
          changeType="positive"
          subtitle="class percentiles ranking"
          colorClass="stat-icon-amber"
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          }
        />
      </div>

      {/* Visual Charts Section */}
      <div className="dashboard-grid-2">
        {/* Left Column: Daily Hours Bar Chart */}
        <div className="section-card">
          <div className="section-card-header">
            <div>
              <h3 className="section-card-title">Daily Study Hours (Current Week)</h3>
              <span className="section-card-subtitle">
                Total: 30.7 hrs logged • Average: 4.38 hrs/day
              </span>
            </div>
            {selectedDay && (
              <span className="course-badge">Selected: {selectedDay.day} ({selectedDay.hours}h)</span>
            )}
          </div>

          <div className="chart-container">
            <svg className="chart-svg" viewBox="0 0 560 220">
              {/* Gridlines */}
              <line x1="40" y1="30" x2="540" y2="30" className="chart-axis-line" strokeDasharray="3 3" />
              <line x1="40" y1="75" x2="540" y2="75" className="chart-axis-line" strokeDasharray="3 3" />
              <line x1="40" y1="120" x2="540" y2="120" className="chart-axis-line" strokeDasharray="3 3" />
              <line x1="40" y1="165" x2="540" y2="165" className="chart-axis-line" />

              {/* Y Axis Labels */}
              <text x="30" y="34" className="chart-label" textAnchor="end">8h</text>
              <text x="30" y="79" className="chart-label" textAnchor="end">5h</text>
              <text x="30" y="124" className="chart-label" textAnchor="end">2.5h</text>
              <text x="30" y="169" className="chart-label" textAnchor="end">0h</text>

              {/* Bars */}
              {dailyStudyData.map((d, index) => {
                const barWidth = 44;
                const gap = (500 - barWidth * 7) / 8;
                const x = 50 + gap + index * (barWidth + gap);
                const barH = (d.hours / maxHours) * 135;
                const y = 165 - barH;
                const isSelected = selectedDay && selectedDay.day === d.day;

                return (
                  <g key={d.day} onClick={() => setSelectedDay(d)} style={{ cursor: "pointer" }}>
                    <rect
                      x={x}
                      y={y}
                      width={barWidth}
                      height={barH}
                      rx="5"
                      fill={isSelected ? "#2563eb" : index === 2 ? "#3b82f6" : "#60a5fa"}
                      className="bar-rect"
                    />
                    <text x={x + barWidth / 2} y={y - 8} className="chart-value">
                      {d.label}
                    </text>
                    <text x={x + barWidth / 2} y="185" className="chart-label">
                      {d.day}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
          <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textAlign: "center" }}>
            * Click any bar to inspect specific day breakdown
          </div>
        </div>

        {/* Right Column: Subject Allocation Radar / Breakdown */}
        <div className="section-card">
          <div className="section-card-header">
            <div>
              <h3 className="section-card-title">Subject Time Share</h3>
              <span className="section-card-subtitle">Distribution of 187 total semester hours</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", padding: "0.5rem 0" }}>
            <div>
              <div className="progress-header">
                <span style={{ fontWeight: 600 }}>CS 301 (Algorithms)</span>
                <span>26% • 48.5 hrs</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: "26%" }}></div>
              </div>
            </div>

            <div>
              <div className="progress-header">
                <span style={{ fontWeight: 600 }}>MATH 220 (Linear Algebra)</span>
                <span>22.5% • 42.0 hrs</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill emerald" style={{ width: "22.5%" }}></div>
              </div>
            </div>

            <div>
              <div className="progress-header">
                <span style={{ fontWeight: 600 }}>CS 340 (Databases)</span>
                <span>19.2% • 36.0 hrs</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill purple" style={{ width: "19.2%" }}></div>
              </div>
            </div>

            <div>
              <div className="progress-header">
                <span style={{ fontWeight: 600 }}>CS 315 (Networks)</span>
                <span>16.8% • 31.5 hrs</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill amber" style={{ width: "16.8%" }}></div>
              </div>
            </div>

            <div>
              <div className="progress-header">
                <span style={{ fontWeight: 600 }}>CS 350 (Operating Systems)</span>
                <span>15.5% • 29.0 hrs</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: "15.5%", backgroundColor: "#64748b" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Course Evaluation Table */}
      <div className="section-card">
        <div className="section-card-header">
          <div>
            <h3 className="section-card-title">Comprehensive Course Evaluation</h3>
            <span className="section-card-subtitle">Projected grades and academic standings</span>
          </div>
        </div>

        <div className="data-table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Total Studied</th>
                <th>Quiz Average</th>
                <th>Assignment Avg</th>
                <th>Projected Grade</th>
                <th>Standing</th>
              </tr>
            </thead>
            <tbody>
              {courseAnalytics.map((item) => (
                <tr key={item.code}>
                  <td>
                    <strong>{item.code}</strong> — {item.name}
                  </td>
                  <td>{item.hours} hrs</td>
                  <td>{item.quizAvg}</td>
                  <td>{item.assignmentScore}</td>
                  <td>
                    <span style={{ fontWeight: 700, color: "var(--primary)" }}>{item.projectedGrade}</span>
                  </td>
                  <td>
                    <span
                      className={`priority-tag ${
                        item.status === "Excellent" ? "low" : item.status === "Needs Focus" ? "high" : "medium"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

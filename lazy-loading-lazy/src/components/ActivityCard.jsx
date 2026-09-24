import React from "react";

export default function ActivityCard({ activity }) {
  const { title, course, timestamp, icon, iconBg = "#eff6ff" } = activity;

  return (
    <div className="activity-item">
      <div className="activity-icon-badge" style={{ backgroundColor: iconBg }}>
        {icon}
      </div>
      <div className="activity-content">
        <div className="activity-title">{title}</div>
        <div className="activity-meta">
          <span>{course}</span>
          <span>•</span>
          <span>{timestamp}</span>
        </div>
      </div>
    </div>
  );
}

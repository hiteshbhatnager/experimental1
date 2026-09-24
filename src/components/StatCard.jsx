import React from "react";

export default function StatCard({ title, value, change, changeType = "neutral", subtitle, icon, colorClass = "stat-icon-blue" }) {
  return (
    <div className="stat-card">
      <div className="stat-details">
        <span className="stat-title">{title}</span>
        <span className="stat-value">{value}</span>
        <div className="stat-meta">
          {change && (
            <span className={`stat-change ${changeType}`}>
              {changeType === "positive" ? "↑ " : changeType === "negative" ? "↓ " : ""}
              {change}
            </span>
          )}
          {subtitle && <span className="stat-subtitle">{subtitle}</span>}
        </div>
      </div>
      <div className={`stat-icon-wrapper ${colorClass}`}>
        {icon}
      </div>
    </div>
  );
}

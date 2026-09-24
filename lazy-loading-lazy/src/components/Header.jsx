import React from "react";

export default function Header({ onToggleSidebar }) {
  return (
    <header className="top-header">
      <div className="header-left">
        <button
          className="mobile-toggle"
          onClick={onToggleSidebar}
          aria-label="Toggle Navigation Menu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        <div className="search-bar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search courses, notes, assignments..."
            aria-label="Search"
          />
        </div>
      </div>

      <div className="header-right">
        <div className="timer-pill">
          <span className="timer-pulse"></span>
          <span>Focus: 24:18</span>
        </div>

        <button className="header-icon-btn" aria-label="Notifications">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span className="badge-dot"></span>
        </button>

        <div className="user-profile-btn">
          <div className="avatar">AM</div>
          <div className="user-info">
            <div className="user-name">Alex Morgan</div>
            <div className="user-role">Computer Science (Yr 3)</div>
          </div>
        </div>
      </div>
    </header>
  );
}

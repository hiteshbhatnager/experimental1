import React, { useState } from "react";

export default function Dashboard() {
  const [filter, setFilter] = useState("all");
  const [tasks, setTasks] = useState([
    { id: 1, text: "CS301: Implement Red-Black Tree Balancing", due: "Tomorrow, 11:59 PM", priority: "high", completed: false },
    { id: 2, text: "CS340: Write B+ Tree Indexing Queries", due: "Friday, 5:00 PM", priority: "medium", completed: false },
    { id: 3, text: "MATH220: Complete Eigenvalue Problem Set 5", due: "Sunday, 11:59 PM", priority: "low", completed: true },
    { id: 4, text: "CS315: Wireshark Packet Capture Analysis", due: "Oct 2, 2:00 PM", priority: "high", completed: false },
    { id: 5, text: "CS350: Semaphore Synchronization Lab", due: "Oct 5, 11:59 PM", priority: "medium", completed: false },
  ]);

  const courses = [
    {
      code: "CS 301",
      name: "Advanced Data Structures & Algorithms",
      instructor: "Prof. Dr. Henderson",
      credits: 4,
      progress: 82,
      color: "blue",
      status: "in-progress",
      nextItem: "Quiz 3 on Graph Traversal (in 2 days)",
    },
    {
      code: "CS 340",
      name: "Database Management Systems",
      instructor: "Prof. Vance",
      credits: 3,
      progress: 68,
      color: "purple",
      status: "in-progress",
      nextItem: "SQL Query Optimization Lab due Friday",
    },
    {
      code: "MATH 220",
      name: "Linear Algebra & Applications",
      instructor: "Prof. Kowalski",
      credits: 4,
      progress: 91,
      color: "emerald",
      status: "in-progress",
      nextItem: "Midterm Exam 2 Review next Tuesday",
    },
    {
      code: "CS 315",
      name: "Computer Networks & Security",
      instructor: "Prof. Thorne",
      credits: 3,
      progress: 74,
      color: "amber",
      status: "in-progress",
      nextItem: "TCP/IP Protocol packet capture milestone",
    },
    {
      code: "CS 350",
      name: "Operating Systems Principles",
      instructor: "Prof. Alvarez",
      credits: 4,
      progress: 59,
      color: "blue",
      status: "in-progress",
      nextItem: "Thread concurrency & mutex locks exercise",
    },
    {
      code: "CS 210",
      name: "Discrete Mathematics for Computing",
      instructor: "Prof. Zhang",
      credits: 3,
      progress: 100,
      color: "emerald",
      status: "completed",
      nextItem: "Completed with Grade A (4.0)",
    },
  ];

  const filteredCourses = courses.filter((c) => {
    if (filter === "in-progress") return c.status === "in-progress";
    if (filter === "completed") return c.status === "completed";
    return true;
  });

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <div className="dashboard-page">
      <div className="page-header">
        <div>
          <h2 className="page-title">Academic Course Dashboard</h2>
          <p className="page-subtitle">
            Manage your enrolled courses, monitor assignment progress, and track syllabus completion.
          </p>
        </div>
        <div className="page-actions">
          <button
            className={`btn btn-sm ${filter === "all" ? "btn-primary" : "btn-secondary"}`}
            onClick={() => setFilter("all")}
          >
            All Courses ({courses.length})
          </button>
          <button
            className={`btn btn-sm ${filter === "in-progress" ? "btn-primary" : "btn-secondary"}`}
            onClick={() => setFilter("in-progress")}
          >
            In Progress (5)
          </button>
          <button
            className={`btn btn-sm ${filter === "completed" ? "btn-primary" : "btn-secondary"}`}
            onClick={() => setFilter("completed")}
          >
            Completed (1)
          </button>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="courses-grid" style={{ marginBottom: "2rem" }}>
        {filteredCourses.map((c) => (
          <div key={c.code} className="course-card">
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="course-badge">{c.code}</span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 500 }}>
                  {c.credits} Credits
                </span>
              </div>
              <h3 className="course-title">{c.name}</h3>
              <p className="course-instructor">{c.instructor}</p>

              <div className="progress-bar-container">
                <div className="progress-header">
                  <span>Syllabus Covered</span>
                  <strong>{c.progress}%</strong>
                </div>
                <div className="progress-track">
                  <div
                    className={`progress-fill ${c.color === "emerald" ? "emerald" : c.color === "purple" ? "purple" : c.color === "amber" ? "amber" : ""}`}
                    style={{ width: `${c.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "1rem", paddingTop: "0.75rem", borderTop: "1px solid var(--border-color)", fontSize: "0.8rem", color: "var(--text-secondary)" }}>
              <span style={{ fontWeight: 600 }}>Next: </span>
              <span>{c.nextItem}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Two Column Section: Tasks & Weekly Allocation */}
      <div className="dashboard-grid-2">
        {/* Left Column: Tasks */}
        <div className="section-card">
          <div className="section-card-header">
            <div>
              <h3 className="section-card-title">Active Tasks & Deliverables</h3>
              <span className="section-card-subtitle">
                {tasks.filter((t) => !t.completed).length} pending deliverables for current sprint
              </span>
            </div>
          </div>

          <div className="task-list">
            {tasks.map((task) => (
              <div
                key={task.id}
                className={`task-item ${task.completed ? "completed" : ""}`}
              >
                <div className="task-left">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="task-checkbox"
                    id={`task-${task.id}`}
                  />
                  <label htmlFor={`task-${task.id}`} className="task-name" style={{ cursor: "pointer" }}>
                    {task.text}
                  </label>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{task.due}</span>
                  <span className={`priority-tag ${task.priority}`}>
                    {task.priority.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Weekly Target Breakdown */}
        <div className="section-card">
          <div className="section-card-header">
            <div>
              <h3 className="section-card-title">Weekly Target Allocation</h3>
              <span className="section-card-subtitle">28.5 of 32.0 study hours logged</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
            <div>
              <div className="progress-header">
                <span>CS 301: Algorithms</span>
                <span>8.5 / 10.0 hrs</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: "85%" }}></div>
              </div>
            </div>

            <div>
              <div className="progress-header">
                <span>CS 340: Database Systems</span>
                <span>6.0 / 7.0 hrs</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill purple" style={{ width: "86%" }}></div>
              </div>
            </div>

            <div>
              <div className="progress-header">
                <span>MATH 220: Linear Algebra</span>
                <span>7.5 / 8.0 hrs</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill emerald" style={{ width: "94%" }}></div>
              </div>
            </div>

            <div>
              <div className="progress-header">
                <span>CS 315: Networks</span>
                <span>6.5 / 7.0 hrs</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill amber" style={{ width: "93%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

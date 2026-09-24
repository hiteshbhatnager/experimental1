import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// ============================================================================
// APP A: STANDARD / NORMAL LOADING STRATEGY (STATIC IMPORTS)
// ============================================================================
// In this version, all page components are imported statically at the top level.
// They are bundled directly into the initial JavaScript bundle during the build.
// When a user visits the website, the browser downloads and evaluates all of
// these page components upfront, regardless of which page the user actually views.
// No React.lazy(), dynamic import(), or Suspense is used here.
// ============================================================================
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Analytics from "./components/Analytics";
import Profile from "./components/Profile";
import Settings from "./components/Settings";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

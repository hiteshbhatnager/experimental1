import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LoadingScreen from "./components/LoadingScreen";

// ============================================================================
// APP B: LAZY LOADING STRATEGY (DYNAMIC IMPORTS VIA React.lazy())
// ============================================================================
// 1. Initial Page (Home):
//    Imported statically because it represents the initial landing page
//    required for the first view.
// ============================================================================
import Home from "./components/Home";

// ============================================================================
// 2. Lazy Loaded Pages (Dashboard, Analytics, Profile, Settings):
//    Imported dynamically using React.lazy() and dynamic import().
//    Vite / Rollup will split each of these components into a separate
//    JavaScript chunk file during bundling.
//    The browser will NOT download these chunks upon initial page load.
//    Instead, each chunk is requested across the network only when the user
//    navigates to that specific route.
// ============================================================================
const Dashboard = lazy(() => import("./components/Dashboard"));
const Analytics = lazy(() => import("./components/Analytics"));
const Profile = lazy(() => import("./components/Profile"));
const Settings = lazy(() => import("./components/Settings"));

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Home is rendered immediately without Suspense fallback */}
          <Route index element={<Home />} />

          {/* 
            Each lazy-loaded route is wrapped in React.Suspense with a fallback component.
            While the browser fetches the separate JavaScript chunk file over the network,
            the LoadingScreen fallback is temporarily displayed.
          */}
          <Route
            path="dashboard"
            element={
              <Suspense fallback={<LoadingScreen message="Loading Dashboard chunk..." />}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="analytics"
            element={
              <Suspense fallback={<LoadingScreen message="Loading Analytics chunk..." />}>
                <Analytics />
              </Suspense>
            }
          />
          <Route
            path="profile"
            element={
              <Suspense fallback={<LoadingScreen message="Loading Profile chunk..." />}>
                <Profile />
              </Suspense>
            }
          />
          <Route
            path="settings"
            element={
              <Suspense fallback={<LoadingScreen message="Loading Settings chunk..." />}>
                <Settings />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

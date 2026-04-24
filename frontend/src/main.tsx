import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import ProtectedRoute from "./components/shared/ProtectedRoute.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import MainLayout from "./components/layout/MainLayout.tsx";
import DashboardLayout from "./components/layout/DashboardLayout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "/", element: <HomePage /> }],
  },
  {
    path: "dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index:true,
        element: <Dashboard />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);

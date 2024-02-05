import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Providers/AuthProvider";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
// Create a client
const queryClient = new QueryClient()

AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <div>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}></RouterProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
    <Toaster></Toaster>
  </div>

  // </React.StrictMode>
);

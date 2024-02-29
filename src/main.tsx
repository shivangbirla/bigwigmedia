// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
import { ClerkProvider } from "@clerk/clerk-react";
import { ThemeProvider } from "./components/ui/theme-provider.tsx";
import { Toaster } from "@/components/ui/sonner";

// Import react-ga
import ReactGA from "react-ga";

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

// Initialize Google Analytics with your tracking ID
ReactGA.initialize("G-BWWD8V0SE5");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <NextUIProvider>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Toaster position="top-center" />
          <App />
        </ThemeProvider>
      </ClerkProvider>
    </NextUIProvider>
  </BrowserRouter>
);

// Track page view
ReactGA.pageview(window.location.pathname + window.location.search);

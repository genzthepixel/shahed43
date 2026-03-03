import { Toaster } from "@/components/ui/sonner";
import {
  Link,
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { useEffect, useState } from "react";
import PinkCursor from "./components/PinkCursor";
import HomePage from "./pages/HomePage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";

function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${progress}%`,
        height: "3px",
        zIndex: 9998,
        background:
          "linear-gradient(90deg, oklch(0.42 0.16 345), oklch(0.58 0.26 340), oklch(0.72 0.22 320), oklch(0.82 0.18 300))",
        boxShadow:
          "0 0 8px oklch(0.58 0.26 340 / 0.8), 0 0 20px oklch(0.58 0.26 340 / 0.4)",
        transition: "width 0.1s linear",
        borderRadius: "0 2px 2px 0",
      }}
      aria-hidden="true"
    />
  );
}

function RootLayout() {
  return (
    <>
      <PinkCursor />
      <ScrollProgressBar />
      <div>
        <Outlet />
        <Toaster position="bottom-right" />
      </div>
    </>
  );
}

const rootRoute = createRootRoute({
  component: RootLayout,
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col items-center justify-center bg-darker-bg text-near-white">
      <h1 className="font-playfair text-6xl mb-4 text-gradient-pink">404</h1>
      <p className="font-syne text-xl mb-8 text-near-white/70">
        Page not found
      </p>
      <Link to="/" className="text-primary hover:underline font-syne">
        ← Back to Home
      </Link>
    </div>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/privacy",
  component: PrivacyPage,
});

const termsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/terms",
  component: TermsPage,
});

const routeTree = rootRoute.addChildren([indexRoute, privacyRoute, termsRoute]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}

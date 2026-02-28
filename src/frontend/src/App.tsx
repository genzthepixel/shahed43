import { Toaster } from "@/components/ui/sonner";
import {
  Link,
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import HomePage from "./pages/HomePage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";

function RootLayout() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.5s ease 0.1s",
        }}
      >
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

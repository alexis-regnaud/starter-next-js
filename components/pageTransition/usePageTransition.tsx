import React, { useState } from "react";
import NProgress from "nprogress"; // nprogress module
import disableScroll from "disable-scroll";

interface PageTransitionContextParams {
  isTransitioning: boolean;
  handleRouteTransitionStart: () => void;
  handleRouteChangeStart: (url: string) => void;
  handleRouteChangeComplete: (url: string) => void;
  handleRouteChangeError: (url: string) => void;
}

const PageTransitionContext = React.createContext<PageTransitionContextParams | undefined>(undefined);

export function PageTransitionProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: PageTransitionContextParams;
}) {
  return <PageTransitionContext.Provider value={value}>{children}</PageTransitionContext.Provider>;
}

export default function usePageTransitionContext() {
  const context = React.useContext(PageTransitionContext);

  if (context === undefined) {
    throw new Error("usePageTransitionContext must be used within a PageTransitionProvider");
  }
  return context;
}

export function usePageTransition() {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleRouteTransitionStart = () => {
    console.log("is Transitioning");

    setIsTransitioning(true);
  };

  const handleRouteChangeStart = (url) => {
    console.log("App is changing to: ", url);
    // setIsLoading(true);
    NProgress.start();
    disableScroll.on();
  };

  const handleRouteChangeComplete = (url) => {
    console.log("App has completed to: ", url);
    setTimeout(() => {
      setIsTransitioning(false);
      NProgress.done();
      disableScroll.off();
    }, 900);
  };

  const handleRouteChangeError = (url) => {
    console.log("App has error to: ", url);
    setIsTransitioning(false);
    NProgress.done();
    disableScroll.off();
  };

  return {
    isTransitioning,
    handleRouteTransitionStart,
    handleRouteChangeStart,
    handleRouteChangeComplete,
    handleRouteChangeError,
  };
}

import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as
  | string
  | undefined;

export const initGA = (): void => {
  if (GA_MEASUREMENT_ID) {
    if (import.meta.env.DEV) {
      ReactGA.initialize(GA_MEASUREMENT_ID, { testMode: true });
    } else {
      ReactGA.initialize(GA_MEASUREMENT_ID);
    }
    console.log("GA Initialized with Measurement ID:", GA_MEASUREMENT_ID);
  } else {
    // This warning will show in your development console
    console.warn(
      "GA Measurement ID is not defined in .env.local. Analytics tracking is disabled."
    );
  }
};

export const trackPageView = (path: string): void => {
  try {
    if (GA_MEASUREMENT_ID) {
      ReactGA.send({
        hitType: "pageview",
        page: path,
        title: document.title,
        location: window.location.href,
      });
    }
  } catch (error) {
    console.error("Error tracking page view:", error);
  }
};

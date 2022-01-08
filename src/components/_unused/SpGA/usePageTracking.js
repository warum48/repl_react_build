//import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
//import ReactGA from "react-ga";

const usePageTracking = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!window.location.href.includes("localhost")) {
      //ReactGA.initialize("UA-000000000-0");
      //console.log('ga init');
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      //ReactGA.pageview(location.pathname + location.search);
      //console.log('route change');
    }
  //}, [initialized, location]);
    }, [location]); //start from change, skip init
};

export default usePageTracking;
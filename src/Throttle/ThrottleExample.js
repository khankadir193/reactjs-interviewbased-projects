import React, { useState, useEffect, useRef } from "react";

const ThrottleExample = () => {
  const [scrollPosition, setScrollPosition] = useState(0); // State to track scroll position
  const lastExecutedTimeRef = useRef(0); // Ref to store the last executed time

  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now(); // Current timestamp
      const throttleDelay = 1000; // Throttle delay in milliseconds

      // Throttle logic: execute if the delay period has passed
      if (now - lastExecutedTimeRef.current >= throttleDelay) {
        setScrollPosition(window.scrollY); // Update state with the new scroll position
        lastExecutedTimeRef.current = now; // Update the last executed time
      }
    };

    window.addEventListener("scroll", handleScroll); // Attach scroll listener
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup listener on unmount
  }, []);

  return (
    <div style={{ height: "1500px", padding: "20px" }}>
      <h3>Throttle Example</h3>
      <p>Scroll down to see the throttled scroll position.</p>
      <p>
        <strong>Scroll Position:</strong> {scrollPosition}px
      </p>
    </div>
  );
};

export default ThrottleExample;

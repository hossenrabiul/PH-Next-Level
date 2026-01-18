"use client";

import { useEffect } from "react";

const AboutError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.log(error);
  }, []);
  return (
    <div>
      <div>Something went wrong</div>
      <button onClick={() => reset()}>Retry</button>
    </div>
  );
};

export default AboutError;

"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function TopLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function startProgress() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setProgress(0);
    setVisible(true);

    let p = 10;
    setProgress(p);
    intervalRef.current = setInterval(() => {
      p += Math.random() * 10 + 3;
      if (p >= 85) {
        p = 85;
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
      setProgress(p);
    }, 250);
  }

  function completeProgress() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setProgress(100);
    setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 400);
  }

  useEffect(() => {
    completeProgress();
  }, [pathname, searchParams]);

  useEffect(() => {
    const handler = () => startProgress();
    window.addEventListener("loader:start", handler);
    return () => window.removeEventListener("loader:start", handler);
  }, []);

  if (!visible && progress === 0) return null;

  return (
    <div
      className="fixed top-0 left-0 z-[9999] h-[3px] pointer-events-none"
      style={{
        width: `${progress}%`,
        background: "linear-gradient(90deg, #0154AA 0%, #2d8ef5 50%, #0154AA 100%)",
        backgroundSize: "200% 100%",
        animation: "shimmer 1.2s linear infinite",
        opacity: progress === 100 ? 0 : 1,
        transition: progress === 100
          ? "opacity 0.3s ease, width 0.1s ease"
          : "width 0.25s ease",
        boxShadow: "0 0 10px rgba(45, 142, 245, 0.8), 0 0 4px rgba(10, 102, 194, 0.5)",
        borderRadius: "0 3px 3px 0",
      }}
    />
  );
}

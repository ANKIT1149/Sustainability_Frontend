"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ParticleAnimation() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This ensures that code runs only on the client side
    setIsClient(typeof window !== "undefined");
  }, []);

  if (!isClient) return null; // Prevents rendering until the client-side code is ready

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[0] overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-white rounded-full opacity-70"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 1.5 + 0.5,
          }}
          animate={{
            y: [Math.random() * window.innerHeight, -50],
            opacity: [1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}

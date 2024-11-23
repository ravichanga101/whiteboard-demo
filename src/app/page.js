"use client";

import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";

import Image from "next/image";

export default function Home() {
  return (
    <div style={{ height: "100vh" }}>
      <Tldraw persistenceKey="tldraw" defaultTheme="light" />
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "6%",
          transform: "translate(-50%, -50%)",
          opacity: 0.1,
          pointerEvents: "none",
          zIndex: 100,
        }}
      >
        <Image
          src="/CHARUSAT_LOGO.png"
          alt="Background Logo"
          width={150}
          height={30}
        />
      </div>
    </div>
  );
}

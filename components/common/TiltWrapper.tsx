"use client";

import Tilt from "react-parallax-tilt";

export default function TiltWrapper({
  children,
  scale = 1.05,
  speed = 400,
}: {
  children: React.ReactNode;
  scale?: number;
  speed?: number;
}) {
  return (
    <Tilt scale={scale} transitionSpeed={speed}>
      {children}
    </Tilt>
  );
}
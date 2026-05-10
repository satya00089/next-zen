"use client";

import { ReactLenis } from "lenis/react";
import type { PropsWithChildren } from "react";

export default function SmoothScroll({ children }: PropsWithChildren) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}

import * as React from "react";
//import { P5CanvasInstance, ReactP5Wrapper } from "@p5-wrapper/react";
import { P5CanvasInstance, SketchProps } from "@p5-wrapper/react";

import dynamic from "next/dynamic";
import useWindowDimensions from "@/components/hooks/useWindowDimensions";
import { Renderer } from "p5";

const DynamicReactP5Wrapper = dynamic(
  () => import("@p5-wrapper/react").then((mod) => mod.ReactP5Wrapper),
  { ssr: false } // Disable SSR since p5.js requires the browser
);

const PIXEL_DENSITY = 0.2;

type AnimatedBackgroundProps = SketchProps & {
  width: number;
  height: number;
};

function sketch(p5: P5CanvasInstance) {
  document.body.style.overflow = "hidden";

  let lastX: null | number = null;
  let lastY: null | number = null;
  let totalDistance = 0;

  document.addEventListener("mousemove", (event) => {
    if (lastX !== null && lastY !== null) {
      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;
      const distance = dx + dy; // Pythagorean theorem
      totalDistance += distance;
      x += dx * speedX;
      y += dy * speedX;

      if (x <= -2) {
        speedX = 0.005;
      } else if (x >= 2) {
        speedX = -0.005;
      }

      if (y <= -2) {
        speedY = 0.005;
      } else if (y >= 2) {
        speedY = -0.005;
      }
    }

    lastX = event.clientX;
    lastY = event.clientY;
  });

  const width = Math.ceil(window.innerWidth / 5) * 5;
  const height = Math.ceil(window.innerHeight / 5) * 5;

  let n = p5.random(-5, 5);
  let m = -2;
  let x = -1;
  let y = -1;

  let speedN = 0.007;
  let speedM = 0.005;

  let speedX = 0.005;
  let speedY = 0.005;

  let lastUpdateTime = 0;
  const updateInterval = 1000 / 60; // Target update every 60 FPS (adjust as needed)
  p5.setup = () => {
    p5.pixelDensity(PIXEL_DENSITY);

    p5.createCanvas(width, height);
    console.log("setup complete");
  };

  p5.draw = () => {
    p5.frameRate(20);

    p5.clear();
    p5.background(8);
    p5.loadPixels();

    const currentTime = p5.millis();

    // Only update `n` at the desired FPS interval
    if (currentTime - lastUpdateTime >= updateInterval) {
      if (n <= -7) {
        speedN = 0.003;
      } else if (n >= 7) {
        speedN = -0.003;
      }
      if (m <= -2) {
        speedM = 0.001;
      } else if (m >= 2) {
        speedM = -0.001;
      }
      n += speedN;
      m += speedM;
      /*
      if (a <= -1) {
        speedA = 0.03;
      } else if (a >= 1) {
        speedA = -0.03;
      }*/
      //a += speedA;
      lastUpdateTime = currentTime;
    }

    /*p5.normalMaterial();
    p5.push();
    p5.rotateZ(p5.frameCount * 0.01);
    p5.rotateX(p5.frameCount * 0.01);
    p5.rotateY(p5.frameCount * 0.01);
    p5.plane(1000);
    p5.pop();*/
    for (let i = 0; i < width; i += 1 / PIXEL_DENSITY) {
      for (let j = 0; j < height; j += 1 / PIXEL_DENSITY) {
        const xNorm = (i + n) / width;
        const yNorm = (j + m * 10) / height;
        const value =
          x * Math.cos(n * Math.PI * xNorm) * Math.cos(m * Math.PI * yNorm) -
          y * Math.cos(m * Math.PI * xNorm) * Math.cos(n * Math.PI * yNorm);
        //let appear = p5.random(0, 100);
        if (value < 0.3 && value > 0.01) {
          //const neonYellow = p5.color(1490 * value, 2450 * value, 660 * value);
          const c = p5.color(149, 245, 66);
          p5.set(i, j, c);
        }
        if (value < 0.2 && value > 0.1) {
          //const neonYellow = p5.color(1490 * value, 2450 * value, 660 * value);
          const c = p5.color(255, 255, 255);
          p5.set(i, j, c);
        }
      }
    }

    p5.updatePixels();

    //p5.filter(p5.BLUR, 1);
    p5.filter(p5.DILATE);
  };
}

export function AnimatedBackground() {
  return <DynamicReactP5Wrapper sketch={sketch} />;
}

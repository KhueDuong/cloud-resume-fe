import * as React from "react";
//import { P5CanvasInstance, ReactP5Wrapper } from "@p5-wrapper/react";
import { P5CanvasInstance } from "@p5-wrapper/react";

import dynamic from "next/dynamic";

const DynamicReactP5Wrapper = dynamic(
  () => import("@p5-wrapper/react").then((mod) => mod.ReactP5Wrapper),
  { ssr: false } // Disable SSR since p5.js requires the browser
);

const CANVAS_WIDTH = 1520;
const CANVAS_HEIGHT = 710;
const DRAWING_WIDTH = 1520;
const DRAWING_HEIGHT = 710;

const PIXEL_DENSITY = 0.2;

function sketch(p5: P5CanvasInstance) {
  let n = -7;
  let m = -2;
  const a = 1;

  let lastUpdateTime = 0;
  const updateInterval = 1000 / 60; // Target update every 60 FPS (adjust as needed)
  p5.setup = () => {
    p5.pixelDensity(PIXEL_DENSITY);

    p5.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  };

  p5.draw = () => {
    p5.clear();
    p5.background(8);
    p5.loadPixels();

    const currentTime = p5.millis();

    // Only update `n` at the desired FPS interval
    if (currentTime - lastUpdateTime >= updateInterval) {
      n += 0.02;
      m -= 0.01;
      lastUpdateTime = currentTime;
    }

    /*p5.normalMaterial();
    p5.push();
    p5.rotateZ(p5.frameCount * 0.01);
    p5.rotateX(p5.frameCount * 0.01);
    p5.rotateY(p5.frameCount * 0.01);
    p5.plane(1000);
    p5.pop();*/
    for (let i = 0; i < DRAWING_WIDTH; i += 1 / PIXEL_DENSITY) {
      for (let j = 0; j < DRAWING_HEIGHT; j += 1 / PIXEL_DENSITY) {
        const xNorm = (i + n) / DRAWING_WIDTH;
        const yNorm = (j + m * 10) / DRAWING_HEIGHT;
        const value =
          0.2 * Math.cos(n * Math.PI * xNorm) * Math.cos(m * Math.PI * yNorm) -
          Math.cos(m * Math.PI * xNorm) * Math.cos(n * Math.PI * yNorm);
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

    /*

    let d = p5.pixelDensity();
    console.log(d);

    // Calculate the halfway index in the pixels array.
    let halfImage = 4 * (d * CANVAS_WIDTH) * ((d * CANVAS_HEIGHT) / 2);

    // Make the top half of the canvas red.
    for (let i = 0; i < halfImage; i += 4) {
      // Red.
      p5.pixels[i] = 255;
      // Green.
      p5.pixels[i + 1] = 0;
      // Blue.
      p5.pixels[i + 2] = 0;
      // Alpha.
      p5.pixels[i + 3] = 255;
    }*/

    // Update the canvas.

    p5.updatePixels();

    //p5.filter(p5.BLUR, 1);
    p5.filter(p5.DILATE);
  };
}

export function AnimatedBackground() {
  return <DynamicReactP5Wrapper sketch={sketch} />;
}

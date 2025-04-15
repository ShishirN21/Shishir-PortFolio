import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// Register GSAP plugins (free version)
gsap.registerPlugin(
  ScrollTrigger,
  ScrollToPlugin,
  TextPlugin,
  Draggable,
  MotionPathPlugin
);

export { gsap }; 
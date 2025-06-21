import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import useStore from "@src/store/store";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const PageScroll = ({ children }) => {
  const changePage = useStore((state) => state.changePage);
  const load = useStore((state) => state.load);

  const parentRef = React.useRef(null);
  let prevAnimation = null;

  const goToSection = (index) => {
    if (prevAnimation) {
      prevAnimation.kill();
    }

    prevAnimation = gsap.to(window, {
      duration: 1,
      scrollTo: { y: index * window.innerHeight },
      ease: "power2.inOut",
    });
  };

  React.useEffect(() => {
    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress.toFixed(2);

        if (progress > 0.7 && progress <= 1) {
          changePage(2);
        } else if (progress > 0.3 && progress < 0.7) {
          changePage(1);
        } else {
          changePage(0);
        }
      },
      snap: {
        snapTo: [0, 0.5, 1],
        delay: 0.001,
        duration: { min: 0.3, max: 1.5 },
        inertia: false,
      },
    });

    window.setTimeout(() => {
      load(true);
    }, 1000);
  }, [parentRef.current, children]);

  return <div ref={parentRef}>{children}</div>;
};

export default PageScroll;

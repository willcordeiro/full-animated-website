import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="Sobre" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">


        <AnimatedTitle
          title="Uma parte <br /> do <b>m</b>undo"
          containerClass="mt-5 !text-black text-center"
        />
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image border-4 border-black rounded-xl overflow-hidden">
          <img
            src="https://images.pexels.com/photos/15432954/pexels-photo-15432954.jpeg"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

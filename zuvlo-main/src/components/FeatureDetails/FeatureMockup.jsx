import { useRef } from "react";
import PropTypes from "prop-types";
import mockup1 from "../../assets/images/web-feature-img3.png";
import mockup2 from "../../assets/images/web-feature-img4.png";
import mockup3 from "../../assets/images/web-feature-img5.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

import "./animation.css";

const FeatureMockup = ({ elements }) => {
  const img1 = useRef();
  const img2 = useRef();
  const img3 = useRef();

  const imgHolder = useRef();

  const container = useRef();

  // image animation
  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.to(img2.current, {
        scrollTrigger: {
          trigger: elements[1].current,
          start: "-15% 30%",
          end: "20% 40%",
          toggleActions: "play complete reverse reverse",
          // markers: {
          //   startColor: "lightBlue",
          //   endColor: "lightBlue",
          // },
        },
        top: "0%",
        duration: 1,
        ease: "Power1.easeInOut",
      }).to(img3.current, {
        scrollTrigger: {
          trigger: elements[2].current,
          start: "-5% 30%",
          end: "10% 40%",
          toggleActions: "play complete reverse reverse",
          // markers: {
          //   startColor: "blue",
          //   endColor: "blue",
          // },
        },
        top: "0%",
        duration: 1,
        ease: "Power1.easeInOut",
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="sticky top-5 pt-28 ">
      {/* image holder */}
      <div
        ref={imgHolder}
        className="w-[320px] h-[680px] rounded-[30px] overflow-hidden ft-animation-holder relative "
      >
        <img
          ref={img1}
          src={mockup1}
          className="w-full h-full object-cover active"
          alt=""
        />
        <img
          ref={img2}
          src={mockup2}
          className="w-full h-full object-cover"
          alt=""
        />
        <img
          ref={img3}
          src={mockup3}
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default FeatureMockup;

FeatureMockup.propTypes = {
  sectionContainer: PropTypes.node,
  elements: PropTypes.array,
};

import SignUpBtn from "../Buttons/SignUpBtn";

import lineThrough from "../../assets/images/avatar-line-through.png";
import charAvatar from "../../assets/images/content-creators-avatar-group.png";

import mockup1 from "../../assets/images/web-feature-img1.png";
import mockup2 from "../../assets/images/web-feature-img2.png";

import flower from "../../assets/images/flower-shadow-banner.png";
import FeaturedIn from "./FeaturedIn";

// import styles
import "./hero-banner.css";

const HeroBanner = () => {
  const handleMouseMove = (event) => {
    // storing the mouse event
    const xPosition = event.clientX;
    const yPosition = event.clientY;

    // controlling the rotation power
    const rotatePower = 8;

    // figuring out the middle points of the main hero banner
    const mainArea = document.querySelector("#hero--banner");

    const middleX = mainArea.clientWidth / 2;
    const middleY = mainArea.clientHeight / 2;

    // finding out the two elements that i want to rotate
    let mockup1 = document.querySelector("#hero--banner--mockup .mockup-one");
    let mockup2 = document.querySelector("#hero--banner--mockup .mockup-two");

    // first removing the smooth class from these elements
    mockup1.classList.remove("smooth");
    mockup2.classList.remove("smooth");

    // figuring out the roatating angle in percentage by mulitplying with rotatepower

    // increasing the rotate power on roatation
    const rotateX = ((xPosition - middleX) / middleX) * (rotatePower * 3);
    const rotateY = ((yPosition - middleY) / middleY) * (rotatePower * 3);

    // keeping it same in the translate3d effect
    const translateX = ((xPosition - middleX) / middleX) * rotatePower;
    const translateY = ((yPosition - middleY) / middleY) * rotatePower;

    // adding rotation to the elements
    mockup1.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) perspective(5000px) translate3d(${translateX}px, ${translateY}px,0px )`;
    mockup2.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) perspective(5000px) translate3d(${translateX}px, ${translateY}px,0px )`;
  };

  const handleMouseLeave = () => {
    // finding out the two elements that i want to rotate
    let mockup1 = document.querySelector("#hero--banner--mockup .mockup-one");
    let mockup2 = document.querySelector("#hero--banner--mockup .mockup-two");

    // adding rotation to the elements
    mockup1.style.transform = `rotateX(0deg) rotateY(0deg) translate3d(0px, 0px, 0px)`;
    mockup2.style.transform = `rotateX(0deg) rotateY(0deg) translate3d(0px, 0px, 0px)`;

    mockup1.classList.add("smooth");
    mockup2.classList.add("smooth");
  };

  return (
    <section
      id="hero--banner"
      className="container pt-12  xl:pt-[160px] pb-16 xl:pb-[100px]  relative flex flex-col items-center  xl:block "
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* text area starts */}
      <div className="xl:max-w-[70%] pb-0 xl:pb-[300px]">
        <h3 className=" text-[32px] xl:text-[80px] font-bold text-black leading-[48px] xl:leading-[100px] ">
          Join Forces, Innovate Freely, and Reap the Rewards
        </h3>

        {/* text content */}
        <div className="  xl:max-w-[450px] pt-4 xl:pt-16 space-y-6 xl:space-y-9">
          <p className=" text-base  xl:text-[20px] leading-7 xl:leading-8 text-[#4c4b49]  ">
            The creator subscription platform for the future. Sign up before the
            end of the month &{" "}
            <span className="text-textBlack">take home 85% for 3 months!</span>
          </p>

          {/* button wrapper */}
          <div className="flex gap-4">
            <SignUpBtn />
            <SignUpBtn version="login" />
          </div>
        </div>
      </div>

      {/* mockup and graphics */}
      <div className="absolute right-0 bottom-32 w-[200px] h-[800px] hidden xl:block">
        {/* first graphics */}
        <img
          className="w-full h-full object-contain"
          src={lineThrough}
          alt=""
        />

        {/* content creators graphics */}
        <div className="absolute -left-[100px] top-[50%]  -translate-y-[50%]  min-w-fit">
          <p className="text-[20px] font-semibold leading-6 text-[#475467] text-nowrap">
            Trusted by 60,000+ Creators
          </p>

          <img
            className="w-[180px] h-10 object-contain"
            src={charAvatar}
            alt=""
          />
        </div>
      </div>

      {/* mobile mockup group */}
      <div
        id="hero--banner--mockup"
        className=" relative -mt-[50px] mb-[600px] xl:mt-0 xl:mb-0 xl:absolute top-0 right-auto z-50 w-fit left-[18%] -translate-x-[18%]   xl:top-[160px]  xl:right-[300px] xl:left-auto xl:translate-x-0  "
      >
        {/* first image */}
        <img
          className=" min-w-[300px] max-w-[300px]  xl:min-w-[485px] object-contain xl:object-fill xl:max-w-[485px] h-[660px] mockup mockup-one absolute -top-6 -right-12 xl:right-5 z-30 "
          src={mockup1}
          alt=""
        />
        {/* second image */}
        <img
          className=" min-w-[250px] max-w-[250px] object-contain xl:object-fill xl:min-w-[350px] xl:max-w-[350px] h-[350px]  mockup mockup-two absolute top-20 -left-[120px]  xl:top-14 xl:-right-14 z-20 xl:left-auto  "
          src={mockup2}
          alt=""
        />
      </div>

      {/* flower shadow */}
      <div className="absolute z-10 bottom-28 left-1/2 -translate-x-1/2 w-[440px] h-[440px] hidden xl:block">
        <img className="w-full h-full object-contain" src={flower} alt="" />
      </div>

      {/* featured In Area */}
      <FeaturedIn />
    </section>
  );
};

export default HeroBanner;

import feature1 from "../../assets/images/marketing-feature1.png";
import feature2 from "../../assets/images/marketing-feature2.png";
import SignUpBtn from "../Buttons/SignUpBtn";

import banner from "../../assets/images/sign-up-banner.png";

const MarketingArea = () => {
  const titleStyles =
    " text-[28px] leading-[32px] xl:text-[40px] font-semibold xl:leading-[52px] text-center pb-4 xl:pb-0 ";
  const subtitleStyles =
    " text-base xl:text-[18px] leading-6 xl:leading-7 text-center";

  return (
    <section className="container pb-14 xl:pb-[150px] ">
      <h3 className=" text-[32px]  xl:text-[55px] font-semibold leading-[48px] text-center xl:leading-[67px] max-w-[1020px] mx-auto pb-14 xl:pb-[90px]  ">
        {" "}
        Master Online Marketing with Ease and Independence, Completely Free{" "}
      </h3>

      {/* content wrapper */}
      <div className="flex gap-5 flex-col xl:flex-row ">
        <div className=" px-8 xl:px-[60px] pt-8 xl:pt-[64px] pb-[200px] xl:pb-[250px] rounded-3xl bg-[#E4F1FF] flex-1 relative overflow-hidden ">
          <div className="max-w-[380px] mx-auto ">
            <h4
              style={{
                color: "#2A496B",
              }}
              className={titleStyles}
            >
              Join a platform that <span className="text-pinkRed">cares</span>{" "}
            </h4>

            <p
              style={{
                color: "#2A496B",
              }}
              className={subtitleStyles}
            >
              Where marketers and recruiters exchange insights on a daily basis{" "}
            </p>
          </div>

          {/* images */}
          <div className=" w-[350px] h-[220px]  xl:w-[720px] xl:h-[240px] absolute left-1/2 -translate-x-1/2 bottom-0  ">
            <img src={feature1} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="px-8 xl:px-[60px] pt-8 xl:pt-[64px] pb-[250px] rounded-3xl bg-[#E4E7FF] flex-1 relative overflow-hidden">
          <div className="max-w-[380px] mx-auto mb-4">
            <h4
              style={{
                color: "#2A3062",
              }}
              className={titleStyles}
            >
              Simple & easy to get <span className="text-pinkRed">started</span>{" "}
            </h4>

            <p
              style={{
                color: "#2A3062",
              }}
              className={subtitleStyles}
            >
              The popular 60-minute mobile funnel crash course, moderated live
            </p>
          </div>

          <a href="#" className="flex w-fit mx-auto gap-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <g clipPath="url(#clip0_78_919)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 16.2812C12.4183 16.2812 16 12.6996 16 8.28125C16 3.86297 12.4183 0.28125 8 0.28125C3.58172 0.28125 0 3.86297 0 8.28125C0 12.6996 3.58172 16.2812 8 16.2812ZM11.7071 7.57414L8.70711 4.57414C8.31658 4.18362 7.68342 4.18362 7.29289 4.57414C6.90237 4.96467 6.90237 5.59783 7.29289 5.98836L8.58579 7.28125H5C4.44772 7.28125 4 7.72896 4 8.28125C4 8.83353 4.44772 9.28125 5 9.28125H8.58579L7.29289 10.5742C6.90237 10.9647 6.90237 11.5978 7.29289 11.9883C7.68342 12.3788 8.31658 12.3788 8.70711 11.9883L11.7071 8.98836C12.0976 8.59783 12.0976 7.96467 11.7071 7.57414Z"
                  fill="#2A3062"
                />
              </g>
              <defs>
                <clipPath id="clip0_78_919">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0 0.28125)"
                  />
                </clipPath>
              </defs>
            </svg>

            <span className="text-[20px] leading-8 font-medium text-[#2A3062] ">
              Learn more
            </span>
          </a>

          {/* images */}
          <div className=" w-[350px] h-[220px]  xl:w-[720px] xl:h-[240px] absolute left-1/2 -translate-x-1/2 -bottom-5 overflow-hidden ">
            <img src={feature2} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* sign up banner */}
      <div className="mt-4 w-full py-6 xl:py-[75px] px-6 xl:px-[58px]  rounded-3xl bg-[#FAF1E3] relative overflow-hidden">
        <div className="max-w-[782px] text-center mb-[250px] xl:mb-0">
          <h3 className=" text-[32px] leading-[48px]  xl:text-[64px] xl:leading-[84px] font-semibold text-[#4F340A]  ">
            Sign up this month, <span className="text-pinkRed">earn more</span>{" "}
          </h3>

          <p className=" text-[18px] leading-7 text-[#4F340A] max-w-[412px] mx-auto pb-5 xl:pb-[55px] ">
            {" "}
            Our Head of Content, Leni, guides you through your first successful
            funnel{" "}
          </p>

          <SignUpBtn size="mx" />
        </div>

        {/* images */}
        <div className=" w-[350px] h-[300px]  xl:w-[575px] xl:h-[405px] absolute left-1/2 -translate-x-1/2 xl:translate-x-0 xl:left-auto xl:right-8 -bottom-8 xl:bottom-0 ">
          <img
            src={banner}
            alt=""
            className="w-full h-full object-contain xl:object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default MarketingArea;

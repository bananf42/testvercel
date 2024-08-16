import logo from "../../assets/images/main-logo.png";

import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";

const Footer = () => {
  const linkStyle = `p-1.5 flex items-center justify-center rounded-lg bg-[#FF2919] `;
  const linkIconStyle = `text-[22px] xl:text-[28px] text-white`;

  const inputStyle = `px-4 py-3 w-full rounded-lg bg-[#1F1F1F] border border-solid border-[#484848] text-[14px] leading-5 text-[#A1A1A1] focus:outline-none `;

  return (
    <footer className="container pt-14 xl:pt-[115px] pb-5 relative overflow-hidden ">
      {/* top area */}
      <div className="flex flex-col gap-8 xl:gap-0 xl:flex-row items-center justify-between pb-10 border-b border-solid border-[#484848] ">
        {/* left  */}
        <div className="space-y-6">
          <div className="mx-auto xl:mx-0 w-[200px] h-[30px] xl:w-[245px] xl:h-[36px] ">
            <img
              className="w-full h-full object-contain xl:object-cover"
              src={logo}
              alt=""
            />
          </div>

          {/* links wrapper */}
          <div className="flex items-center gap-6 ">
            <a className={linkStyle} href="#">
              <span className={linkIconStyle}>
                <FaGithub />
              </span>
            </a>
            <a className={linkStyle} href="#">
              <span className={linkIconStyle}>
                <BsTwitterX />
              </span>
            </a>
            <a className={linkStyle} href="#">
              <span className={linkIconStyle}>
                <FaLinkedin />
              </span>
            </a>
            <a className={linkStyle} href="#">
              <span className={linkIconStyle}>
                <FaSlack />
              </span>
            </a>
          </div>
        </div>

        {/* right */}
        <div className=" px-5 xl:px-10 py-7 bg-[#262626] rounded-3xl max-w-[605px] ">
          <p className="text-base leading-6  text-[#A1A1A1]">
            Sign up for our newsletter and join the growing Rig.dev community.
          </p>

          {/* newsletter form */}
          <form className="pt-6">
            <div className="flex flex-col xl:flex-row items-center gap-4 xl:gap-2.5">
              <input
                type="text"
                name="first name"
                id="first-name"
                placeholder="First Name"
                className={inputStyle}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className={inputStyle}
              />

              {/* submit button */}
              <button className="min-w-fit flex items-center justify-center px-6 py-3 text-base leading-6 text-[#F7F6F2] bg-[linear-gradient(90deg,#FF2919_0%,#BE0D00_100%)] rounded-lg font-medium ">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* bottom */}
      <div className=" pt-5 xl:pt-10 flex flex-wrap justify-center xl:justify-start items-center  gap-y-4 gap-3 xl:gap-6 text-[14px] text-textBlackV2 leading-5  ">
        <span>© {new Date().getFullYear()} Rig.Dev ApS</span>

        <a href="#">Terms of Service</a>
        <a href="#">Privacy & Cookies policy</a>
      </div>

      {/* footer shape */}
      <div className="w-[1255px] h-[1255px] rounded-[1255px] bg-[#FF2919] blur-[127px] absolute left-1/2 -translate-x-1/2 -top-40 opacity-[0.21] -z-10"></div>

      {/* star */}
      <div className="absolute left-[45%] -translate-x-[45%] top-11  z-10 hidden xl:block ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
        >
          <path
            d="M17 0C17.3319 9.24787 24.7521 16.6681 34 17C24.7521 17.3319 17.3319 24.7521 17 34C16.6681 24.7521 9.24787 17.3319 0 17C9.24787 16.6681 16.6681 9.24787 17 0Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="absolute left-[50%] -translate-x-[50%] top-16 z-10 hidden xl:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="57"
          height="57"
          viewBox="0 0 57 57"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28.5 4.07665L27.4354 10.5399C26.0071 19.2111 19.2109 26.0073 10.5397 27.4356L4.07644 28.5002L10.5397 29.5648C19.2109 30.9931 26.0071 37.7893 27.4354 46.4605L28.5 52.9238L29.5646 46.4605C30.9929 37.7893 37.7891 30.9931 46.4603 29.5648L52.9236 28.5002L46.4603 27.4356C37.7891 26.0073 30.9929 19.2111 29.5646 10.5399L28.5 4.07665ZM26.4487 10.3774L28.0066 0.918945L28.9934 0.918945L30.5513 10.3774C31.9099 18.6256 38.3746 25.0903 46.6228 26.4489L56.0813 28.0069V28.9936L46.6228 30.5515C38.3746 31.9101 31.9099 38.3748 30.5513 46.623L28.9934 56.0815H28.0066L26.4487 46.623C25.0901 38.3748 18.6254 31.9101 10.3772 30.5515L0.918739 28.9936L0.918739 28.0069L10.3772 26.4489C18.6254 25.0903 25.0901 18.6256 26.4487 10.3774Z"
            fill="white"
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;

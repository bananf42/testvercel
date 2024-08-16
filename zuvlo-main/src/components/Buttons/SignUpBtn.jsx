import PropTypes from "prop-types";

const SignUpBtn = ({ size = "sm", version = "sign-up" }) => {
  return (
    <a
      className={` font-medium rounded-[160px] text-base leading-5 ${
        size === "mx" ? "px-7 py-3 text-[18px]" : " px-8 py-4"
      } ${
        version === "login"
          ? "bg-[rgba(220,2,192,0.24)] text-textBlack"
          : "text-white bg-[linear-gradient(270deg,#BE0D00_0%,#FF2919_100%)]"
      } `}
      href="#"
    >
      {" "}
      {version === "login" ? "Login" : "Sign Up"}
    </a>
  );
};

SignUpBtn.propTypes = {
  size: PropTypes.string,
  version: PropTypes.string,
};

export default SignUpBtn;

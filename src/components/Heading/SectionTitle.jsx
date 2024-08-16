import PropTypes from "prop-types";

const SectionTitle = ({ children = "Section Title", color }) => {
  return (
    <h3
      style={{
        color: color ? `${color}` : "",
      }}
      className={`text-center text-[32px] leading-[42px] xl:text-[64px] font-bold  xl:leading-[84px] ${
        color ? `text-[${color}]` : `text-textBlack`
      }  `}
    >
      {children}
    </h3>
  );
};

SectionTitle.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
};

export default SectionTitle;

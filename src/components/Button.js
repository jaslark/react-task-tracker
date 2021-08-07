import PropTypes from "prop-types";

const Button = ({ color, text, onAdd }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      onClick={onAdd}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelBlue",
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;

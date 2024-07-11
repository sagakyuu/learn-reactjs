import PropTypes from "prop-types";

export default function Button({
  children = "click",
  variant = "bg-black",
  onClick,
  type,
}) {
  return (
    <button
      className={`${variant} text-white px-3 py-2 rounded`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

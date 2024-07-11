import PropTypes from "prop-types";

export default function Button({ children = "click", variant = "bg-black" }) {
  return (
    <button className={`${variant} text-white px-3 py-2 rounded`}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
};

import PropTypes from "prop-types";

export default function Label({ name, children }) {
  return (
    <label htmlFor={name} className="font-semibold">
      {children}
    </label>
  );
}

Label.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  type: PropTypes.string,
};

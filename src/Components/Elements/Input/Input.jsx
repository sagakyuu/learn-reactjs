import PropTypes from "prop-types";

export default function Input({ type, name, placeholder }) {
  return (
    <input
      type={type}
      name={name}
      id={name}
      className="px-2 py-1  focus:outline-blue-600 rounded-sm outline-1 outline-blue-500"
      placeholder={placeholder}
    />
  );
}

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

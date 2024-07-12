import PropTypes from "prop-types";
import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, name, placeholder } = props;
  return (
    <input
      type={type}
      name={name}
      id={name}
      className="px-2 py-1  focus:outline-blue-600 focus:outline-2 rounded-sm outline outline-1 outline-blue-500"
      placeholder={placeholder}
      ref={ref}
    />
  );
});

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;

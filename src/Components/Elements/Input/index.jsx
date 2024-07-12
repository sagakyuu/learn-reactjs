import PropTypes from "prop-types";
import Input from "./Input";
import Label from "./Label";
import { forwardRef } from "react";

const Inputs = forwardRef(({ children, name, type, placeholder }, ref) => {
  return (
    <div className="flex flex-col gap-1">
      <Label name={name}>{children}</Label>
      <Input name={name} type={type} placeholder={placeholder} ref={ref} />
    </div>
  );
});

Inputs.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Inputs;

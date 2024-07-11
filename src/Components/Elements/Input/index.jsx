import PropTypes from "prop-types";
import Input from "./Input";
import Label from "./Label";

export default function Inputs({ children, name, type, placeholder }) {
  return (
    <div className="flex flex-col gap-1">
      <Label name={name}>{children}</Label>
      <Input name={name} type={type} placeholder={placeholder} />
    </div>
  );
}

Inputs.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

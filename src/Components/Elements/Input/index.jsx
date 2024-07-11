import Input from "./Input";
import Label from "./Label";

export default function Inputs({ children, name, type }) {
  return (
    <div>
      <Label name={name}>{children}</Label>
      <Input id={name} name={name} type={type} />
    </div>
  );
}

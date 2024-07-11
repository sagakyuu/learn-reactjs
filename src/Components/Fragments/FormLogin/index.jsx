import Button from "../../Elements/Button";
import Inputs from "../../Elements/Input";

export default function FormLogin() {
  return (
    <>
      <Inputs type={"email"} name={"name"} placeholder={"example@mail.com"}>
        Email
      </Inputs>
      <Inputs type={"password"} name={"password"} placeholder={"********"}>
        Password
      </Inputs>
    </>
  );
}

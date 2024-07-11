import Inputs from "../../Elements/Input";

export default function FormRegister() {
  return (
    <>
      <Inputs
        type={"text"}
        name={"username"}
        placeholder={"insert your username here..."}
      >
        Username
      </Inputs>
      <Inputs type={"email"} name={"name"} placeholder={"example@mail.com"}>
        Email
      </Inputs>
      <Inputs type={"password"} name={"password"} placeholder={"********"}>
        Password
      </Inputs>
      <Inputs
        type={"password"}
        name={"confirmPassword"}
        placeholder={"********"}
      >
        Confirm Password
      </Inputs>
    </>
  );
}

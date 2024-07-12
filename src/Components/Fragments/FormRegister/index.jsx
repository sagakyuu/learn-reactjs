import { useEffect, useRef } from "react";
import Inputs from "../../Elements/Input";

export default function FormRegister() {
  const userNameRef = useRef(null);

  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  return (
    <>
      <Inputs
        type={"text"}
        name={"username"}
        placeholder={"insert your username here..."}
        ref={userNameRef}
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

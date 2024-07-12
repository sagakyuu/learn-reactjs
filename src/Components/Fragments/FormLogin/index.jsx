import { useEffect, useRef } from "react";
import Inputs from "../../Elements/Input";

export default function FormLogin() {
  const emailRef = useRef(null);
  console.log(emailRef);
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <>
      <Inputs
        type={"email"}
        name={"email"}
        placeholder={"example@mail.com"}
        ref={emailRef}
      >
        Email
      </Inputs>
      <Inputs type={"password"} name={"password"} placeholder={"********"}>
        Password
      </Inputs>
    </>
  );
}

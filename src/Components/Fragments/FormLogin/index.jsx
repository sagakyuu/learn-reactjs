import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import Inputs from "../../Elements/Input";

export default function FormLogin({ failedData }) {
  const usernameRef = useRef(null);
  console.log(usernameRef);
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <>
      <p className="text-red-600 text-sm text-center">{failedData}</p>
      <Inputs
        type={"text"}
        name={"username"}
        placeholder={"insert tour username here ..."}
        ref={usernameRef}
      >
        Username
      </Inputs>
      <Inputs type={"password"} name={"password"} placeholder={"********"}>
        Password
      </Inputs>
    </>
  );
}

FormLogin.propTypes = {
  failedData: PropTypes.string,
};

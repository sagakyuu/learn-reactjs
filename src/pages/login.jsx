import { useState } from "react";
import FormLogin from "../Components/Fragments/FormLogin";
import AuthLayout from "../Components/Layouts/AuthLayout";
import { LoginService } from "../lib/service/auth.service";

export default function Login() {
  const [loginFailed, setLoginFailed] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    /*  const email = e.target.email.value;
    const password = e.target.password.value;
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    window.location.href = "/product"; */

    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    console.log(data);

    LoginService(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/product";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  return (
    <div className="min-h-screen w-full  flex flex-col justify-center items-center">
      <AuthLayout title={"Login"} onSubmit={loginHandler}>
        <FormLogin failedData={loginFailed} />
      </AuthLayout>
    </div>
  );
}

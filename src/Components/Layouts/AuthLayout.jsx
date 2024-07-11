import PropTypes from "prop-types";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";

export default function AuthLayout({ children, title }) {
  return (
    <form action="" className="flex flex-col gap-3 max-w-xl px-5 py-8 ">
      <div>
        <h1 className="text-2xl text-blue-600 font-bold mb-3">
          {title.toUpperCase()}
        </h1>
        <p className="">Welcome please enter your details</p>
      </div>
      {children}
      <div className="flex flex-col justify-end">
        <Button variant="bg-sky-500">
          {title === "login" ? "Login" : "Register"}
        </Button>
        <p className="text-center">
          {title === "login" ? "Belum" : "Sudah"} Punya akun?{" "}
          <Link
            to={`/${title === "login" ? "register" : "login"}`}
            className="text-blue-900 underline"
          >
            {title === "login" ? "register" : "login"}
          </Link>
        </p>
      </div>
    </form>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

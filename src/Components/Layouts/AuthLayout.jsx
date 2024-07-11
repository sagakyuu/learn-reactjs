import PropTypes from "prop-types";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";

export default function AuthLayout({ children, title, onSubmit }) {
  return (
    <form
      action=""
      className="flex flex-col gap-3 max-w-xl px-5 py-8 "
      onSubmit={onSubmit}
    >
      <div>
        <h1 className="text-2xl text-blue-600 font-bold mb-3">{title}</h1>
        <p className="">Welcome please enter your details</p>
      </div>
      {children}
      <div className="flex flex-col justify-end">
        <Button variant="bg-sky-500" type={"submit"}>
          {title.toLowerCase() === "login" ? title : "Register"}
        </Button>
        <p className="text-center text-sm font-semibold mt-2">
          {title.toLowerCase() === "login" ? "Don't" : "Alredy"} have an
          account?{" "}
          <Link
            to={`/${title.toLowerCase() === "login" ? "register" : "login"}`}
            className="text-blue-900 underline text-base font-bold"
          >
            {title.toLowerCase() === "login" ? "Register" : "Login"}
          </Link>
        </p>
      </div>
    </form>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  onSubmit: PropTypes.func,
};

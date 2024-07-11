import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between px-3 py-2">
      <h1>Navbar</h1>
      <ul className="flex gap-3">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/product"}>Product</Link>
        </li>
      </ul>
      <Link to={"/login"}>Sign In</Link>
    </nav>
  );
}

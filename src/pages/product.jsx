import { Link } from "react-router-dom";
import CardProduct from "../Components/Fragments/CardProduct";
import Button from "../Components/Elements/Button";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    images: "/images/img1.jpg",
    desc: "Speatu Baru lohhh",
    price: 1000000,
  },
  {
    id: 2,
    name: "Sepatu Lama",
    images: "/images/img1.jpg",
    desc: "Speatu Lama lohhh",
    price: 1000000,
  },
  {
    id: 3,
    name: "Sepatu Tranding",
    images: "/images/img1.jpg",
    desc: "ini adalah sepatu trendin",
    price: 1000000,
  },
];

const email = localStorage.getItem("email");

export default function Product() {
  function handleLogout() {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  }

  return (
    <div className="">
      <nav className="w-full flex justify-between px-3 py-2 bg-blue-600 items-center">
        <h1>Navbar</h1>
        <ul className="flex gap-3">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/product"}>Product</Link>
          </li>
        </ul>

        <div className="flex gap-2 items-center">
          <p className="text-white">{email}</p>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      </nav>
      <div className="flex justify-center py-5 flex-wrap gap-3">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header src={product.images} />
            <CardProduct.Body title={product.name}>
              {product.desc}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </div>
  );
}

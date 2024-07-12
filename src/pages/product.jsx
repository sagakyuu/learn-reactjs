import { Link } from "react-router-dom";
import CardProduct from "../Components/Fragments/CardProduct";
import Button from "../Components/Elements/Button";
import { useEffect, useRef, useState } from "react";
import { getProduct } from "../lib/service/product.service";

const email = localStorage.getItem("email");

export default function Product() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    getProduct((data) => setProducts(data));
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, itm) => {
        const product = products.find((i) => i.id === itm.id);
        return acc + product.price * itm.qty;
      }, 0);

      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  function handleLogout() {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  }

  const handlerAddToCart = (id) => {
    if (cart.find((it) => it.id === id)) {
      setCart(cart.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));
    } else {
      setCart([
        ...cart,
        {
          id,
          qty: 1,
        },
      ]);
    }
  };

  /*  // ! useRef
  const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  const handlerAddToCartRef = (id) => {
    cartRef.current = [...cartRef.current, { id, qty: 1 }];
    localStorage.setItem("cart", JSON.stringify(cartRef.current));
  };
 */
  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <div className="pb-10">
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
      <div className="flex p-5 h-full">
        <div className="w-2/3 flex flex-wrap gap-1">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header src={product.image} />
                <CardProduct.Body title={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  id={product.id}
                  onClick={handlerAddToCart}
                />
              </CardProduct>
            ))}
        </div>
        <div className="w-1/3">
          <h1 className="text-2xl font-bold text-blue-600 px-5">Cart</h1>
          <div className="">
            <table className="text-right table-auto border border-spacing-x-5 ">
              <thead className="border">
                <tr>
                  <th className="border px-2 border-black">Name</th>
                  <th className="border px-2 border-black">Price</th>
                  <th className="border px-2 border-black">Qty</th>
                  <th className="border px-2 border-black">Total</th>
                </tr>
              </thead>
              <tbody>
                {products.length > 0 &&
                  cart.map((i) => {
                    const product = products.find((v) => v.id === i.id);
                    return (
                      <tr key={i.id} className="border">
                        <td className="border px-2 border-black">
                          {product.title.substring(0, 20)} ...
                        </td>
                        <td className="border px-2 border-black">
                          $
                          {product.price.toLocaleString("us-US", {
                            styles: "currency",
                            currency: "USD",
                          })}
                        </td>
                        <td className="border px-2 border-black">{i.qty}</td>
                        <td className="border px-2 border-black">
                          $
                          {(product.price * i.qty).toLocaleString("us-US", {
                            styles: "currency",
                            currency: "USD",
                          })}
                        </td>
                      </tr>
                    );
                  })}
                <tr className="px-2" ref={totalPriceRef}>
                  <td className="border border-black">Total Price</td>
                  <td colSpan={3} className="border border-black">
                    $
                    {products.length > 0 &&
                      totalPrice.toLocaleString("us-US", {
                        styles: "currency",
                        currency: "USD",
                      })}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

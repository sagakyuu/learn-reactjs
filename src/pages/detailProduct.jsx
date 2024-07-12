import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from "../lib/service/product.service";
import Button from "../Components/Elements/Button";

export default function DetailProduct() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getProduct(id, (res) => {
      setProduct(res);
    });
  }, [id]);

  console.log(product);

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      {product != {} && (
        <div className="flex gap-4 flex-col max-w-sm border px-5 py-4">
          <div className="flex justify-center items-center">
            <img src={product.image} alt="" className="aspect-auto w-80" />
          </div>
          <div className="">
            <h5>{product.title}</h5>
            <p>{product.description}</p>
            <div>
              <span>#{product.category}</span>
              {/* <span>{product.rating.rate}</span> */}
              {/* <span>🛒{product.rating.count}</span> */}
            </div>
            <div className="flex justify-between items-center">
              <p>${product.price}</p>
              <Button>Add To 🛒</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

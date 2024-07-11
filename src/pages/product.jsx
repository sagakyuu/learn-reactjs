import CardProduct from "../Components/Fragments/CardProduct";

export default function Product() {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header src={"/images/img1.jpg"} />
        <CardProduct.Body title={"Sepatu Baru"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          velit repellendus, officiis aut iste debitis omnis optio laborum nam
          quasi alias dolorem, ea enim illo perferendis minima rem reprehenderit
          deserunt!
        </CardProduct.Body>
        <CardProduct.Footer price={1000000} />
      </CardProduct>
    </div>
  );
}

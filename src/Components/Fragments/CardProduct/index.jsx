import PropTypes from "prop-types";
import Button from "../../Elements/Button";

export default function CardProduct({ children }) {
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
      {children}
    </div>
  );
}

function Header({ src }) {
  return (
    <a href="">
      <img src={src} alt="product" className="p-8 rounded-l-lg" />
    </a>
  );
}

function Body({ title, children }) {
  return (
    <div className="px-5 pb-5 h-20">
      <h5 className="text-xl text-white">{title}</h5>
      <p className="text-sm text-white text-justify">{children}</p>
    </div>
  );
}

function Footer({ price, onClick, id }) {
  return (
    <div className="flex items-center justify-between px-5 pb-2">
      <span className="text-white text-xl font-bold">
        Rp{" "}
        {price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}
      </span>
      <Button variant="bg-blue-600" onClick={() => onClick(id)}>
        Add to cart
      </Button>
    </div>
  );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

Header.propTypes = {
  src: PropTypes.string,
};

Body.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
};

Footer.propTypes = {
  price: PropTypes.number,
  onClick: PropTypes.func,
  id: PropTypes.number,
};

CardProduct.propTypes = {
  children: PropTypes.node,
};

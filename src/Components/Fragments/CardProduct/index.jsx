import PropTypes from "prop-types";
import Button from "../../Elements/Button";
import { Link } from "react-router-dom";

export default function CardProduct({ children }) {
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
      {children}
    </div>
  );
}

function Header({ src, to }) {
  return (
    <Link to={to}>
      <img
        src={src}
        alt="product"
        className="p-8 rounded-l-lg aspect-square w-96 object-fill"
      />
    </Link>
  );
}

function Body({ title, children, to }) {
  return (
    <div className="px-5 pb-5 ">
      <Link to={to}>
        <h5 className="text-xl text-white">{title}</h5>
      </Link>
      <p className="text-sm text-white text-justify">{children}</p>
    </div>
  );
}

function Footer({ price, onClick, id }) {
  return (
    <div className="flex items-center justify-between px-5 pb-2">
      <span className="text-white text-xl font-bold">
        $
        {price.toLocaleString("us-US", {
          styles: "currency",
          currency: "USD",
        })}
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
  to: PropTypes.string,
};

Body.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
  to: PropTypes.string,
};

Footer.propTypes = {
  price: PropTypes.number,
  onClick: PropTypes.func,
  id: PropTypes.number,
};

CardProduct.propTypes = {
  children: PropTypes.node,
};

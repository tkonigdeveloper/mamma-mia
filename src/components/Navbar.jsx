import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/formatPrice";

const Navbar = () => {
  const { total } = useCart();
  const token = false;

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <span className="navbar-brand fw-bold">Pizzería Mamma Mia!</span>

      <div className="d-flex gap-2">
        <Link to="/home" className="btn btn-sm btn-secondary">
          🍕 Home
        </Link>

        {token ? (
          <>
            <button className="btn btn-sm btn-secondary">🔓 Profile</button>
            <button className="btn btn-sm btn-secondary">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-sm btn-secondary">🔐 Login</button>
            <button className="btn btn-sm btn-secondary">🔐 Register</button>
          </>
        )}

        <Link to="/carrito" className="btn btn-sm btn-warning">
          🛒 Total: ${formatPrice(total)}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

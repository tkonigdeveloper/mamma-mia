import { formatPrice } from "../utils/formatPrice";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <span className="navbar-brand fw-bold">Pizzería Mamma Mia!</span>

      <div className="d-flex gap-2">
        <button className="btn btn-sm btn-secondary">🍕 Home</button>

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

        <button className="btn btn-sm btn-warning">
          🛒 Total: ${formatPrice(total)}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

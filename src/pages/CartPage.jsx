import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/formatPrice";

const CartPage = () => {
  const { cart, removeFromCart, total } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="container my-5 text-center">
        <h2>Tu carrito está vacío</h2>
        <p className="text-muted">Agrega algunas pizzas para continuar.</p>
        <button className="btn btn-danger" onClick={() => navigate("/home")}>
          Ver pizzas
        </button>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4">Tu Carrito 🛒</h2>

      {cart.map((item) => (
        <div key={item.id} className="card mb-3">
          <div className="row g-0 align-items-center">
            <div className="col-md-2">
              <img
                src={item.img}
                className="img-fluid rounded-start"
                alt={item.name}
                style={{ height: "100px", objectFit: "cover", width: "100%" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Pizza {item.name}</h5>
                <p className="card-text text-muted">
                  Cantidad: {item.quantity}
                </p>
                <p className="card-text fw-bold">
                  Subtotal: ${formatPrice(item.price * item.quantity)}
                </p>
              </div>
            </div>
            <div className="col-md-2 text-center">
              <button
                className="btn btn-outline-danger"
                onClick={() => removeFromCart(item.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="card mt-4">
        <div className="card-body d-flex justify-content-between align-items-center">
          <h4 className="mb-0">Total: ${formatPrice(total)}</h4>
          <div className="d-flex gap-2">
            <button
              className="btn btn-secondary"
              onClick={() => navigate("/home")}
            >
              Seguir comprando
            </button>
            <button className="btn btn-success">Pagar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

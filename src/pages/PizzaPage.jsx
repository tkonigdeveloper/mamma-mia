import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/formatPrice";
import pizzas from "../data/pizzas";

const PizzaPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const pizza = pizzas.find((p) => p.id === Number(id));

  if (!pizza) {
    return (
      <div className="container my-5 text-center">
        <h2>Pizza no encontrada</h2>
        <button className="btn btn-secondary mt-3" onClick={() => navigate("/home")}>
          Volver al inicio
        </button>
      </div>
    );
  }

  const handleAdd = () => {
    addToCart(pizza);
    navigate("/carrito");
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <img
              src={pizza.img}
              className="card-img-top"
              alt={pizza.name}
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h2 className="card-title">Pizza {pizza.name}</h2>
              <p className="text-muted">{pizza.desc}</p>

              <h5>Ingredientes:</h5>
              <ul>
                {pizza.ingredients.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>

              <p className="fs-4 fw-bold">Precio: ${formatPrice(pizza.price)}</p>

              <div className="d-flex gap-2">
                <button
                  className="btn btn-secondary"
                  onClick={() => navigate("/home")}
                >
                  ← Volver
                </button>
                <button className="btn btn-danger" onClick={handleAdd}>
                  Añadir al carrito 🛒
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaPage;

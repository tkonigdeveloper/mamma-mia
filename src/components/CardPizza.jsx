import { formatPrice } from "../utils/formatPrice";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card" style={{ width: "100%" }}>
      <img src={img} className="card-img-top" alt={name} style={{ height: "200px", objectFit: "cover" }} />
      <div className="card-body">
        <h5 className="card-title">Pizza {name}</h5>

        <p className="text-muted small mb-1">Ingredientes:</p>
        <p className="small">🍕 {ingredients.join(", ")}</p>

        <p className="fw-bold text-center">Precio: ${formatPrice(price)}</p>

        <div className="d-flex justify-content-between">
          <button className="btn btn-sm btn-outline-secondary">Ver Más 👀</button>
          <button className="btn btn-sm btn-outline-danger">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;

import napolitana from "../assets/napolitana.jpg";
import espanola from "../assets/espanola.jpg";
import peppe from "../assets/peppe.jpg";

const pizzas = [
  {
    id: 1,
    name: "Napolitana",
    price: 5950,
    ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
    img: napolitana,
    desc: "La clásica pizza napolitana con tomates frescos, mozzarella derretida, jamón y un toque de orégano.",
  },
  {
    id: 2,
    name: "Española",
    price: 6950,
    ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
    img: espanola,
    desc: "Una deliciosa combinación de cuatro quesos: mozzarella, gorgonzola, parmesano y provolone.",
  },
  {
    id: 3,
    name: "Pepperoni",
    price: 6950,
    ingredients: ["mozzarella", "pepperoni", "orégano"],
    img: peppe,
    desc: "Pizza clásica con abundante pepperoni, mozzarella fundida y orégano aromático.",
  },
];

export default pizzas;

import Header from "./Header";
import CardPizza from "./CardPizza";
import pizzas from "../data/pizzas";

const Home = () => {
  return (
    <div>
      <Header />

      <div className="container my-4">
        <div className="row g-4">
          {pizzas.map((pizza) => (
            <div className="col-md-4" key={pizza.id}>
              <CardPizza pizza={pizza} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

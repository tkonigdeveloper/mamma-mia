import Header from "./Header";
import CardPizza from "./CardPizza";

import napolitana from "../assets/napolitana.jpg"
import espanola from "../assets/espanola.jpg"
import peppe from "../assets/peppe.jpg"

const Home = () => {
  return (
    <div>
      <Header />

      <div className="container my-4">
        <div className="row g-4">
          <div className="col-md-4">
            <CardPizza
              name="Napolitana"
              price={5950}
              ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
              img={napolitana}
            />
          </div>
          <div className="col-md-4">
            <CardPizza
              name="Española"
              price={6950}
              ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
              img={espanola}
            />
          </div>
          <div className="col-md-4">
            <CardPizza
              name="Pepperoni"
              price={6950}
              ingredients={["mozzarella", "pepperoni", "orégano"]}
              img={peppe}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

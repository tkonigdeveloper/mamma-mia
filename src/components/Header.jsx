const Header = () => {
  return (
    <div
      className="text-white text-center py-5"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "220px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.6)",
        backgroundBlendMode: "darken",
      }}
    >
      <h1 className="fw-bold">¡Pizzería Mamma Mia!</h1>
      <p className="lead">¡Tenemos las mejores pizzas que podrás encontrar!</p>
    </div>
  );
};

export default Header;

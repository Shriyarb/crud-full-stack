import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>CRUD Dashboard</h1>

      <button
        className="nav-btn"
        onClick={() => navigate("/users")}
      >
        Users
      </button>

      <button
        className="nav-btn"
        onClick={() => navigate("/products")}
      >
        Products
      </button>

      <button
        className="nav-btn"
        onClick={() => navigate("/orders")}
      >
        Orders
      </button>
    </div>
  );
}

export default Home;
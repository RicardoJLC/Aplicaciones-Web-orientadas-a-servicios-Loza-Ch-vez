import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      <Link to="/login">Login</Link>
      <Button
        text="Iniciar sesión"
        action={() => navigate("/login")}
      />
    </div>
  );
}

export default Home;
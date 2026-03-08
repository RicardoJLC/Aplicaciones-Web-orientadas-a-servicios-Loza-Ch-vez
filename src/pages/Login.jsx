import { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../security/authContex";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    const user = username.trim();
    const pass = password;

    if (!user) {
      alert('Please enter a username');
      return;
    }
    if (!pass) {
      alert('Please enter a password');
      return;
    }

    try {
      setLoading(true);
      const success = await login(user, pass);
      setLoading(false);

      if (success) {
        navigate('/dashboard');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert('Error connecting to API');
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <div>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
        />
      </div>

      <div>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
      </div>

      <Button
        text={loading ? "Iniciando..." : "Iniciar sesión"}
        action={handleLogin}
        disabled={loading}
      />
    </div>
  );
}

export default Login;
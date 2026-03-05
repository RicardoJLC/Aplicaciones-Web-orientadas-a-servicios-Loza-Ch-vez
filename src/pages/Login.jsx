import { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../security/authContex";


function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if(username === ''){
            alert('Please enter a username');
            return;
        }

        if(password === ''){
            alert('Please enter a password');
            return;
        }

        alert(`Username: ${username} and Password: ${password}`)
        if(login(username, password)){
            navigate('/dashboard')
        }else{
            alert('Invalid credentials')
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <div>
                <input type="text" placeholder="Username" 
                 onChange={
                    (event) => setUsername(event.target.value)
                 }
                />
            </div>
            <div>
                <input type="password" placeholder="Password"
                onChange={
                    (event) => setPassword(event.target.value)
                }
                />
            </div>
            <Button text="Iniciar sesion"
            action={handleLogin} 
            />
        </div>
    )
}

export default Login;
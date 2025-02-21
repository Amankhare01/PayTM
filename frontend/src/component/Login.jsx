import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with", email, password);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        <h5>Don&#39;t have an account? <Link to="/signup">Sign up</Link></h5><br />
        <h5>Continue with Google <Link to="/">Google</Link></h5>
        
      </p>
    </div>
  );
};

export default Login;

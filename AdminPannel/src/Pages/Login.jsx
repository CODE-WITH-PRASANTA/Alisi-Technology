import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = login(email, password);

    if (success) {
      navigate("/dashboard", { replace: true });
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0f14]">
      <form
        onSubmit={handleSubmit}
        className="bg-[#0f141b] border border-slate-800 p-8 rounded-2xl w-[360px]"
      >
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Admin Login
        </h2>

        <input
          type="email"
          placeholder="Admin Email"
          className="w-full mb-4 px-4 py-2 rounded-lg bg-[#0b0f14] border border-slate-700 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 rounded-lg bg-[#0b0f14] border border-slate-700 text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold">
          Login
        </button>

        <p className="text-xs text-slate-400 mt-4 text-center">
          Demo Admin: admin@gmail.com / admin123
        </p>
      </form>
    </div>
  );
};

export default Login;

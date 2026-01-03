import { useState } from "react";
import { loginApi, signupApi } from "../api/auth.api";

const Auth = ({ onAuth }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const submitHandler = async () => {
    try {
      if (isLogin) {
        await loginApi(email, password);
      } else {
        await signupApi(name, email, password); // ✅ FIXED
      }
      onAuth();
    } catch (err) {
      console.error(err);
      alert("Auth failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 w-96 rounded shadow">
        <h2 className="text-xl font-bold mb-4 text-center">
          {isLogin ? "Login" : "Signup"}
        </h2>

        {!isLogin && (
          <input
            className="w-full border p-2 mb-3"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        )}

        {/* EMAIL INPUT (WAS MISSING) */}
        <input
          className="w-full border p-2 mb-3"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full border p-2 mb-3"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={submitHandler}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          {isLogin ? "Login" : "Signup"}
        </button>

        <p
          className="text-center mt-4 text-sm cursor-pointer text-blue-600"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Create new account" : "Already have an account?"}
        </p>
      </div>
    </div>
  );
};

export default Auth;

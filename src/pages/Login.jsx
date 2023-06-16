import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { currentUser, signinWithGoogle } = UserAuth();

  const handleLogin = async () => {
    try {
      await signinWithGoogle();
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(currentUser) {
      navigate("/chat")
    }
  }, [currentUser]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold">Konsultasi Sekarang</h1>
          <p className="py-6">
          Bergabunglah dengan obrolan dokter yang Anda pesan.
          </p>
          <button onClick={handleLogin} className="btn btn-primary">Login With Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
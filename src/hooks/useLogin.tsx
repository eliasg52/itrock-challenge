import { useState } from "react";
import { useUserContext } from "@/context/useUserContext";
import { USER, PASSWORD } from "@/constants";

export const useLogin = () => {
  const { login } = useUserContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    if (!username.trim() || !password.trim()) {
      setError("Por favor, ingresá tu usuario y contraseña");
      return;
    }

    if (username !== USER || password !== PASSWORD) {
      setError("Credenciales incorrectas");
      return;
    }

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await login?.();
    } catch (err) {
      setError("Error al iniciar sesión. Intentá de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    isLoading,
    showPassword,
    error,
    handleLogin,
    togglePasswordVisibility,
  };
};

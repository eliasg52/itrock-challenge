import { useState } from "react";
import { Alert } from "react-native";
import { useUserContext } from "@/context/useUserContext";
import { USER, PASSWORD } from "@/constants";

export const useLogin = () => {
  const { login } = useUserContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!username.trim() || !password.trim()) {
      Alert.alert("Error", "Por favor, ingresá tu usuario y contraseña");
      return;
    }

    if (username !== USER || password !== PASSWORD) {
      Alert.alert("Error", "Credenciales incorrectas");
      return;
    }

    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    await login?.();
    setIsLoading(false);
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
    handleLogin,
    togglePasswordVisibility,
  };
};

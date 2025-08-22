import { useState } from "react";
import { TouchableOpacity, ActivityIndicator, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useUserContext } from "@/context/useUserContext";
import { colors } from "@/constants";
import { CustomModal } from "./CustomModal";

export const LogoutButton = () => {
  const { logout } = useUserContext();
  const [showModal, setShowModal] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = () => {
    setShowModal(true);
  };

  const confirmLogout = async () => {
    setIsLoggingOut(true);
    await logout?.();
    setIsLoggingOut(false);
    setShowModal(false);
  };

  const cancelLogout = () => {
    setShowModal(false);
  };

  return (
    <>
      <TouchableOpacity
        onPress={handleLogout}
        style={{ marginRight: 16, padding: 8 }}
      >
        <Ionicons name="log-out-outline" size={24} color={colors.primary} />
      </TouchableOpacity>

      <CustomModal
        visible={showModal}
        title="Cerrar Sesión"
        message="¿Estás seguro que querés cerrar sesión?"
        confirmText="Cerrar Sesión"
        cancelText="Cancelar"
        onConfirm={confirmLogout}
        onCancel={cancelLogout}
        icon="log-out-outline"
        iconColor={colors.error}
        isLoading={isLoggingOut}
      />
    </>
  );
};

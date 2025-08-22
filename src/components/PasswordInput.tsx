import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TextInputProps,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants";

interface PasswordInputProps extends TextInputProps {
  placeholder: string;
  showPassword: boolean;
  onTogglePassword: () => void;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  placeholder,
  showPassword,
  onTogglePassword,
  style,
  ...props
}) => {
  return (
    <View style={styles.passwordContainer}>
      <TextInput
        style={[styles.passwordInput, style]}
        placeholder={placeholder}
        placeholderTextColor={colors.textSecondary}
        secureTextEntry={!showPassword}
        autoCapitalize="none"
        autoCorrect={false}
        {...props}
      />
      <TouchableOpacity style={styles.eyeButton} onPress={onTogglePassword}>
        <Ionicons
          name={showPassword ? "eye-off" : "eye"}
          size={24}
          color={colors.textSecondary}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordContainer: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    height: 56,
    backgroundColor: colors.secondary,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingRight: 50,
    fontSize: 16,
    color: colors.text,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flex: 1,
  },
  eyeButton: {
    position: "absolute",
    right: 16,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
  },
});

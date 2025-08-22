import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { colors } from "@/constants";
import { CustomButtonProps } from "@/types";

export const CustomButton = ({
  title,
  isLoading = false,
  variant = "primary",
  style,
  disabled,
  ...props
}: CustomButtonProps) => {
  const isPrimary = variant === "primary";
  const isDisabled = disabled || isLoading;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isPrimary ? styles.primaryButton : styles.secondaryButton,
        isDisabled && styles.disabledButton,
        style,
      ]}
      disabled={isDisabled}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator
          size="small"
          color={isPrimary ? colors.secondary : colors.primary}
        />
      ) : (
        <Text
          style={[
            styles.buttonText,
            isPrimary ? styles.primaryButtonText : styles.secondaryButtonText,
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 56,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    shadowColor: colors.primary,
  },
  secondaryButton: {
    backgroundColor: colors.secondary,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: colors.accent,
  },
  disabledButton: {
    backgroundColor: colors.accent,
    shadowOpacity: 0.1,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  primaryButtonText: {
    color: colors.secondary,
  },
  secondaryButtonText: {
    color: colors.primary,
  },
});

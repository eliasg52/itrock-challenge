import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { colors } from "@/constants";
import { LoadingStateProps } from "@/types";

export const LoadingState = ({
  message = "Cargando...",
}: LoadingStateProps) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  text: {
    marginTop: 16,
    fontSize: 16,
    color: colors.textSecondary,
  },
});

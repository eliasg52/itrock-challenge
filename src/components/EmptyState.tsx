import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants";
import { EmptyStateProps } from "@/types";

export const EmptyState = ({ icon, message }: EmptyStateProps) => {
  return (
    <View style={styles.container}>
      <Ionicons name={icon as any} size={64} color={colors.textSecondary} />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
    paddingVertical: 64,
  },
  text: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: "center",
    marginTop: 16,
  },
});

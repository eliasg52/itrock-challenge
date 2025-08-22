import { View, Text, StyleSheet } from "react-native";
import { FeedItem as FeedItemType, FeedItemProps } from "@/types";
import { colors } from "@/constants";
import { Avatar } from "./Avatar";

export const FeedItem = ({ item }: FeedItemProps) => {
  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString("es-AR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  return (
    <View style={styles.container}>
      <Avatar fullName={item.fullName} avatarUrl={item.avatarUrl} size={48} />

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{item.fullName}</Text>
          <Text style={styles.timestamp}>{formatDate(item.timestamp)}</Text>
        </View>

        <Text style={styles.comment}>{item.comment}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: colors.secondary,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  content: {
    flex: 1,
    marginLeft: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.text,
    flex: 1,
  },
  timestamp: {
    fontSize: 12,
    color: colors.textSecondary,
    marginLeft: 8,
  },
  comment: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
  },
});

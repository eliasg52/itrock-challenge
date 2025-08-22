import { View, Text, Image, StyleSheet } from "react-native";
import { colors } from "@/constants";
import { AvatarProps } from "@/types";

export const Avatar = ({ fullName, avatarUrl, size = 48 }: AvatarProps) => {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const avatarStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
  };

  if (avatarUrl) {
    return (
      <Image
        source={{ uri: avatarUrl }}
        style={[styles.avatar, avatarStyle]}
        defaultSource={require("../../assets/icon.png")}
      />
    );
  }

  return (
    <View style={[styles.avatarPlaceholder, avatarStyle]}>
      <Text style={[styles.initials, { fontSize: size * 0.4 }]}>
        {getInitials(fullName)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: colors.background,
  },
  avatarPlaceholder: {
    backgroundColor: colors.accent,
    justifyContent: "center",
    alignItems: "center",
  },
  initials: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

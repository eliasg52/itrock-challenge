import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Feed from "@/screens/Feed";
import Products from "@/screens/Products";
import { colors } from "@/constants";
import { LogoutButton } from "@/components";

export type MainTabsParamList = {
  Feed: undefined;
  Products: undefined;
};

const Tab = createBottomTabNavigator<MainTabsParamList>();

export function MainTabs() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          backgroundColor: colors.secondary,
          borderTopColor: colors.border,
          paddingBottom: Platform.OS === "android" ? insets.bottom + 8 : 8,
          paddingTop: 8,
          height: Platform.OS === "android" ? 75 + insets.bottom : 75,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        headerStyle: {
          backgroundColor: colors.secondary,
          borderBottomColor: colors.border,
        },
        headerTitleStyle: {
          color: colors.text,
          fontSize: 18,
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          title: "Feed",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles" size={size} color={color} />
          ),
          headerRight: () => <LogoutButton />,
        }}
      />
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          title: "Productos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="storefront" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

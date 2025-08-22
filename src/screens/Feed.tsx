import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useUserContext } from "@/context/useUserContext";
import useFeed from "@/hooks/useFeed";
import {
  FeedItem as FeedItemComponent,
  LoadingState,
  ErrorState,
  EmptyState,
} from "@/components";
import { colors } from "@/constants";
import { FeedItem } from "@/types";

const Feed = () => {
  const { data, error, isLoading, refetch } = useFeed();

  const renderFeedItem = ({ item }: { item: FeedItem }) => (
    <FeedItemComponent item={item} />
  );

  const renderEmptyState = () => (
    <EmptyState
      icon="chatbubbles-outline"
      message="No hay comentarios disponibles"
    />
  );

  const renderErrorState = () => (
    <ErrorState
      message="Error al cargar los comentarios"
      onRetry={() => refetch()}
    />
  );

  if (isLoading) {
    return <LoadingState message="Cargando comentarios..." />;
  }

  if (error) {
    return (
      <View style={styles.container}>
        <ErrorState
          message="Error al cargar los comentarios"
          onRetry={() => refetch()}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderFeedItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={() => refetch()}
            tintColor={colors.primary}
            colors={[colors.primary]}
          />
        }
        ListEmptyComponent={renderEmptyState}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  listContainer: {
    paddingVertical: 8,
  },
});
export default Feed;

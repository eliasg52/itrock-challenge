import { useState } from "react";
import { View, Text, FlatList, StyleSheet, RefreshControl } from "react-native";
import useProducts from "@/hooks/useProducts";
import {
  ProductCard,
  LoadingState,
  ErrorState,
  EmptyState,
  CheckoutModal,
} from "@/components";
import { colors } from "@/constants";
import { Product } from "@/types";

const Products = () => {
  const { data, error, isLoading, refetch } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleProductPress = (product: Product) => {
    setSelectedProduct(product);
    setShowCheckout(true);
  };

  const handleCloseCheckout = () => {
    setShowCheckout(false);
    setSelectedProduct(null);
  };

  const renderProduct = ({ item }: { item: Product }) => (
    <ProductCard product={item} onPress={handleProductPress} />
  );

  const renderEmptyState = () => (
    <EmptyState
      icon="storefront-outline"
      message="No hay productos disponibles"
    />
  );

  if (isLoading) {
    return <LoadingState message="Cargando productos..." />;
  }

  if (error) {
    return (
      <View style={styles.container}>
        <ErrorState
          message="Error al cargar los productos"
          onRetry={() => refetch()}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
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
      <CheckoutModal
        visible={showCheckout}
        product={selectedProduct}
        onClose={handleCloseCheckout}
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
export default Products;

import useProducts from '@/hooks/useProducts';
import { View, Text } from 'react-native';

const Products = () => {
  const { data } = useProducts();

  return (
    <View style={{ flex: 1 }}>
      <Text>Products</Text>
    </View>
  );
};
export default Products;

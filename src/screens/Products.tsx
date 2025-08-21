import useProducts from '@/hooks/useProducts';
import { View, Text } from 'react-native';
import { CreditCardInput } from 'react-native-credit-card-input';

const Products = () => {
  const { data } = useProducts();

  return (
    <View style={{ flex: 1 }}>
      <Text>Products</Text>
      <CreditCardInput onChange={(form) => console.log(form)} />
    </View>
  );
};
export default Products;

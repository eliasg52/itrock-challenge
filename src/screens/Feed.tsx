import useFeed from '@/hooks/useFeed';
import { View, Text } from 'react-native';

const Feed = () => {
  const { data } = useFeed();

  console.log(data);

  return (
    <View style={{ flex: 1 }}>
      <Text>Pantalla Feed</Text>
    </View>
  );
};
export default Feed;

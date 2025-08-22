import { useUserContext } from '@/context/useUserContext';
import useFeed from '@/hooks/useFeed';
import { View, Text } from 'react-native';

const Feed = () => {
  const { data } = useFeed();
  const { logout } = useUserContext();
  console.log(data);

  return (
    <View style={{ flex: 1 }}>
      <Text>Pantalla Feed</Text>
      <Text onPress={logout}>LOGOUT</Text>
    </View>
  );
};
export default Feed;

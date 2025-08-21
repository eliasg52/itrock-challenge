import { useUserContext } from '@/context/useUserContext';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
  const { login } = useUserContext();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Pantalla Login</Text>

      <Text onPress={login}>LOGIN</Text>
    </SafeAreaView>
  );
};
export default Login;

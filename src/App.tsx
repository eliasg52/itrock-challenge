import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigation from '../src/navigation/Navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserProvider } from './context/useUserContext';

const queryClient = new QueryClient();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <Navigation />
        </QueryClientProvider>
      </UserProvider>
    </GestureHandlerRootView>
  );
}

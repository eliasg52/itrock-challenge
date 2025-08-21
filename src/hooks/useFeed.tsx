import { getFeed } from '@/services/feedService';
import { useQuery } from '@tanstack/react-query';

const useFeed = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['feed'],
    queryFn: getFeed,
  });

  return { data, error, isLoading };
};
export default useFeed;

import { useQuery } from '@tanstack/react-query';
import { getFeed } from '@/services/feedService';

const useFeed = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['feed'],
    queryFn: getFeed,
  });

  return { data, error, isLoading };
};
export default useFeed;

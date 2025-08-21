import feedData from '@/data/feedData';

const simulateError = false;

export const getFeed = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (simulateError) {
        reject(new Error('Network request failed'));
      } else {
        resolve(feedData);
      }
    }, 500);
  });
};

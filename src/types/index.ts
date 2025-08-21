export type FeedItem = {
  id: string;
  fullName: string;
  avatarUrl: string | null;
  timestamp: string;
  comment: string;
};

export type Rating = {
  rate: number;
  count: number;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};

export type Products = Product[];

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

export type AvatarProps = {
  fullName: string;
  avatarUrl?: string | null;
  size?: number;
};

export type CustomInputProps = {
  placeholder: string;
  style?: any;
  value?: string;
  onChangeText?: (text: string) => void;
};

export type PasswordInputProps = {
  placeholder: string;
  showPassword: boolean;
  onTogglePassword: () => void;
  style?: any;
  value?: string;
  onChangeText?: (text: string) => void;
};

export type CustomButtonProps = {
  title: string;
  isLoading?: boolean;
  variant?: "primary" | "secondary";
  style?: any;
  disabled?: boolean;
  onPress?: () => void;
};

export type LoadingStateProps = {
  message?: string;
};

export type ErrorStateProps = {
  message?: string;
  onRetry: () => void;
  retryText?: string;
};

export type EmptyStateProps = {
  icon: string;
  message: string;
};

export type FeedItemProps = {
  item: FeedItem;
};

export type ProductCardProps = {
  product: Product;
  onPress: (product: Product) => void;
};

export type CheckoutModalProps = {
  visible: boolean;
  product: Product | null;
  onClose: () => void;
};

export type CustomModalProps = {
  visible: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
  icon?: string;
  iconColor?: string;
  isLoading?: boolean;
};

export type ContextType = {
  userToken: boolean;
  login?: () => void;
  logout?: () => void;
  isLoading: boolean;
};

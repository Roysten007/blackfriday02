export interface Product {
  id: string;
  name: string;
  nameEn?: string;
  volume: string;
  tagline: string;
  taglineEn?: string;
  originalPrice: number;
  salePrice: number;
  discountPercent: number;
  stockLeft: number;
  initialStock: number;
  image: string;
  textureImage?: string;
  description: string;
  descriptionEn?: string;
  benefits: {
    icon: string;
    label: string;
  }[];
  benefitsEn?: {
    icon: string;
    label: string;
  }[];
  origin: string;
  usageTip: string;
  usageTipEn?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  isBundle?: boolean;
  bundleItems?: Product[];
}

export interface QuizQuestion {
  id: number;
  title: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    icon: string;
    recommendProductId: string;
  }[];
}

export interface Review {
  id: string;
  author: string;
  city: string;
  product: string;
  verified: boolean;
  rating: number;
  comment: string;
  timeAgo: string;
  aspect: "portrait" | "landscape" | "square";
}

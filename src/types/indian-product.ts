export interface Store {
  id: string;
  name: string;
  address: string;
  city: string;
  distance: number; // in km
  rating: number;
  phone?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'fruits' | 'vegetables' | 'restaurants' | 'groceries' | 'spices' | 'sweets';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  description: string;
  store: Store;
  image?: string;
  isBestDeal: boolean;
  tags: string[];
  availability: 'in-stock' | 'limited' | 'out-of-stock';
  lastUpdated: string;
}

export interface FilterOptions {
  query: string;
  category: string;
  city: string;
  priceRange: [number, number];
  minRating: number;
  maxDistance: number;
  sortBy: 'price' | 'rating' | 'distance' | 'name';
  sortOrder: 'asc' | 'desc';
}

export interface ComparisonItem {
  product: Product;
  selected: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
}

export interface DealSubmission {
  id: string;
  productName: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  storeName: string;
  storeAddress: string;
  city: string;
  image?: string;
  submittedBy: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
}

export interface CurrencySettings {
  code: 'INR' | 'USD';
  symbol: '₹' | '$';
  rate: number;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  createdAt: string;
}

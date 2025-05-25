
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  subcategory: string;
  rating: number;
  reviewCount: number;
  stock: number;
  brand: string;
  features: string[];
  specifications: Record<string, string>;
  tags: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  discount?: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    description: 'The most powerful iPhone ever with titanium design, A17 Pro chip, and advanced camera system.',
    price: 1199,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500',
    images: [
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500',
      'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500'
    ],
    category: 'Electronics',
    subcategory: 'Smartphones',
    rating: 4.8,
    reviewCount: 2847,
    stock: 25,
    brand: 'Apple',
    features: ['5G Ready', 'Face ID', 'Wireless Charging', 'Water Resistant'],
    specifications: {
      'Display': '6.7" Super Retina XDR',
      'Storage': '256GB',
      'Camera': '48MP Main + 12MP Ultra Wide + 12MP Telephoto',
      'Battery': 'Up to 29 hours video playback'
    },
    tags: ['premium', 'flagship', 'camera'],
    isNew: true,
    isFeatured: true,
    discount: 8
  },
  {
    id: '2',
    name: 'MacBook Pro 16"',
    description: 'Supercharged by M3 Pro or M3 Max chip for demanding workflows.',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500',
    images: [
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500',
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500'
    ],
    category: 'Electronics',
    subcategory: 'Laptops',
    rating: 4.9,
    reviewCount: 1523,
    stock: 15,
    brand: 'Apple',
    features: ['M3 Chip', 'Liquid Retina XDR Display', 'All-day Battery', 'Thunderbolt 4'],
    specifications: {
      'Processor': 'Apple M3 Pro',
      'Memory': '18GB Unified Memory',
      'Storage': '512GB SSD',
      'Display': '16.2" Liquid Retina XDR'
    },
    tags: ['professional', 'creative', 'powerful'],
    isFeatured: true
  },
  {
    id: '3',
    name: 'Nike Air Max 270',
    description: 'Lifestyle shoe with the largest heel Max Air unit yet for all-day comfort.',
    price: 150,
    originalPrice: 180,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500'
    ],
    category: 'Sportswear',
    subcategory: 'Shoes',
    rating: 4.6,
    reviewCount: 892,
    stock: 45,
    brand: 'Nike',
    features: ['Air Max Technology', 'Breathable Mesh', 'Rubber Outsole', 'Lightweight'],
    specifications: {
      'Material': 'Mesh and synthetic',
      'Sole': 'Rubber',
      'Technology': 'Max Air',
      'Fit': 'True to size'
    },
    tags: ['casual', 'comfort', 'lifestyle'],
    discount: 17
  },
  {
    id: '4',
    name: 'Sony WH-1000XM5',
    description: 'Industry-leading noise canceling headphones with exceptional sound quality.',
    price: 399,
    image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500',
    images: [
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500'
    ],
    category: 'Electronics',
    subcategory: 'Audio',
    rating: 4.7,
    reviewCount: 1756,
    stock: 32,
    brand: 'Sony',
    features: ['Active Noise Canceling', '30hr Battery', 'Quick Charge', 'Multipoint Connection'],
    specifications: {
      'Driver': '30mm',
      'Frequency': '4Hz-40kHz',
      'Battery': '30 hours',
      'Weight': '250g'
    },
    tags: ['audio', 'wireless', 'premium'],
    isFeatured: true
  },
  {
    id: '5',
    name: 'Levi\'s 501 Original Jeans',
    description: 'The original blue jean since 1873. Straight fit with button fly.',
    price: 89,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500'
    ],
    category: 'Clothing',
    subcategory: 'Jeans',
    rating: 4.4,
    reviewCount: 2341,
    stock: 78,
    brand: 'Levi\'s',
    features: ['100% Cotton', 'Straight Fit', 'Button Fly', 'Classic 5-Pocket'],
    specifications: {
      'Material': '100% Cotton',
      'Fit': 'Straight',
      'Rise': 'Mid',
      'Leg Opening': '16.5"'
    },
    tags: ['classic', 'denim', 'casual']
  }
];

export const categories = [
  { id: 'electronics', name: 'Electronics', icon: '📱' },
  { id: 'clothing', name: 'Clothing', icon: '👕' },
  { id: 'sportswear', name: 'Sportswear', icon: '👟' },
  { id: 'home', name: 'Home & Garden', icon: '🏠' },
  { id: 'books', name: 'Books', icon: '📚' },
  { id: 'beauty', name: 'Beauty', icon: '💄' }
];

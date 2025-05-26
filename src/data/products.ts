
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  brand: string;
  isFeatured?: boolean;
  isNew?: boolean;
  rating: number;
  reviewCount: number;
  description: string;
  stock: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  cta: string;
}

export const categories: Category[] = [
  { id: 'electronics', name: 'Electronics', icon: '📱' },
  { id: 'fashion', name: 'Fashion', icon: '👕' },
  { id: 'home-garden', name: 'Home & Garden', icon: '🏠' },
  { id: 'sports-outdoors', name: 'Sports & Outdoors', icon: '⚽' },
  { id: 'books', name: 'Books', icon: '📚' },
  { id: 'beauty', name: 'Beauty & Health', icon: '💄' },
  { id: 'automotive', name: 'Automotive', icon: '🚗' },
  { id: 'toys-games', name: 'Toys & Games', icon: '🎮' },
];

export const banners: Banner[] = [
  {
    id: '1',
    title: 'New Collection',
    subtitle: 'Discover the latest trends in fashion',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop',
    link: '/products?category=fashion',
    cta: 'Shop Fashion'
  },
  {
    id: '2',
    title: 'Tech Sale',
    subtitle: 'Up to 50% off on electronics',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop',
    link: '/products?category=electronics',
    cta: 'Shop Electronics'
  },
  {
    id: '3',
    title: 'Home Essentials',
    subtitle: 'Transform your living space',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=600&fit=crop',
    link: '/products?category=home-garden',
    cta: 'Shop Home'
  },
  {
    id: '4',
    title: 'Fitness & Sports',
    subtitle: 'Gear up for your active lifestyle',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop',
    link: '/products?category=sports-outdoors',
    cta: 'Shop Sports'
  },
  {
    id: '5',
    title: 'Beauty & Wellness',
    subtitle: 'Pamper yourself with premium products',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=600&fit=crop',
    link: '/products?category=beauty',
    cta: 'Shop Beauty'
  }
];

export const landingBanners: Banner[] = [
  {
    id: '1',
    title: 'FOREVER Sale',
    subtitle: 'Up to 70% off on selected items',
    image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=1200&h=600&fit=crop',
    link: '/products',
    cta: 'Shop Now'
  },
  {
    id: '2',
    title: 'Premium Collection',
    subtitle: 'Luxury items at unbeatable prices',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop',
    link: '/products',
    cta: 'Explore'
  },
  {
    id: '3',
    title: 'New Arrivals',
    subtitle: 'Fresh styles just in',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop',
    link: '/products',
    cta: 'Discover'
  },
  {
    id: '4',
    title: 'Best Sellers',
    subtitle: 'Customer favorites',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=600&fit=crop',
    link: '/products',
    cta: 'Shop Best Sellers'
  },
  {
    id: '5',
    title: 'Weekend Special',
    subtitle: 'Limited time offers',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop',
    link: '/products',
    cta: 'Get Deals'
  }
];

export const products: Product[] = [
  // Electronics
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 12999,
    originalPrice: 15999,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    category: 'electronics',
    brand: 'TechPro',
    isFeatured: true,
    isNew: true,
    rating: 4.8,
    reviewCount: 342,
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality.',
    stock: 25
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 18999,
    originalPrice: 22999,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    category: 'electronics',
    brand: 'FitTech',
    isFeatured: true,
    rating: 4.6,
    reviewCount: 189,
    description: 'Advanced fitness tracking with heart rate monitoring and GPS.',
    stock: 18
  },
  {
    id: '3',
    name: 'Professional Camera',
    price: 85999,
    originalPrice: 99999,
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=500&fit=crop',
    category: 'electronics',
    brand: 'PhotoMax',
    rating: 4.9,
    reviewCount: 76,
    description: 'Professional DSLR camera with high-resolution sensor and advanced features.',
    stock: 8
  },
  {
    id: '4',
    name: 'Gaming Laptop',
    price: 125999,
    originalPrice: 139999,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop',
    category: 'electronics',
    brand: 'GameForce',
    isFeatured: true,
    rating: 4.7,
    reviewCount: 234,
    description: 'High-performance gaming laptop with latest GPU and fast processor.',
    stock: 12
  },
  {
    id: '5',
    name: 'Wireless Speaker',
    price: 8999,
    originalPrice: 11999,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
    category: 'electronics',
    brand: 'SoundWave',
    rating: 4.5,
    reviewCount: 156,
    description: 'Portable wireless speaker with rich bass and 12-hour battery life.',
    stock: 30
  },

  // Fashion
  {
    id: '6',
    name: 'Designer Cotton T-Shirt',
    price: 1299,
    originalPrice: 1999,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    category: 'fashion',
    brand: 'StyleCo',
    isNew: true,
    rating: 4.4,
    reviewCount: 89,
    description: 'Premium cotton t-shirt with modern design and comfortable fit.',
    stock: 45
  },
  {
    id: '7',
    name: 'Leather Jacket',
    price: 8999,
    originalPrice: 12999,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop',
    category: 'fashion',
    brand: 'LeatherLux',
    isFeatured: true,
    rating: 4.8,
    reviewCount: 67,
    description: 'Genuine leather jacket with classic design and premium finish.',
    stock: 15
  },
  {
    id: '8',
    name: 'Casual Jeans',
    price: 2499,
    originalPrice: 3499,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop',
    category: 'fashion',
    brand: 'DenimCraft',
    rating: 4.3,
    reviewCount: 123,
    description: 'Comfortable casual jeans with modern cut and durable fabric.',
    stock: 35
  },
  {
    id: '9',
    name: 'Formal Shirt',
    price: 1899,
    originalPrice: 2799,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=500&fit=crop',
    category: 'fashion',
    brand: 'FormalWear',
    rating: 4.6,
    reviewCount: 98,
    description: 'Professional formal shirt perfect for office and business meetings.',
    stock: 28
  },
  {
    id: '10',
    name: 'Running Shoes',
    price: 5999,
    originalPrice: 7999,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
    category: 'fashion',
    brand: 'SportRun',
    isFeatured: true,
    rating: 4.7,
    reviewCount: 201,
    description: 'Lightweight running shoes with advanced cushioning technology.',
    stock: 22
  },

  // Home & Garden
  {
    id: '11',
    name: 'Coffee Maker',
    price: 15999,
    originalPrice: 19999,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=500&fit=crop',
    category: 'home-garden',
    brand: 'BrewMaster',
    rating: 4.5,
    reviewCount: 145,
    description: 'Automatic coffee maker with programmable settings and thermal carafe.',
    stock: 20
  },
  {
    id: '12',
    name: 'Indoor Plant Set',
    price: 2999,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
    category: 'home-garden',
    brand: 'GreenLife',
    isNew: true,
    rating: 4.2,
    reviewCount: 78,
    description: 'Beautiful indoor plant collection to enhance your living space.',
    stock: 40
  },
  {
    id: '13',
    name: 'Kitchen Knife Set',
    price: 4999,
    originalPrice: 6999,
    image: 'https://images.unsplash.com/photo-1593618998160-e34014e67541?w=500&h=500&fit=crop',
    category: 'home-garden',
    brand: 'ChefPro',
    rating: 4.8,
    reviewCount: 112,
    description: 'Professional kitchen knife set with stainless steel blades.',
    stock: 25
  },
  {
    id: '14',
    name: 'Bedding Set',
    price: 3499,
    originalPrice: 4999,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop',
    category: 'home-garden',
    brand: 'ComfortHome',
    rating: 4.4,
    reviewCount: 89,
    description: 'Luxury bedding set with soft cotton fabric and elegant design.',
    stock: 18
  },
  {
    id: '15',
    name: 'Wall Clock',
    price: 1999,
    originalPrice: 2999,
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=500&fit=crop',
    category: 'home-garden',
    brand: 'TimeStyle',
    rating: 4.1,
    reviewCount: 56,
    description: 'Modern wall clock with silent movement and stylish design.',
    stock: 32
  },

  // Sports & Outdoors
  {
    id: '16',
    name: 'Yoga Mat',
    price: 1499,
    originalPrice: 2199,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop',
    category: 'sports-outdoors',
    brand: 'YogaFlow',
    rating: 4.6,
    reviewCount: 167,
    description: 'Non-slip yoga mat with excellent grip and cushioning.',
    stock: 50
  },
  {
    id: '17',
    name: 'Basketball',
    price: 2499,
    originalPrice: 3199,
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&h=500&fit=crop',
    category: 'sports-outdoors',
    brand: 'SportBall',
    rating: 4.3,
    reviewCount: 94,
    description: 'Official size basketball with premium leather construction.',
    stock: 30
  },
  {
    id: '18',
    name: 'Camping Tent',
    price: 12999,
    originalPrice: 16999,
    image: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=500&h=500&fit=crop',
    category: 'sports-outdoors',
    brand: 'OutdoorPro',
    isFeatured: true,
    rating: 4.7,
    reviewCount: 123,
    description: 'Waterproof camping tent for 4 people with easy setup.',
    stock: 15
  },
  {
    id: '19',
    name: 'Dumbbells Set',
    price: 8999,
    originalPrice: 11999,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&h=500&fit=crop',
    category: 'sports-outdoors',
    brand: 'FitGear',
    rating: 4.5,
    reviewCount: 87,
    description: 'Adjustable dumbbells set perfect for home workouts.',
    stock: 20
  },
  {
    id: '20',
    name: 'Bicycle Helmet',
    price: 3999,
    originalPrice: 5499,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=500&fit=crop',
    category: 'sports-outdoors',
    brand: 'SafeRide',
    rating: 4.4,
    reviewCount: 76,
    description: 'Lightweight bicycle helmet with superior protection and ventilation.',
    stock: 25
  },

  // Books
  {
    id: '21',
    name: 'Self-Help Book Collection',
    price: 1999,
    originalPrice: 2999,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=500&fit=crop',
    category: 'books',
    brand: 'BookWise',
    rating: 4.8,
    reviewCount: 234,
    description: 'Collection of bestselling self-help books for personal growth.',
    stock: 60
  },
  {
    id: '22',
    name: 'Cooking Recipe Book',
    price: 1299,
    originalPrice: 1799,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
    category: 'books',
    brand: 'CulinaryGuide',
    rating: 4.5,
    reviewCount: 89,
    description: 'Comprehensive cookbook with 500+ delicious recipes.',
    stock: 45
  },
  {
    id: '23',
    name: 'Fiction Novel Set',
    price: 2499,
    originalPrice: 3499,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=500&fit=crop',
    category: 'books',
    brand: 'StoryTeller',
    isNew: true,
    rating: 4.7,
    reviewCount: 156,
    description: 'Award-winning fiction novel collection from bestselling authors.',
    stock: 35
  },

  // Beauty & Health
  {
    id: '24',
    name: 'Skincare Set',
    price: 4999,
    originalPrice: 6999,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=500&fit=crop',
    category: 'beauty',
    brand: 'GlowSkin',
    isFeatured: true,
    rating: 4.6,
    reviewCount: 198,
    description: 'Complete skincare routine set with natural ingredients.',
    stock: 28
  },
  {
    id: '25',
    name: 'Hair Dryer',
    price: 3999,
    originalPrice: 5499,
    image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500&h=500&fit=crop',
    category: 'beauty',
    brand: 'HairCare',
    rating: 4.4,
    reviewCount: 112,
    description: 'Professional hair dryer with ionic technology and multiple settings.',
    stock: 22
  },

  // New Products (26-55)
  {
    id: '26',
    name: 'Wireless Earbuds',
    price: 7999,
    originalPrice: 9999,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop',
    category: 'electronics',
    brand: 'AudioTech',
    isNew: true,
    rating: 4.5,
    reviewCount: 145,
    description: 'True wireless earbuds with active noise cancellation.',
    stock: 40
  },
  {
    id: '27',
    name: 'Smart Home Hub',
    price: 11999,
    originalPrice: 14999,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=500&fit=crop',
    category: 'electronics',
    brand: 'SmartHome',
    rating: 4.7,
    reviewCount: 89,
    description: 'Control all your smart devices from one central hub.',
    stock: 18
  },
  {
    id: '28',
    name: 'Tablet',
    price: 25999,
    originalPrice: 29999,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop',
    category: 'electronics',
    brand: 'TabletPro',
    isFeatured: true,
    rating: 4.6,
    reviewCount: 201,
    description: '10-inch tablet with high-resolution display and long battery life.',
    stock: 25
  },
  {
    id: '29',
    name: 'Power Bank',
    price: 2999,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1609592806562-48fa7d5671c7?w=500&h=500&fit=crop',
    category: 'electronics',
    brand: 'ChargePro',
    rating: 4.3,
    reviewCount: 167,
    description: 'High-capacity power bank with fast charging technology.',
    stock: 55
  },
  {
    id: '30',
    name: 'Bluetooth Keyboard',
    price: 4999,
    originalPrice: 6499,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop',
    category: 'electronics',
    brand: 'TypeMaster',
    rating: 4.4,
    reviewCount: 98,
    description: 'Wireless mechanical keyboard with RGB backlighting.',
    stock: 30
  },
  {
    id: '31',
    name: 'Polo Shirt',
    price: 1799,
    originalPrice: 2499,
    image: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop',
    category: 'fashion',
    brand: 'ClassicWear',
    rating: 4.2,
    reviewCount: 76,
    description: 'Classic polo shirt with comfortable cotton blend fabric.',
    stock: 42
  },
  {
    id: '32',
    name: 'Winter Jacket',
    price: 6999,
    originalPrice: 8999,
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500&h=500&fit=crop',
    category: 'fashion',
    brand: 'WarmWear',
    isNew: true,
    rating: 4.8,
    reviewCount: 123,
    description: 'Insulated winter jacket with waterproof exterior.',
    stock: 20
  },
  {
    id: '33',
    name: 'Dress Shoes',
    price: 7999,
    originalPrice: 9999,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop',
    category: 'fashion',
    brand: 'FormalFeet',
    rating: 4.5,
    reviewCount: 89,
    description: 'Elegant dress shoes made from genuine leather.',
    stock: 25
  },
  {
    id: '34',
    name: 'Backpack',
    price: 3999,
    originalPrice: 5499,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
    category: 'fashion',
    brand: 'TravelGear',
    rating: 4.6,
    reviewCount: 134,
    description: 'Durable backpack with multiple compartments and laptop sleeve.',
    stock: 35
  },
  {
    id: '35',
    name: 'Wrist Watch',
    price: 15999,
    originalPrice: 19999,
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500&h=500&fit=crop',
    category: 'fashion',
    brand: 'TimeClassic',
    isFeatured: true,
    rating: 4.7,
    reviewCount: 156,
    description: 'Luxury analog watch with stainless steel construction.',
    stock: 15
  },
  {
    id: '36',
    name: 'Air Purifier',
    price: 18999,
    originalPrice: 22999,
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop',
    category: 'home-garden',
    brand: 'CleanAir',
    rating: 4.5,
    reviewCount: 98,
    description: 'HEPA air purifier for cleaner indoor air quality.',
    stock: 20
  },
  {
    id: '37',
    name: 'Vacuum Cleaner',
    price: 12999,
    originalPrice: 15999,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop',
    category: 'home-garden',
    brand: 'CleanPro',
    rating: 4.4,
    reviewCount: 112,
    description: 'Powerful vacuum cleaner with multiple attachments.',
    stock: 18
  },
  {
    id: '38',
    name: 'Table Lamp',
    price: 2999,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
    category: 'home-garden',
    brand: 'LightStyle',
    rating: 4.2,
    reviewCount: 67,
    description: 'Modern table lamp with adjustable brightness.',
    stock: 30
  },
  {
    id: '39',
    name: 'Dining Chair Set',
    price: 8999,
    originalPrice: 11999,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop',
    category: 'home-garden',
    brand: 'FurnitureMax',
    rating: 4.6,
    reviewCount: 89,
    description: 'Set of 4 comfortable dining chairs with modern design.',
    stock: 12
  },
  {
    id: '40',
    name: 'Microwave Oven',
    price: 8999,
    originalPrice: 10999,
    image: 'https://images.unsplash.com/photo-1585515656821-93e8e7b115ca?w=500&h=500&fit=crop',
    category: 'home-garden',
    brand: 'KitchenPro',
    rating: 4.3,
    reviewCount: 145,
    description: 'Digital microwave oven with multiple cooking presets.',
    stock: 22
  },
  {
    id: '41',
    name: 'Tennis Racket',
    price: 5999,
    originalPrice: 7999,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=500&fit=crop',
    category: 'sports-outdoors',
    brand: 'TennisAce',
    rating: 4.7,
    reviewCount: 78,
    description: 'Professional tennis racket with carbon fiber frame.',
    stock: 25
  },
  {
    id: '42',
    name: 'Swimming Goggles',
    price: 1499,
    originalPrice: 1999,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=500&fit=crop',
    category: 'sports-outdoors',
    brand: 'AquaVision',
    rating: 4.4,
    reviewCount: 123,
    description: 'Anti-fog swimming goggles with UV protection.',
    stock: 40
  },
  {
    id: '43',
    name: 'Protein Supplement',
    price: 3999,
    originalPrice: 4999,
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=500&h=500&fit=crop',
    category: 'sports-outdoors',
    brand: 'FitNutrition',
    rating: 4.5,
    reviewCount: 167,
    description: 'High-quality whey protein for muscle building.',
    stock: 35
  },
  {
    id: '44',
    name: 'Resistance Bands',
    price: 1999,
    originalPrice: 2999,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop',
    category: 'sports-outdoors',
    brand: 'FlexFit',
    isNew: true,
    rating: 4.3,
    reviewCount: 89,
    description: 'Set of resistance bands for strength training.',
    stock: 50
  },
  {
    id: '45',
    name: 'Fishing Rod',
    price: 4999,
    originalPrice: 6499,
    image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=500&h=500&fit=crop',
    category: 'sports-outdoors',
    brand: 'AnglePro',
    rating: 4.6,
    reviewCount: 76,
    description: 'Lightweight fishing rod perfect for beginners and experts.',
    stock: 28
  },
  {
    id: '46',
    name: 'Science Textbook',
    price: 1799,
    originalPrice: 2499,
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&h=500&fit=crop',
    category: 'books',
    brand: 'EduPress',
    rating: 4.7,
    reviewCount: 134,
    description: 'Comprehensive science textbook for students.',
    stock: 45
  },
  {
    id: '47',
    name: 'Art & Design Book',
    price: 2299,
    originalPrice: 2999,
    image: 'https://images.unsplash.com/photo-1541963463532-d68292c34d19?w=500&h=500&fit=crop',
    category: 'books',
    brand: 'CreativePress',
    rating: 4.5,
    reviewCount: 98,
    description: 'Inspiring art and design book with beautiful illustrations.',
    stock: 30
  },
  {
    id: '48',
    name: 'Business Strategy Guide',
    price: 1999,
    originalPrice: 2799,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
    category: 'books',
    brand: 'BusinessWise',
    rating: 4.6,
    reviewCount: 156,
    description: 'Essential guide for business strategy and growth.',
    stock: 40
  },
  {
    id: '49',
    name: 'Face Moisturizer',
    price: 2499,
    originalPrice: 3299,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop',
    category: 'beauty',
    brand: 'SkinGlow',
    rating: 4.4,
    reviewCount: 189,
    description: 'Hydrating face moisturizer with SPF protection.',
    stock: 35
  },
  {
    id: '50',
    name: 'Hair Straightener',
    price: 3499,
    originalPrice: 4499,
    image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500&h=500&fit=crop',
    category: 'beauty',
    brand: 'HairStyle',
    rating: 4.3,
    reviewCount: 112,
    description: 'Ceramic hair straightener with temperature control.',
    stock: 25
  },
  {
    id: '51',
    name: 'Makeup Kit',
    price: 5999,
    originalPrice: 7999,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=500&fit=crop',
    category: 'beauty',
    brand: 'BeautyBox',
    isFeatured: true,
    rating: 4.7,
    reviewCount: 234,
    description: 'Complete makeup kit with professional brushes and colors.',
    stock: 20
  },
  {
    id: '52',
    name: 'Electric Toothbrush',
    price: 2999,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500&h=500&fit=crop',
    category: 'beauty',
    brand: 'OralCare',
    rating: 4.5,
    reviewCount: 145,
    description: 'Rechargeable electric toothbrush with multiple modes.',
    stock: 30
  },
  {
    id: '53',
    name: 'Perfume Set',
    price: 4999,
    originalPrice: 6999,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=500&fit=crop',
    category: 'beauty',
    brand: 'FragranceLux',
    rating: 4.6,
    reviewCount: 167,
    description: 'Luxury perfume collection with long-lasting fragrances.',
    stock: 18
  },
  {
    id: '54',
    name: 'Car Phone Mount',
    price: 1499,
    originalPrice: 1999,
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=500&fit=crop',
    category: 'automotive',
    brand: 'AutoTech',
    rating: 4.3,
    reviewCount: 89,
    description: 'Universal car phone mount with 360-degree rotation.',
    stock: 45
  },
  {
    id: '55',
    name: 'Board Game Set',
    price: 2999,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=500&h=500&fit=crop',
    category: 'toys-games',
    brand: 'GameNight',
    rating: 4.7,
    reviewCount: 156,
    description: 'Classic board game collection for family entertainment.',
    stock: 25
  }
];

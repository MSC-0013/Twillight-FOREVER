
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
    title: 'Tech Revolution 2024',
    subtitle: 'Discover cutting-edge electronics at unbeatable prices',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop',
    link: '/products?category=electronics',
    cta: 'Shop Electronics'
  },
  {
    id: '2',
    title: 'Fashion Forward',
    subtitle: 'Step into style with our premium fashion collection',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop',
    link: '/products?category=fashion',
    cta: 'Explore Fashion'
  },
  {
    id: '3',
    title: 'Home Transformation',
    subtitle: 'Create your dream space with our home essentials',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=600&fit=crop',
    link: '/products?category=home-garden',
    cta: 'Shop Home'
  },
  {
    id: '4',
    title: 'Fitness Revolution',
    subtitle: 'Achieve your health goals with premium sports gear',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop',
    link: '/products?category=sports-outdoors',
    cta: 'Get Active'
  },
  {
    id: '5',
    title: 'Beauty & Wellness',
    subtitle: 'Pamper yourself with luxury beauty products',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=600&fit=crop',
    link: '/products?category=beauty',
    cta: 'Glow Up'
  },
  {
    id: '6',
    title: 'Knowledge Hub',
    subtitle: 'Expand your mind with our curated book collection',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=600&fit=crop',
    link: '/products?category=books',
    cta: 'Read More'
  },
  {
    id: '7',
    title: 'Auto Excellence',
    subtitle: 'Upgrade your ride with premium automotive accessories',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=600&fit=crop',
    link: '/products?category=automotive',
    cta: 'Drive Better'
  },
  {
    id: '8',
    title: 'Play & Learn',
    subtitle: 'Fun and educational toys for all ages',
    image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=1200&h=600&fit=crop',
    link: '/products?category=toys-games',
    cta: 'Start Playing'
  },
  {
    id: '9',
    title: 'Summer Sale 2024',
    subtitle: 'Up to 70% off on selected items - Limited time only',
    image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=1200&h=600&fit=crop',
    link: '/products',
    cta: 'Shop Sale'
  },
  {
    id: '10',
    title: 'Premium Collection',
    subtitle: 'Luxury meets affordability in our exclusive range',
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=1200&h=600&fit=crop',
    link: '/products',
    cta: 'Explore Luxury'
  }
];

export const landingBanners: Banner[] = [
  {
    id: '1',
    title: 'FOREVER SALE 2024',
    subtitle: 'Up to 80% off on premium products - Don\'t miss out!',
    image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=1200&h=600&fit=crop',
    link: '/products',
    cta: 'Shop Now'
  },
  {
    id: '2',
    title: 'Tech Paradise',
    subtitle: 'Latest gadgets and electronics at unbeatable prices',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop',
    link: '/products?category=electronics',
    cta: 'Explore Tech'
  },
  {
    id: '3',
    title: 'Fashion Week Special',
    subtitle: 'Runway-inspired looks for every occasion',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop',
    link: '/products?category=fashion',
    cta: 'Style Now'
  },
  {
    id: '4',
    title: 'Home Sweet Home',
    subtitle: 'Transform your space with our designer collection',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=600&fit=crop',
    link: '/products?category=home-garden',
    cta: 'Redesign'
  },
  {
    id: '5',
    title: 'Wellness Journey',
    subtitle: 'Premium beauty and health products for a better you',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=600&fit=crop',
    link: '/products?category=beauty',
    cta: 'Start Journey'
  },
  {
    id: '6',
    title: 'Adventure Awaits',
    subtitle: 'Gear up for your next outdoor adventure',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop',
    link: '/products?category=sports-outdoors',
    cta: 'Adventure On'
  },
  {
    id: '7',
    title: 'Smart Living',
    subtitle: 'IoT devices and smart home solutions',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&h=600&fit=crop',
    link: '/products?category=electronics',
    cta: 'Go Smart'
  },
  {
    id: '8',
    title: 'Luxury Lifestyle',
    subtitle: 'Premium products for the discerning customer',
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=1200&h=600&fit=crop',
    link: '/products',
    cta: 'Live Luxury'
  },
  {
    id: '9',
    title: 'New Arrivals',
    subtitle: 'Fresh collection just landed - Be the first to own',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop',
    link: '/products?sort=newest',
    cta: 'See New'
  },
  {
    id: '10',
    title: 'Best Sellers',
    subtitle: 'Most loved products by our customers',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=600&fit=crop',
    link: '/products',
    cta: 'Shop Favorites'
  }
];

export const products: Product[] = [
  // Premium Electronics
  {
    id: '1',
    name: 'iPhone 15 Pro Max 256GB',
    price: 134900,
    originalPrice: 149900,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop',
    category: 'electronics',
    brand: 'Apple',
    isFeatured: true,
    isNew: true,
    rating: 4.9,
    reviewCount: 1250,
    description: 'Revolutionary iPhone with titanium design, A17 Pro chip, and pro camera system.',
    stock: 15
  },
  {
    id: '2',
    name: 'MacBook Air M3 13-inch',
    price: 114900,
    originalPrice: 129900,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&h=500&fit=crop',
    category: 'electronics',
    brand: 'Apple',
    isFeatured: true,
    rating: 4.8,
    reviewCount: 890,
    description: 'Ultra-thin laptop with M3 chip for incredible performance and all-day battery life.',
    stock: 12
  },
  {
    id: '3',
    name: 'Samsung Galaxy S24 Ultra',
    price: 129999,
    originalPrice: 139999,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop',
    category: 'electronics',
    brand: 'Samsung',
    isFeatured: true,
    rating: 4.7,
    reviewCount: 756,
    description: 'Premium smartphone with S Pen, 200MP camera, and AI-powered features.',
    stock: 20
  },
  {
    id: '4',
    name: 'Sony WH-1000XM5 Headphones',
    price: 29990,
    originalPrice: 34990,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    category: 'electronics',
    brand: 'Sony',
    rating: 4.8,
    reviewCount: 1543,
    description: 'Industry-leading noise canceling with premium sound quality and 30-hour battery.',
    stock: 35
  },
  {
    id: '5',
    name: 'iPad Pro 12.9-inch M2',
    price: 112900,
    originalPrice: 119900,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop',
    category: 'electronics',
    brand: 'Apple',
    rating: 4.9,
    reviewCount: 654,
    description: 'The ultimate iPad experience with M2 chip and stunning Liquid Retina XDR display.',
    stock: 18
  },
  {
    id: '6',
    name: 'Dell XPS 13 Plus',
    price: 149999,
    originalPrice: 169999,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop',
    category: 'electronics',
    brand: 'Dell',
    rating: 4.6,
    reviewCount: 432,
    description: 'Premium ultrabook with 13th Gen Intel Core processor and InfinityEdge display.',
    stock: 10
  },
  {
    id: '7',
    name: 'Nintendo Switch OLED',
    price: 37999,
    originalPrice: 42999,
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500&h=500&fit=crop',
    category: 'electronics',
    brand: 'Nintendo',
    isNew: true,
    rating: 4.7,
    reviewCount: 890,
    description: 'Enhanced gaming console with vibrant OLED screen and improved audio.',
    stock: 25
  },

  // Fashion & Accessories
  {
    id: '8',
    name: 'Premium Leather Jacket',
    price: 15999,
    originalPrice: 22999,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop',
    category: 'fashion',
    brand: 'StyleCraft',
    isFeatured: true,
    rating: 4.8,
    reviewCount: 234,
    description: 'Genuine Italian leather jacket with timeless design and premium craftsmanship.',
    stock: 20
  },
  {
    id: '9',
    name: 'Designer Silk Dress',
    price: 8999,
    originalPrice: 12999,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=500&fit=crop',
    category: 'fashion',
    brand: 'Elegance',
    rating: 4.6,
    reviewCount: 187,
    description: 'Elegant silk dress perfect for special occasions and formal events.',
    stock: 15
  },
  {
    id: '10',
    name: 'Swiss Automatic Watch',
    price: 45999,
    originalPrice: 55999,
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500&h=500&fit=crop',
    category: 'fashion',
    brand: 'TimeClassic',
    isFeatured: true,
    rating: 4.9,
    reviewCount: 156,
    description: 'Swiss-made automatic watch with sapphire crystal and 42-hour power reserve.',
    stock: 8
  },
  {
    id: '11',
    name: 'Premium Sneakers',
    price: 12999,
    originalPrice: 16999,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
    category: 'fashion',
    brand: 'UrbanStep',
    rating: 4.5,
    reviewCount: 543,
    description: 'Limited edition sneakers with premium materials and comfort technology.',
    stock: 30
  },
  {
    id: '12',
    name: 'Designer Handbag',
    price: 18999,
    originalPrice: 24999,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
    category: 'fashion',
    brand: 'LuxeBag',
    rating: 4.7,
    reviewCount: 298,
    description: 'Handcrafted leather handbag with multiple compartments and elegant design.',
    stock: 12
  },

  // Home & Garden
  {
    id: '13',
    name: 'Smart Home Security System',
    price: 25999,
    originalPrice: 32999,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=500&fit=crop',
    category: 'home-garden',
    brand: 'SecureHome',
    isFeatured: true,
    rating: 4.8,
    reviewCount: 421,
    description: 'Complete smart security system with AI detection and mobile app control.',
    stock: 18
  },
  {
    id: '14',
    name: 'Premium Coffee Machine',
    price: 45999,
    originalPrice: 52999,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=500&fit=crop',
    category: 'home-garden',
    brand: 'BrewMaster',
    rating: 4.9,
    reviewCount: 312,
    description: 'Professional espresso machine with built-in grinder and milk frother.',
    stock: 10
  },
  {
    id: '15',
    name: 'Designer Floor Lamp',
    price: 12999,
    originalPrice: 16999,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
    category: 'home-garden',
    brand: 'LightCraft',
    rating: 4.6,
    reviewCount: 189,
    description: 'Modern designer floor lamp with adjustable brightness and smart controls.',
    stock: 25
  },
  {
    id: '16',
    name: 'Luxury Bedding Set',
    price: 8999,
    originalPrice: 12999,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop',
    category: 'home-garden',
    brand: 'DreamLinen',
    rating: 4.7,
    reviewCount: 456,
    description: 'Egyptian cotton bedding set with 1000 thread count for ultimate comfort.',
    stock: 35
  },
  {
    id: '17',
    name: 'Smart Thermostat',
    price: 15999,
    originalPrice: 19999,
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop',
    category: 'home-garden',
    brand: 'ClimateControl',
    isNew: true,
    rating: 4.5,
    reviewCount: 234,
    description: 'Wi-Fi enabled smart thermostat with energy-saving features and app control.',
    stock: 28
  },

  // Sports & Outdoors
  {
    id: '18',
    name: 'Professional Road Bike',
    price: 85999,
    originalPrice: 99999,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=500&fit=crop',
    category: 'sports-outdoors',
    brand: 'SpeedCycle',
    isFeatured: true,
    rating: 4.8,
    reviewCount: 167,
    description: 'Lightweight carbon fiber road bike with 21-speed transmission system.',
    stock: 8
  },
  {
    id: '19',
    name: 'Fitness Tracker Pro',
    price: 18999,
    originalPrice: 23999,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    category: 'sports-outdoors',
    brand: 'FitTech',
    rating: 4.6,
    reviewCount: 789,
    description: 'Advanced fitness tracker with GPS, heart rate monitor, and 7-day battery.',
    stock: 40
  },
  {
    id: '20',
    name: 'Professional Tennis Racket',
    price: 12999,
    originalPrice: 16999,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=500&fit=crop',
    category: 'sports-outdoors',
    brand: 'TennisAce',
    rating: 4.7,
    reviewCount: 234,
    description: 'Professional-grade tennis racket with carbon fiber construction.',
    stock: 22
  },
  {
    id: '21',
    name: 'Yoga Mat Premium',
    price: 3999,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop',
    category: 'sports-outdoors',
    brand: 'ZenFit',
    rating: 4.8,
    reviewCount: 567,
    description: 'Eco-friendly yoga mat with superior grip and cushioning.',
    stock: 50
  },
  {
    id: '22',
    name: 'Camping Tent 4-Person',
    price: 22999,
    originalPrice: 28999,
    image: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=500&h=500&fit=crop',
    category: 'sports-outdoors',
    brand: 'OutdoorPro',
    rating: 4.5,
    reviewCount: 189,
    description: 'Waterproof 4-person tent with easy setup and UV protection.',
    stock: 15
  },

  // Beauty & Health
  {
    id: '23',
    name: 'Luxury Skincare Set',
    price: 12999,
    originalPrice: 18999,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=500&fit=crop',
    category: 'beauty',
    brand: 'GlowSkin',
    isFeatured: true,
    rating: 4.9,
    reviewCount: 456,
    description: 'Complete luxury skincare routine with anti-aging and hydrating properties.',
    stock: 30
  },
  {
    id: '24',
    name: 'Professional Hair Dryer',
    price: 8999,
    originalPrice: 12999,
    image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500&h=500&fit=crop',
    category: 'beauty',
    brand: 'HairPro',
    rating: 4.6,
    reviewCount: 234,
    description: 'Ionic hair dryer with multiple heat settings and cool shot button.',
    stock: 25
  },
  {
    id: '25',
    name: 'Makeup Artist Kit',
    price: 15999,
    originalPrice: 21999,
    image: 'https://images.unsplash.com/photo-1583241475880-46d40ddfbbd6?w=500&h=500&fit=crop',
    category: 'beauty',
    brand: 'BeautyPro',
    rating: 4.8,
    reviewCount: 345,
    description: 'Professional makeup kit with premium brushes and high-quality cosmetics.',
    stock: 18
  },
  {
    id: '26',
    name: 'Electric Toothbrush Pro',
    price: 6999,
    originalPrice: 9999,
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500&h=500&fit=crop',
    category: 'beauty',
    brand: 'OralCare',
    rating: 4.7,
    reviewCount: 432,
    description: 'Smart electric toothbrush with pressure sensor and app connectivity.',
    stock: 35
  },

  // Books
  {
    id: '27',
    name: 'Programming Masterclass Set',
    price: 4999,
    originalPrice: 7999,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=500&fit=crop',
    category: 'books',
    brand: 'TechPress',
    rating: 4.8,
    reviewCount: 567,
    description: 'Complete programming guide covering Python, JavaScript, and modern frameworks.',
    stock: 40
  },
  {
    id: '28',
    name: 'Business Strategy Bible',
    price: 2999,
    originalPrice: 4499,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
    category: 'books',
    brand: 'BusinessWise',
    rating: 4.6,
    reviewCount: 234,
    description: 'Essential guide to modern business strategy and entrepreneurship.',
    stock: 50
  },
  {
    id: '29',
    name: 'Art & Design Handbook',
    price: 3999,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1541963463532-d68292c34d19?w=500&h=500&fit=crop',
    category: 'books',
    brand: 'CreativePress',
    rating: 4.7,
    reviewCount: 189,
    description: 'Comprehensive guide to digital art, design principles, and creative techniques.',
    stock: 30
  },

  // Automotive
  {
    id: '30',
    name: 'Premium Car Dash Cam',
    price: 12999,
    originalPrice: 16999,
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=500&fit=crop',
    category: 'automotive',
    brand: 'AutoTech',
    rating: 4.5,
    reviewCount: 345,
    description: '4K dash cam with night vision, GPS tracking, and collision detection.',
    stock: 25
  },
  {
    id: '31',
    name: 'Wireless Car Charger',
    price: 3999,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1551966775-a4ddc8df052b?w=500&h=500&fit=crop',
    category: 'automotive',
    brand: 'ChargeFast',
    rating: 4.4,
    reviewCount: 234,
    description: 'Fast wireless car charger with auto-clamping and ventilation mount.',
    stock: 40
  },

  // Toys & Games
  {
    id: '32',
    name: 'Gaming Console Pro',
    price: 55999,
    originalPrice: 64999,
    image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=500&h=500&fit=crop',
    category: 'toys-games',
    brand: 'GameMax',
    isFeatured: true,
    rating: 4.8,
    reviewCount: 456,
    description: 'Next-gen gaming console with 4K graphics and ultra-fast loading.',
    stock: 12
  },
  {
    id: '33',
    name: 'Educational Robot Kit',
    price: 8999,
    originalPrice: 12999,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=500&fit=crop',
    category: 'toys-games',
    brand: 'LearnBot',
    isNew: true,
    rating: 4.7,
    reviewCount: 234,
    description: 'STEM educational robot kit for kids to learn programming and robotics.',
    stock: 20
  },

  // Additional Premium Products
  {
    id: '34',
    name: 'Smart Home Assistant',
    price: 18999,
    originalPrice: 23999,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
    category: 'electronics',
    brand: 'VoiceTech',
    rating: 4.6,
    reviewCount: 678,
    description: 'AI-powered smart speaker with voice control and smart home integration.',
    stock: 30
  },
  {
    id: '35',
    name: 'Wireless Gaming Mouse',
    price: 7999,
    originalPrice: 9999,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop',
    category: 'electronics',
    brand: 'GameGear',
    rating: 4.7,
    reviewCount: 345,
    description: 'Professional wireless gaming mouse with RGB lighting and precision sensor.',
    stock: 45
  },
  {
    id: '36',
    name: 'Bluetooth Earbuds Pro',
    price: 12999,
    originalPrice: 16999,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop',
    category: 'electronics',
    brand: 'AudioMax',
    rating: 4.8,
    reviewCount: 567,
    description: 'Premium wireless earbuds with active noise cancellation and 30-hour battery.',
    stock: 40
  },
  {
    id: '37',
    name: 'Designer Sunglasses',
    price: 15999,
    originalPrice: 19999,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=500&fit=crop',
    category: 'fashion',
    brand: 'LuxeVision',
    rating: 4.5,
    reviewCount: 234,
    description: 'Premium polarized sunglasses with UV protection and titanium frame.',
    stock: 25
  },
  {
    id: '38',
    name: 'Smart Water Bottle',
    price: 4999,
    originalPrice: 6999,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop',
    category: 'sports-outdoors',
    brand: 'HydroSmart',
    isNew: true,
    rating: 4.4,
    reviewCount: 189,
    description: 'Smart water bottle with temperature control and hydration tracking.',
    stock: 35
  },
  {
    id: '39',
    name: 'Air Fryer Pro',
    price: 12999,
    originalPrice: 16999,
    image: 'https://images.unsplash.com/photo-1585515656958-a8a03b641629?w=500&h=500&fit=crop',
    category: 'home-garden',
    brand: 'CookPro',
    rating: 4.7,
    reviewCount: 456,
    description: 'Digital air fryer with multiple cooking presets and oil-free technology.',
    stock: 28
  },
  {
    id: '40',
    name: 'Massage Gun Pro',
    price: 18999,
    originalPrice: 24999,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop',
    category: 'beauty',
    brand: 'RecoveryPro',
    rating: 4.8,
    reviewCount: 345,
    description: 'Professional massage gun with multiple attachments for muscle recovery.',
    stock: 22
  },
  {
    id: '41',
    name: 'Smart Scale Pro',
    price: 6999,
    originalPrice: 8999,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop',
    category: 'beauty',
    brand: 'HealthTech',
    rating: 4.5,
    reviewCount: 234,
    description: 'Smart body composition scale with app connectivity and health insights.',
    stock: 30
  },
  {
    id: '42',
    name: 'Premium Cookbook Set',
    price: 5999,
    originalPrice: 7999,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
    category: 'books',
    brand: 'CulinaryMaster',
    rating: 4.6,
    reviewCount: 189,
    description: 'Collection of premium cookbooks from world-renowned chefs.',
    stock: 25
  },
  {
    id: '43',
    name: 'Car Air Purifier',
    price: 5999,
    originalPrice: 7999,
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=500&fit=crop',
    category: 'automotive',
    brand: 'PureAir',
    rating: 4.4,
    reviewCount: 156,
    description: 'Portable car air purifier with HEPA filter and aromatherapy function.',
    stock: 35
  },
  {
    id: '44',
    name: 'VR Headset Pro',
    price: 45999,
    originalPrice: 54999,
    image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=500&h=500&fit=crop',
    category: 'toys-games',
    brand: 'VirtualMax',
    isFeatured: true,
    rating: 4.7,
    reviewCount: 234,
    description: 'Premium VR headset with 4K display and immersive gaming experience.',
    stock: 15
  },
  {
    id: '45',
    name: 'Mechanical Keyboard RGB',
    price: 9999,
    originalPrice: 12999,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop',
    category: 'electronics',
    brand: 'KeyMaster',
    rating: 4.6,
    reviewCount: 345,
    description: 'Mechanical gaming keyboard with RGB backlighting and tactile switches.',
    stock: 40
  }
];

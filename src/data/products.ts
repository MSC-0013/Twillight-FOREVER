
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
  // Electronics - Smartphones
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
    name: 'Samsung Galaxy S24 Ultra',
    description: 'Premium Android flagship with S Pen, 200MP camera, and AI features.',
    price: 1299,
    originalPrice: 1399,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500',
    images: ['https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500'],
    category: 'Electronics',
    subcategory: 'Smartphones',
    rating: 4.7,
    reviewCount: 1923,
    stock: 18,
    brand: 'Samsung',
    features: ['S Pen', '200MP Camera', 'AI Photo Edit', '5G'],
    specifications: {
      'Display': '6.8" Dynamic AMOLED 2X',
      'Storage': '256GB',
      'Camera': '200MP Main + 50MP Periscope + 12MP Ultra Wide',
      'Battery': '5000mAh'
    },
    tags: ['android', 'flagship', 'photography'],
    isFeatured: true,
    discount: 7
  },
  // Electronics - Laptops
  {
    id: '3',
    name: 'MacBook Pro 16" M3',
    description: 'Supercharged by M3 Pro chip for demanding workflows.',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500',
    images: ['https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500'],
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
    id: '4',
    name: 'Dell XPS 13 Plus',
    description: 'Ultra-premium Windows laptop with stunning InfinityEdge display.',
    price: 1299,
    originalPrice: 1499,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500',
    images: ['https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500'],
    category: 'Electronics',
    subcategory: 'Laptops',
    rating: 4.6,
    reviewCount: 892,
    stock: 22,
    brand: 'Dell',
    features: ['InfinityEdge Display', 'Intel 12th Gen', 'Premium Build', 'Fast Charging'],
    specifications: {
      'Processor': 'Intel Core i7-1260P',
      'Memory': '16GB LPDDR5',
      'Storage': '512GB SSD',
      'Display': '13.4" OLED Touch'
    },
    tags: ['windows', 'ultrabook', 'business'],
    discount: 13
  },
  // Electronics - Audio
  {
    id: '5',
    name: 'Sony WH-1000XM5',
    description: 'Industry-leading noise canceling headphones with exceptional sound quality.',
    price: 399,
    image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500',
    images: ['https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500'],
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
    id: '6',
    name: 'AirPods Pro 2nd Gen',
    description: 'Enhanced noise cancellation and spatial audio experience.',
    price: 249,
    originalPrice: 279,
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500',
    images: ['https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500'],
    category: 'Electronics',
    subcategory: 'Audio',
    rating: 4.8,
    reviewCount: 3241,
    stock: 45,
    brand: 'Apple',
    features: ['Active Noise Cancellation', 'Transparency Mode', 'Spatial Audio', 'MagSafe Charging'],
    specifications: {
      'Driver': 'Custom high-excursion',
      'Battery': '6hrs + 30hrs with case',
      'Connectivity': 'Bluetooth 5.3',
      'Weight': '5.3g each'
    },
    tags: ['wireless', 'earbuds', 'apple'],
    discount: 11
  },
  // Fashion - Clothing
  {
    id: '7',
    name: 'Levi\'s 501 Original Jeans',
    description: 'The original blue jean since 1873. Straight fit with button fly.',
    price: 89,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
    images: ['https://images.unsplash.com/photo-1542272604-787c3835535d?w=500'],
    category: 'Fashion',
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
  },
  {
    id: '8',
    name: 'Nike Air Force 1',
    description: 'The classic basketball shoe that changed the game forever.',
    price: 110,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500',
    images: ['https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500'],
    category: 'Fashion',
    subcategory: 'Shoes',
    rating: 4.6,
    reviewCount: 5432,
    stock: 120,
    brand: 'Nike',
    features: ['Air Cushioning', 'Leather Upper', 'Rubber Outsole', 'Classic Design'],
    specifications: {
      'Material': 'Leather and synthetic',
      'Sole': 'Rubber',
      'Technology': 'Air cushioning',
      'Fit': 'True to size'
    },
    tags: ['basketball', 'classic', 'streetwear'],
    isFeatured: true
  },
  {
    id: '9',
    name: 'Adidas Ultraboost 22',
    description: 'Revolutionary running shoe with incredible energy return.',
    price: 190,
    originalPrice: 220,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
    images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500'],
    category: 'Fashion',
    subcategory: 'Shoes',
    rating: 4.7,
    reviewCount: 1876,
    stock: 65,
    brand: 'Adidas',
    features: ['Boost Technology', 'Primeknit Upper', 'Continental Rubber', 'Energy Return'],
    specifications: {
      'Material': 'Primeknit textile',
      'Sole': 'Continental rubber',
      'Technology': 'Boost midsole',
      'Drop': '10mm'
    },
    tags: ['running', 'performance', 'comfort'],
    discount: 14
  },
  // Electronics - Gaming
  {
    id: '10',
    name: 'PlayStation 5',
    description: 'Next-gen gaming console with lightning-fast loading and haptic feedback.',
    price: 499,
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500',
    images: ['https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500'],
    category: 'Electronics',
    subcategory: 'Gaming',
    rating: 4.9,
    reviewCount: 8765,
    stock: 8,
    brand: 'Sony',
    features: ['4K Gaming', 'Ray Tracing', 'SSD Storage', 'Haptic Feedback'],
    specifications: {
      'CPU': 'AMD Zen 2',
      'GPU': 'AMD RDNA 2',
      'Storage': '825GB SSD',
      'Resolution': 'Up to 4K'
    },
    tags: ['gaming', 'console', 'entertainment'],
    isFeatured: true
  },
  // Continue with more products...
  {
    id: '11',
    name: 'Nintendo Switch OLED',
    description: 'Portable gaming console with vibrant OLED screen.',
    price: 349,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500',
    images: ['https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500'],
    category: 'Electronics',
    subcategory: 'Gaming',
    rating: 4.8,
    reviewCount: 4532,
    stock: 25,
    brand: 'Nintendo',
    features: ['OLED Display', 'Portable Gaming', 'TV Mode', 'Joy-Con Controllers'],
    specifications: {
      'Display': '7" OLED',
      'Storage': '64GB',
      'Battery': 'Up to 9 hours',
      'Resolution': '1280x720 handheld'
    },
    tags: ['portable', 'family', 'nintendo'],
    isNew: true
  },
  // Home & Garden
  {
    id: '12',
    name: 'Dyson V15 Detect',
    description: 'Advanced cordless vacuum with laser dust detection.',
    price: 749,
    originalPrice: 849,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500',
    images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500'],
    category: 'Home & Garden',
    subcategory: 'Appliances',
    rating: 4.6,
    reviewCount: 2134,
    stock: 18,
    brand: 'Dyson',
    features: ['Laser Detection', 'HEPA Filtration', 'LCD Screen', '60min Runtime'],
    specifications: {
      'Battery': '60 minutes',
      'Filtration': 'HEPA',
      'Capacity': '0.77L',
      'Weight': '3.0kg'
    },
    tags: ['cleaning', 'cordless', 'technology'],
    discount: 12
  },
  {
    id: '13',
    name: 'KitchenAid Stand Mixer',
    description: 'Professional-grade stand mixer for all your baking needs.',
    price: 399,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500',
    images: ['https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500'],
    category: 'Home & Garden',
    subcategory: 'Kitchen',
    rating: 4.8,
    reviewCount: 3456,
    stock: 32,
    brand: 'KitchenAid',
    features: ['10 Speeds', 'Tilt-Head Design', 'Stainless Steel Bowl', 'Multiple Attachments'],
    specifications: {
      'Capacity': '4.5 quarts',
      'Power': '275 watts',
      'Speeds': '10',
      'Material': 'Die-cast zinc'
    },
    tags: ['baking', 'kitchen', 'professional'],
    isFeatured: true
  },
  // Beauty & Personal Care
  {
    id: '14',
    name: 'Dyson Airwrap',
    description: 'Multi-styler for all hair types without extreme heat damage.',
    price: 599,
    image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500',
    images: ['https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500'],
    category: 'Beauty',
    subcategory: 'Hair Care',
    rating: 4.5,
    reviewCount: 2876,
    stock: 22,
    brand: 'Dyson',
    features: ['No Heat Damage', 'Multiple Attachments', 'Coanda Effect', 'Fast Drying'],
    specifications: {
      'Heat Settings': '3',
      'Speed Settings': '3',
      'Attachments': '6',
      'Cord Length': '2.62m'
    },
    tags: ['hair', 'styling', 'professional'],
    isNew: true
  },
  {
    id: '15',
    name: 'Fenty Beauty Foundation',
    description: 'Award-winning foundation with 40 inclusive shades.',
    price: 39,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500',
    images: ['https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500'],
    category: 'Beauty',
    subcategory: 'Makeup',
    rating: 4.7,
    reviewCount: 8765,
    stock: 85,
    brand: 'Fenty Beauty',
    features: ['40 Shades', 'Long-Wearing', 'Buildable Coverage', 'All Skin Types'],
    specifications: {
      'Coverage': 'Medium to Full',
      'Finish': 'Natural',
      'Volume': '32ml',
      'Formula': 'Oil-free'
    },
    tags: ['makeup', 'inclusive', 'long-wearing'],
    isFeatured: true
  },
  // Sports & Outdoor
  {
    id: '16',
    name: 'Yeti Rambler Tumbler',
    description: 'Insulated stainless steel tumbler that keeps drinks perfect.',
    price: 35,
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?w=500',
    images: ['https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?w=500'],
    category: 'Sports & Outdoor',
    subcategory: 'Drinkware',
    rating: 4.8,
    reviewCount: 5432,
    stock: 120,
    brand: 'Yeti',
    features: ['Double-Wall Insulation', 'MagSlider Lid', 'Dishwasher Safe', 'No Sweat Design'],
    specifications: {
      'Capacity': '20oz',
      'Material': '18/8 Stainless Steel',
      'Insulation': 'Double-wall vacuum',
      'Dimensions': '6.875" H x 3.5" W'
    },
    tags: ['outdoor', 'insulated', 'durable']
  },
  {
    id: '17',
    name: 'Patagonia Down Jacket',
    description: 'Lightweight, packable down jacket for outdoor adventures.',
    price: 229,
    originalPrice: 279,
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?w=500',
    images: ['https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?w=500'],
    category: 'Sports & Outdoor',
    subcategory: 'Clothing',
    rating: 4.7,
    reviewCount: 1876,
    stock: 45,
    brand: 'Patagonia',
    features: ['800-Fill Down', 'Packable', 'Water-Resistant', 'Recycled Materials'],
    specifications: {
      'Fill': '800-fill-power down',
      'Weight': '285g',
      'Material': 'Recycled polyester',
      'Features': 'Packable into pocket'
    },
    tags: ['outdoor', 'sustainable', 'warm'],
    discount: 18
  },
  // Books & Media
  {
    id: '18',
    name: 'Kindle Paperwhite',
    description: 'Waterproof e-reader with 6.8" display and adjustable warm light.',
    price: 139,
    image: 'https://images.unsplash.com/photo-1481667641078-8f47b7b1e2b9?w=500',
    images: ['https://images.unsplash.com/photo-1481667641078-8f47b7b1e2b9?w=500'],
    category: 'Books & Media',
    subcategory: 'E-readers',
    rating: 4.6,
    reviewCount: 12543,
    stock: 67,
    brand: 'Amazon',
    features: ['Waterproof', 'Adjustable Warm Light', 'Weeks of Battery', 'Glare-Free'],
    specifications: {
      'Display': '6.8" 300 ppi',
      'Storage': '8GB',
      'Battery': 'Up to 10 weeks',
      'Connectivity': 'Wi-Fi'
    },
    tags: ['reading', 'portable', 'digital']
  },
  // Continue with more products to reach 50...
  {
    id: '19',
    name: 'Apple Watch Series 9',
    description: 'Advanced smartwatch with health tracking and fitness features.',
    price: 399,
    image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500',
    images: ['https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500'],
    category: 'Electronics',
    subcategory: 'Wearables',
    rating: 4.7,
    reviewCount: 6789,
    stock: 34,
    brand: 'Apple',
    features: ['Health Tracking', 'GPS', 'Water Resistant', 'App Store'],
    specifications: {
      'Display': '45mm Retina',
      'Battery': '18 hours',
      'Storage': '64GB',
      'Connectivity': 'Wi-Fi + Cellular'
    },
    tags: ['smartwatch', 'health', 'fitness'],
    isNew: true
  },
  {
    id: '20',
    name: 'Samsung 4K Smart TV',
    description: '55" QLED 4K Smart TV with Quantum Dot technology.',
    price: 799,
    originalPrice: 999,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500',
    images: ['https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500'],
    category: 'Electronics',
    subcategory: 'TV & Video',
    rating: 4.5,
    reviewCount: 2345,
    stock: 12,
    brand: 'Samsung',
    features: ['QLED Technology', 'Smart TV', 'HDR10+', 'Gaming Mode'],
    specifications: {
      'Size': '55 inches',
      'Resolution': '4K UHD',
      'Technology': 'QLED',
      'Smart Platform': 'Tizen'
    },
    tags: ['entertainment', 'smart', '4k'],
    discount: 20
  }
  // Add 30 more products following the same pattern...
];

export const categories = [
  { id: 'electronics', name: 'Electronics', icon: '📱' },
  { id: 'fashion', name: 'Fashion', icon: '👕' },
  { id: 'home-garden', name: 'Home & Garden', icon: '🏠' },
  { id: 'beauty', name: 'Beauty', icon: '💄' },
  { id: 'sports-outdoor', name: 'Sports & Outdoor', icon: '⚽' },
  { id: 'books-media', name: 'Books & Media', icon: '📚' }
];

export const banners = [
  {
    id: '1',
    title: 'Summer Sale',
    subtitle: 'Up to 70% off on selected items',
    image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=1200',
    cta: 'Shop Now',
    link: '/products?sale=true'
  },
  {
    id: '2',
    title: 'New Arrivals',
    subtitle: 'Discover the latest trends',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200',
    cta: 'Explore',
    link: '/products?new=true'
  },
  {
    id: '3',
    title: 'Tech Week',
    subtitle: 'Latest gadgets at amazing prices',
    image: 'https://images.unsplash.com/photo-1518614994439-8f3e82b2e8f5?w=1200',
    cta: 'Shop Tech',
    link: '/products?category=electronics'
  }
];

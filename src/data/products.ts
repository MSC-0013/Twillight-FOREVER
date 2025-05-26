
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  description: string;
  category: string;
  brand: string;
  rating: number;
  reviewCount: number;
  stock: number;
  isFeatured: boolean;
  isNew: boolean;
  features: string[];
  specifications: Record<string, string>;
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
  { id: 'clothing', name: 'Clothing', icon: '👕' },
  { id: 'books', name: 'Books', icon: '📚' },
  { id: 'home-garden', name: 'Home & Garden', icon: '🏠' },
  { id: 'sports-outdoors', name: 'Sports & Outdoors', icon: '⚽' },
  { id: 'beauty-health', name: 'Beauty & Health', icon: '💄' }
];

export const banners: Banner[] = [
  {
    id: '1',
    title: 'New Collection',
    subtitle: 'Discover the latest trends in fashion and lifestyle',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop',
    link: '/products?category=clothing',
    cta: 'Shop Fashion'
  },
  {
    id: '2',
    title: 'Tech Essentials',
    subtitle: 'Upgrade your digital lifestyle with premium electronics',
    image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=1200&h=400&fit=crop',
    link: '/products?category=electronics',
    cta: 'Shop Electronics'
  },
  {
    id: '3',
    title: 'Home Comfort',
    subtitle: 'Transform your space with our home collection',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=400&fit=crop',
    link: '/products?category=home-garden',
    cta: 'Shop Home'
  }
];

export const products: Product[] = [
  // Electronics
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299,
    originalPrice: 399,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop'
    ],
    description: 'Experience superior sound quality with our premium wireless headphones featuring active noise cancellation.',
    category: 'electronics',
    brand: 'AudioTech',
    rating: 4.8,
    reviewCount: 1247,
    stock: 25,
    isFeatured: true,
    isNew: false,
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Premium leather finish',
      'Hi-Res Audio certified'
    ],
    specifications: {
      'Driver Size': '40mm',
      'Frequency Response': '20Hz-20kHz',
      'Battery Life': '30 hours',
      'Weight': '250g'
    }
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 249,
    originalPrice: 299,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    description: 'Track your fitness goals with this advanced smartwatch featuring heart rate monitoring and GPS.',
    category: 'electronics',
    brand: 'FitTech',
    rating: 4.6,
    reviewCount: 892,
    stock: 40,
    isFeatured: true,
    isNew: true,
    features: [
      'Heart rate monitoring',
      'GPS tracking',
      'Water resistant',
      '7-day battery life'
    ],
    specifications: {
      'Display': '1.4" OLED',
      'Battery': '7 days',
      'Water Rating': '5ATM',
      'Sensors': 'Heart rate, GPS, Accelerometer'
    }
  },
  {
    id: '3',
    name: 'Wireless Bluetooth Speaker',
    price: 79,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
    description: 'Portable speaker with rich bass and 360-degree sound for any occasion.',
    category: 'electronics',
    brand: 'SoundWave',
    rating: 4.4,
    reviewCount: 567,
    stock: 60,
    isFeatured: false,
    isNew: true,
    features: [
      '360-degree sound',
      '12-hour battery',
      'Waterproof design',
      'Voice assistant compatible'
    ],
    specifications: {
      'Power': '20W',
      'Battery': '12 hours',
      'Range': '30 feet',
      'Weight': '600g'
    }
  },
  {
    id: '4',
    name: 'Ultra HD Webcam',
    price: 129,
    image: 'https://images.unsplash.com/photo-1587344007451-b06fe023f0f7?w=400&h=400&fit=crop',
    description: '4K webcam with auto-focus and noise-canceling microphone for professional video calls.',
    category: 'electronics',
    brand: 'VisionTech',
    rating: 4.7,
    reviewCount: 423,
    stock: 35,
    isFeatured: false,
    isNew: false,
    features: [
      '4K Ultra HD',
      'Auto-focus',
      'Noise-canceling mic',
      'Privacy shutter'
    ],
    specifications: {
      'Resolution': '4K @ 30fps',
      'Field of View': '90°',
      'Microphone': 'Dual stereo',
      'Connection': 'USB 3.0'
    }
  },

  // Clothing
  {
    id: '5',
    name: 'Classic Cotton T-Shirt',
    price: 29,
    originalPrice: 39,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    description: 'Premium cotton t-shirt with perfect fit and breathable fabric.',
    category: 'clothing',
    brand: 'ComfortWear',
    rating: 4.5,
    reviewCount: 234,
    stock: 100,
    isFeatured: true,
    isNew: false,
    features: [
      '100% organic cotton',
      'Pre-shrunk fabric',
      'Comfortable fit',
      'Machine washable'
    ],
    specifications: {
      'Material': '100% Organic Cotton',
      'Fit': 'Regular',
      'Care': 'Machine wash cold',
      'Origin': 'Ethically sourced'
    }
  },
  {
    id: '6',
    name: 'Designer Jeans',
    price: 89,
    originalPrice: 129,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop',
    description: 'Premium denim jeans with modern fit and sustainable materials.',
    category: 'clothing',
    brand: 'DenimCraft',
    rating: 4.6,
    reviewCount: 445,
    stock: 75,
    isFeatured: true,
    isNew: true,
    features: [
      'Sustainable denim',
      'Stretch comfort',
      'Fade resistant',
      'Classic five-pocket design'
    ],
    specifications: {
      'Material': '98% Cotton, 2% Elastane',
      'Wash': 'Dark indigo',
      'Fit': 'Slim fit',
      'Length': '32" inseam'
    }
  },

  // Books
  {
    id: '7',
    name: 'The Art of Programming',
    price: 45,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop',
    description: 'Comprehensive guide to modern programming techniques and best practices.',
    category: 'books',
    brand: 'TechPress',
    rating: 4.8,
    reviewCount: 678,
    stock: 50,
    isFeatured: false,
    isNew: true,
    features: [
      '500+ pages',
      'Code examples',
      'Industry insights',
      'Expert interviews'
    ],
    specifications: {
      'Pages': '512',
      'Publisher': 'TechPress',
      'Language': 'English',
      'ISBN': '978-1234567890'
    }
  },

  // Home & Garden
  {
    id: '8',
    name: 'Ceramic Plant Pot Set',
    price: 35,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop',
    description: 'Beautiful ceramic pots perfect for indoor plants and home decoration.',
    category: 'home-garden',
    brand: 'GardenLife',
    rating: 4.3,
    reviewCount: 156,
    stock: 80,
    isFeatured: false,
    isNew: false,
    features: [
      'Drainage holes',
      'Saucer included',
      'Glazed finish',
      'Set of 3 sizes'
    ],
    specifications: {
      'Material': 'Ceramic',
      'Sizes': '4", 6", 8"',
      'Color': 'White/Natural',
      'Drainage': 'Yes'
    }
  },

  // Sports & Outdoors
  {
    id: '9',
    name: 'Professional Yoga Mat',
    price: 59,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop',
    description: 'Premium yoga mat with superior grip and cushioning for all yoga practices.',
    category: 'sports-outdoors',
    brand: 'YogaPro',
    rating: 4.7,
    reviewCount: 334,
    stock: 45,
    isFeatured: true,
    isNew: false,
    features: [
      'Non-slip surface',
      'Extra thick cushioning',
      'Eco-friendly materials',
      'Carrying strap included'
    ],
    specifications: {
      'Thickness': '6mm',
      'Size': '72" x 24"',
      'Material': 'TPE',
      'Weight': '1.2kg'
    }
  },

  // Beauty & Health
  {
    id: '10',
    name: 'Organic Face Serum',
    price: 49,
    originalPrice: 69,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop',
    description: 'Hydrating face serum with natural ingredients for healthy, glowing skin.',
    category: 'beauty-health',
    brand: 'PureSkin',
    rating: 4.6,
    reviewCount: 289,
    stock: 30,
    isFeatured: false,
    isNew: true,
    features: [
      'Organic ingredients',
      'Anti-aging properties',
      'Suitable for all skin types',
      'Cruelty-free'
    ],
    specifications: {
      'Volume': '30ml',
      'Key Ingredients': 'Hyaluronic Acid, Vitamin C',
      'Skin Type': 'All types',
      'Application': 'Morning & Evening'
    }
  },

  // Additional 30 products
  {
    id: '11',
    name: 'Premium Coffee Maker',
    price: 199,
    originalPrice: 249,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop',
    description: 'Professional-grade coffee maker for the perfect brew every time.',
    category: 'electronics',
    brand: 'BrewMaster',
    rating: 4.8,
    reviewCount: 512,
    stock: 20,
    isFeatured: true,
    isNew: false,
    features: ['Programmable', 'Built-in grinder', 'Thermal carafe', '12-cup capacity'],
    specifications: {
      'Capacity': '12 cups',
      'Power': '1400W',
      'Timer': '24-hour programmable',
      'Material': 'Stainless steel'
    }
  },
  {
    id: '12',
    name: 'Leather Crossbody Bag',
    price: 129,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    description: 'Elegant leather crossbody bag perfect for everyday use.',
    category: 'clothing',
    brand: 'LuxeLeather',
    rating: 4.5,
    reviewCount: 298,
    stock: 40,
    isFeatured: false,
    isNew: true,
    features: ['Genuine leather', 'Adjustable strap', 'Multiple compartments', 'RFID protection'],
    specifications: {
      'Material': '100% Genuine Leather',
      'Dimensions': '10" x 8" x 3"',
      'Strap': 'Adjustable 28"-52"',
      'Closure': 'Magnetic snap'
    }
  },
  {
    id: '13',
    name: 'Wireless Gaming Mouse',
    price: 89,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop',
    description: 'High-performance wireless gaming mouse with RGB lighting.',
    category: 'electronics',
    brand: 'GameTech',
    rating: 4.7,
    reviewCount: 445,
    stock: 55,
    isFeatured: false,
    isNew: false,
    features: ['16000 DPI sensor', 'RGB lighting', '70-hour battery', 'Ergonomic design'],
    specifications: {
      'DPI': '16000',
      'Battery': '70 hours',
      'Connection': '2.4GHz wireless',
      'Weight': '85g'
    }
  },
  {
    id: '14',
    name: 'Organic Green Tea',
    price: 24,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop',
    description: 'Premium organic green tea with antioxidants and natural flavor.',
    category: 'beauty-health',
    brand: 'TeaGarden',
    rating: 4.4,
    reviewCount: 167,
    stock: 90,
    isFeatured: false,
    isNew: false,
    features: ['Organic certified', 'Rich in antioxidants', '50 tea bags', 'Ethically sourced'],
    specifications: {
      'Quantity': '50 tea bags',
      'Origin': 'China',
      'Caffeine': 'Low',
      'Certification': 'USDA Organic'
    }
  },
  {
    id: '15',
    name: 'Memory Foam Pillow',
    price: 69,
    originalPrice: 89,
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=400&fit=crop',
    description: 'Contoured memory foam pillow for optimal neck and spine support.',
    category: 'home-garden',
    brand: 'SleepWell',
    rating: 4.6,
    reviewCount: 378,
    stock: 35,
    isFeatured: true,
    isNew: false,
    features: ['Memory foam', 'Cooling gel layer', 'Hypoallergenic', 'Machine washable cover'],
    specifications: {
      'Size': 'Standard (20" x 26")',
      'Material': 'Memory foam with gel',
      'Cover': 'Bamboo fiber',
      'Firmness': 'Medium'
    }
  },
  {
    id: '16',
    name: 'Stainless Steel Water Bottle',
    price: 34,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop',
    description: 'Insulated stainless steel water bottle that keeps drinks cold for 24 hours.',
    category: 'sports-outdoors',
    brand: 'HydroFlask',
    rating: 4.8,
    reviewCount: 623,
    stock: 85,
    isFeatured: false,
    isNew: true,
    features: ['Double-wall insulation', 'Leak-proof lid', 'BPA-free', '32oz capacity'],
    specifications: {
      'Capacity': '32oz (946ml)',
      'Material': 'Stainless steel',
      'Insulation': 'Double-wall vacuum',
      'Temperature': 'Cold 24hrs, Hot 12hrs'
    }
  },
  {
    id: '17',
    name: 'Wireless Charging Pad',
    price: 45,
    image: 'https://images.unsplash.com/photo-1609867882043-b46fa9fadc36?w=400&h=400&fit=crop',
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
    category: 'electronics',
    brand: 'ChargeTech',
    rating: 4.3,
    reviewCount: 234,
    stock: 70,
    isFeatured: false,
    isNew: false,
    features: ['15W fast charging', 'LED indicator', 'Non-slip base', 'Overcharge protection'],
    specifications: {
      'Power': '15W max',
      'Compatibility': 'Qi-enabled devices',
      'Input': 'USB-C',
      'Size': '4" diameter'
    }
  },
  {
    id: '18',
    name: 'Minimalist Desk Lamp',
    price: 79,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    description: 'Modern LED desk lamp with adjustable brightness and color temperature.',
    category: 'home-garden',
    brand: 'LightCraft',
    rating: 4.5,
    reviewCount: 189,
    stock: 45,
    isFeatured: false,
    isNew: true,
    features: ['Touch control', 'USB charging port', 'Eye-care LED', '3 color modes'],
    specifications: {
      'Power': '12W LED',
      'Color Temperature': '3000K-6500K',
      'USB Port': '5V/1A',
      'Adjustment': '180° flexible arm'
    }
  },
  {
    id: '19',
    name: 'Running Shoes',
    price: 119,
    originalPrice: 159,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    description: 'Lightweight running shoes with advanced cushioning technology.',
    category: 'sports-outdoors',
    brand: 'RunTech',
    rating: 4.7,
    reviewCount: 567,
    stock: 60,
    isFeatured: true,
    isNew: false,
    features: ['Breathable mesh', 'Responsive foam', 'Rubber outsole', 'Reflective details'],
    specifications: {
      'Upper': 'Engineered mesh',
      'Midsole': 'EVA foam',
      'Drop': '10mm',
      'Weight': '280g (size 9)'
    }
  },
  {
    id: '20',
    name: 'Silk Scarf',
    price: 89,
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop',
    description: 'Luxurious silk scarf with hand-painted artistic design.',
    category: 'clothing',
    brand: 'SilkArt',
    rating: 4.6,
    reviewCount: 123,
    stock: 25,
    isFeatured: false,
    isNew: true,
    features: ['100% mulberry silk', 'Hand-painted design', 'Rolled edges', 'Gift packaging'],
    specifications: {
      'Material': '100% Mulberry Silk',
      'Size': '35" x 35"',
      'Weight': '65g',
      'Care': 'Dry clean only'
    }
  },
  {
    id: '21',
    name: 'Portable Power Bank',
    price: 59,
    image: 'https://images.unsplash.com/photo-1609592806037-bef2bb65de83?w=400&h=400&fit=crop',
    description: 'High-capacity portable charger with fast charging technology.',
    category: 'electronics',
    brand: 'PowerMax',
    rating: 4.4,
    reviewCount: 445,
    stock: 80,
    isFeatured: false,
    isNew: false,
    features: ['20000mAh capacity', 'PD fast charging', 'LED display', 'Multiple ports'],
    specifications: {
      'Capacity': '20000mAh',
      'Input': 'USB-C PD 18W',
      'Output': 'USB-A & USB-C',
      'Weight': '420g'
    }
  },
  {
    id: '22',
    name: 'Essential Oil Diffuser',
    price: 65,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop',
    description: 'Ultrasonic essential oil diffuser with color-changing LED lights.',
    category: 'home-garden',
    brand: 'AromaLife',
    rating: 4.5,
    reviewCount: 298,
    stock: 40,
    isFeatured: false,
    isNew: false,
    features: ['7 LED colors', 'Timer function', 'Auto shut-off', '300ml capacity'],
    specifications: {
      'Capacity': '300ml',
      'Runtime': '10 hours max',
      'Coverage': '1076 sq ft',
      'Material': 'BPA-free plastic'
    }
  },
  {
    id: '23',
    name: 'Bluetooth Earbuds',
    price: 149,
    originalPrice: 199,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
    description: 'True wireless earbuds with active noise cancellation and premium sound.',
    category: 'electronics',
    brand: 'AudioPro',
    rating: 4.6,
    reviewCount: 789,
    stock: 55,
    isFeatured: true,
    isNew: true,
    features: ['Active noise cancellation', 'Touch controls', '6-hour battery', 'Wireless charging case'],
    specifications: {
      'Battery': '6hrs + 24hrs case',
      'Driver': '12mm dynamic',
      'Codec': 'AAC, SBC',
      'Water Rating': 'IPX4'
    }
  },
  {
    id: '24',
    name: 'Indoor Plant Collection',
    price: 95,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop',
    description: 'Curated collection of low-maintenance indoor plants perfect for beginners.',
    category: 'home-garden',
    brand: 'PlantLife',
    rating: 4.7,
    reviewCount: 234,
    stock: 30,
    isFeatured: false,
    isNew: true,
    features: ['Set of 4 plants', 'Care instructions', 'Decorative pots', 'Low maintenance'],
    specifications: {
      'Plants': 'Snake Plant, Pothos, ZZ Plant, Spider Plant',
      'Pot Size': '4 inches',
      'Light': 'Low to medium',
      'Watering': 'Weekly'
    }
  },
  {
    id: '25',
    name: 'Smart Thermostat',
    price: 199,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    description: 'Wi-Fi enabled smart thermostat with energy-saving features.',
    category: 'electronics',
    brand: 'SmartHome',
    rating: 4.8,
    reviewCount: 456,
    stock: 25,
    isFeatured: false,
    isNew: false,
    features: ['Wi-Fi connectivity', 'Voice control', 'Energy reports', 'Smartphone app'],
    specifications: {
      'Compatibility': 'Most HVAC systems',
      'Display': '3.5" color touchscreen',
      'Connectivity': 'Wi-Fi, Bluetooth',
      'Sensors': 'Temperature, humidity, occupancy'
    }
  },
  {
    id: '26',
    name: 'Vintage Leather Jacket',
    price: 189,
    originalPrice: 249,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop',
    description: 'Classic vintage-style leather jacket with premium craftsmanship.',
    category: 'clothing',
    brand: 'Heritage',
    rating: 4.9,
    reviewCount: 167,
    stock: 15,
    isFeatured: true,
    isNew: false,
    features: ['Genuine leather', 'Vintage styling', 'YKK zippers', 'Interior pockets'],
    specifications: {
      'Material': '100% Genuine Leather',
      'Lining': 'Polyester',
      'Hardware': 'Antique brass',
      'Origin': 'Handcrafted'
    }
  },
  {
    id: '27',
    name: 'Resistance Band Set',
    price: 39,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    description: 'Complete resistance band set for strength training and rehabilitation.',
    category: 'sports-outdoors',
    brand: 'FitBand',
    rating: 4.5,
    reviewCount: 345,
    stock: 75,
    isFeatured: false,
    isNew: false,
    features: ['5 resistance levels', 'Door anchor', 'Carrying bag', 'Exercise guide'],
    specifications: {
      'Resistance Levels': 'Light to Extra Heavy',
      'Material': 'Natural latex',
      'Handles': 'Foam grip',
      'Accessories': 'Door anchor, ankle straps'
    }
  },
  {
    id: '28',
    name: 'Ceramic Dinner Set',
    price: 129,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    description: 'Elegant 16-piece ceramic dinner set for modern dining.',
    category: 'home-garden',
    brand: 'TableCraft',
    rating: 4.6,
    reviewCount: 189,
    stock: 20,
    isFeatured: false,
    isNew: true,
    features: ['16-piece set', 'Microwave safe', 'Dishwasher safe', 'Modern design'],
    specifications: {
      'Pieces': '4 dinner plates, 4 salad plates, 4 bowls, 4 mugs',
      'Material': 'Stoneware',
      'Finish': 'Reactive glaze',
      'Care': 'Dishwasher & microwave safe'
    }
  },
  {
    id: '29',
    name: 'Vitamin C Serum',
    price: 39,
    originalPrice: 55,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop',
    description: 'Brightening vitamin C serum for radiant and youthful skin.',
    category: 'beauty-health',
    brand: 'GlowSkin',
    rating: 4.7,
    reviewCount: 567,
    stock: 45,
    isFeatured: false,
    isNew: false,
    features: ['20% Vitamin C', 'Hyaluronic acid', 'Anti-aging', 'Dermatologist tested'],
    specifications: {
      'Volume': '30ml',
      'Key Ingredients': 'Vitamin C, Hyaluronic Acid, Vitamin E',
      'pH Level': '3.5-4.0',
      'Shelf Life': '2 years'
    }
  },
  {
    id: '30',
    name: 'Mechanical Keyboard',
    price: 159,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop',
    description: 'Professional mechanical keyboard with RGB backlighting and custom switches.',
    category: 'electronics',
    brand: 'KeyCraft',
    rating: 4.8,
    reviewCount: 423,
    stock: 30,
    isFeatured: false,
    isNew: true,
    features: ['Mechanical switches', 'RGB backlighting', 'Programmable keys', 'Detachable cable'],
    specifications: {
      'Switch Type': 'Cherry MX Blue',
      'Layout': 'Full-size (104 keys)',
      'Backlighting': 'RGB per-key',
      'Connection': 'USB-C detachable'
    }
  },
  {
    id: '31',
    name: 'Bamboo Cutting Board Set',
    price: 49,
    image: 'https://images.unsplash.com/photo-1594736797933-d0c7e2e5d14c?w=400&h=400&fit=crop',
    description: 'Sustainable bamboo cutting board set with different sizes for all kitchen needs.',
    category: 'home-garden',
    brand: 'EcoKitchen',
    rating: 4.4,
    reviewCount: 234,
    stock: 65,
    isFeatured: false,
    isNew: false,
    features: ['Set of 3 sizes', 'Antimicrobial bamboo', 'Juice grooves', 'Easy storage'],
    specifications: {
      'Material': '100% Bamboo',
      'Sizes': 'Large 18"×12", Medium 14"×10", Small 10"×8"',
      'Thickness': '3/4 inch',
      'Care': 'Hand wash recommended'
    }
  },
  {
    id: '32',
    name: 'Protein Powder',
    price: 59,
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&h=400&fit=crop',
    description: 'Premium whey protein powder with natural flavors and no artificial additives.',
    category: 'beauty-health',
    brand: 'FitNutrition',
    rating: 4.6,
    reviewCount: 789,
    stock: 90,
    isFeatured: false,
    isNew: false,
    features: ['25g protein per serving', 'No artificial additives', 'Easy mixing', '30 servings'],
    specifications: {
      'Protein per serving': '25g',
      'Flavor': 'Vanilla',
      'Servings': '30',
      'Ingredients': 'Whey protein isolate, natural flavors'
    }
  },
  {
    id: '33',
    name: 'Smart Light Bulbs',
    price: 79,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    description: 'Wi-Fi enabled smart LED bulbs with millions of colors and voice control.',
    category: 'electronics',
    brand: 'BrightTech',
    rating: 4.5,
    reviewCount: 345,
    stock: 50,
    isFeatured: false,
    isNew: true,
    features: ['16 million colors', 'Voice control', 'Energy efficient', 'Pack of 4'],
    specifications: {
      'Wattage': '9W (60W equivalent)',
      'Connectivity': 'Wi-Fi 2.4GHz',
      'Lifespan': '25,000 hours',
      'Compatibility': 'Alexa, Google Assistant'
    }
  },
  {
    id: '34',
    name: 'Hiking Backpack',
    price: 149,
    originalPrice: 189,
    image: 'https://images.unsplash.com/photo-1622260614153-03223fb72052?w=400&h=400&fit=crop',
    description: 'Durable hiking backpack with multiple compartments and hydration system.',
    category: 'sports-outdoors',
    brand: 'TrailGear',
    rating: 4.7,
    reviewCount: 267,
    stock: 35,
    isFeatured: true,
    isNew: false,
    features: ['40L capacity', 'Hydration compatible', 'Rain cover', 'Adjustable straps'],
    specifications: {
      'Capacity': '40 liters',
      'Weight': '2.1kg',
      'Material': 'Ripstop nylon',
      'Dimensions': '55×35×25cm'
    }
  },
  {
    id: '35',
    name: 'Cashmere Sweater',
    price: 199,
    originalPrice: 299,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop',
    description: 'Luxurious cashmere sweater with timeless design and superior comfort.',
    category: 'clothing',
    brand: 'LuxeWear',
    rating: 4.8,
    reviewCount: 145,
    stock: 20,
    isFeatured: true,
    isNew: true,
    features: ['100% cashmere', 'Classic fit', 'Ribbed cuffs', 'Machine washable'],
    specifications: {
      'Material': '100% Cashmere',
      'Weight': 'Lightweight',
      'Fit': 'Classic',
      'Care': 'Machine wash cold, lay flat to dry'
    }
  },
  {
    id: '36',
    name: 'Air Purifier',
    price: 229,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    description: 'HEPA air purifier with smart sensors and quiet operation for clean indoor air.',
    category: 'home-garden',
    brand: 'PureAir',
    rating: 4.6,
    reviewCount: 456,
    stock: 25,
    isFeatured: false,
    isNew: false,
    features: ['True HEPA filter', 'Smart sensors', 'Quiet operation', 'App control'],
    specifications: {
      'Coverage': '400 sq ft',
      'Filtration': 'True HEPA + Carbon',
      'Noise Level': '24-55 dB',
      'Power': '45W'
    }
  },
  {
    id: '37',
    name: 'Gaming Chair',
    price: 299,
    originalPrice: 399,
    image: 'https://images.unsplash.com/photo-1541558869434-2840d308329a?w=400&h=400&fit=crop',
    description: 'Ergonomic gaming chair with lumbar support and premium materials.',
    category: 'home-garden',
    brand: 'GameSeat',
    rating: 4.7,
    reviewCount: 234,
    stock: 15,
    isFeatured: false,
    isNew: true,
    features: ['Lumbar support', 'Adjustable armrests', 'PU leather', '360° swivel'],
    specifications: {
      'Material': 'PU Leather + Memory foam',
      'Weight Capacity': '300 lbs',
      'Height Adjustment': '3.5 inches',
      'Warranty': '3 years'
    }
  },
  {
    id: '38',
    name: 'Wireless Earphones',
    price: 89,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
    description: 'Lightweight wireless earphones with superior sound quality and long battery life.',
    category: 'electronics',
    brand: 'SoundTech',
    rating: 4.4,
    reviewCount: 567,
    stock: 60,
    isFeatured: false,
    isNew: false,
    features: ['8-hour battery', 'IPX7 waterproof', 'Touch controls', 'Quick charge'],
    specifications: {
      'Battery': '8hrs + 24hrs case',
      'Driver': '10mm',
      'Water Rating': 'IPX7',
      'Charging': 'USB-C + Wireless'
    }
  },
  {
    id: '39',
    name: 'Facial Cleanser',
    price: 29,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop',
    description: 'Gentle facial cleanser suitable for all skin types with natural ingredients.',
    category: 'beauty-health',
    brand: 'ClearSkin',
    rating: 4.5,
    reviewCount: 423,
    stock: 80,
    isFeatured: false,
    isNew: false,
    features: ['All skin types', 'Natural ingredients', 'pH balanced', 'Sulfate-free'],
    specifications: {
      'Volume': '150ml',
      'pH Level': '5.5',
      'Key Ingredients': 'Aloe vera, Green tea extract',
      'Type': 'Gel cleanser'
    }
  },
  {
    id: '40',
    name: 'Kitchen Scale',
    price: 45,
    image: 'https://images.unsplash.com/photo-1594736797933-d0c7e1e5d14c?w=400&h=400&fit=crop',
    description: 'Digital kitchen scale with precise measurements and sleek design.',
    category: 'home-garden',
    brand: 'PrecisionCook',
    rating: 4.6,
    reviewCount: 289,
    stock: 45,
    isFeatured: false,
    isNew: false,
    features: ['Digital display', '11 lb capacity', 'Tare function', 'Auto shut-off'],
    specifications: {
      'Capacity': '11 lbs (5kg)',
      'Accuracy': '0.1oz (1g)',
      'Display': 'LCD backlit',
      'Power': '2 AAA batteries'
    }
  }
];

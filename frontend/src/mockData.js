// Mock data for 3dotpay website

export const navigation = [
  {
    name: 'Products',
    items: [
      { name: 'Virtual Card', href: '/virtual-card' },
      { name: 'Physical Card', href: '/physical-card' },
      { name: 'Multi-Currency Wallet', href: '/multi-currency-wallet' },
      { name: 'P2P Transfer', href: '/p2p-transfer' }
    ]
  },
  {
    name: 'Company',
    items: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
      { name: 'Partners', href: '/partners' }
    ]
  },
  {
    name: 'Resources',
    items: [
      { name: 'Blog', href: '/blog' },
      { name: 'Help Center', href: '/help-center' },
      { name: 'API Docs', href: '/api-docs' },
      { name: 'Community', href: '/community' }
    ]
  },
  {
    name: 'Legal',
    items: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
      { name: 'Cookie Policy', href: '/cookie-policy' },
      { name: 'Compliance', href: '/compliance' }
    ]
  }
];

export const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'th', name: 'ไทย', flag: '🇹🇭' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' }
];

export const benefits = [
  {
    id: 1,
    title: 'Multi-Currencies, One App',
    description: 'Manage your stablecoins and local currency all in one app.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
    color: 'from-teal-600 to-cyan-600'
  },
  {
    id: 2,
    title: 'Fast and Secure Stablecoin Payouts',
    description: 'Send and receive funds using secure stablecoin rails.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
    color: 'from-slate-600 to-slate-700'
  },
  {
    id: 3,
    title: 'Convenient Altcoin Access',
    description: 'Access and trade coins easily via P2P.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
    color: 'from-slate-700 to-slate-900'
  },
  {
    id: 4,
    title: 'Spend Globally with Your Crypto Card',
    description: 'Use your crypto card anywhere that accepts card payments.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    color: 'from-gray-400 to-gray-500'
  }
];

export const features = [
  {
    icon: 'CreditCard',
    title: 'Customizable Crypto Cards',
    description: 'Choose from 12 different card themes or upload your own design to make your card truly unique.'
  },
  {
    icon: 'Zap',
    title: 'Instant Virtual Cards',
    description: 'Get your virtual card instantly after KYC verification. Start spending while waiting for your physical card.'
  },
  {
    icon: 'Shield',
    title: 'Multi-Device Security',
    description: 'Secure your account with Access Key protection across all your devices for maximum security.'
  },
  {
    icon: 'Globe',
    title: 'Global Acceptance',
    description: 'Use your crypto card in over 158 countries wherever major payment networks are accepted.'
  },
  {
    icon: 'Wallet',
    title: 'Multi-Currency Support',
    description: 'Manage multiple cryptocurrencies and stablecoins in one convenient wallet.'
  },
  {
    icon: 'ArrowLeftRight',
    title: 'Low-Fee Transactions',
    description: 'Enjoy fast, secure payments with minimal fees on all your crypto transactions worldwide.'
  }
];

export const cardTypes = [
  {
    id: 1,
    name: 'Virtual Card',
    description: 'Instant access to your crypto card',
    features: ['Instant issuance', 'No delivery wait', 'Perfect for online shopping', 'Free to create'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 2,
    name: 'Physical Card',
    description: 'Premium card for everyday use',
    features: ['Global acceptance', 'Contactless payments', 'Custom designs', 'Express delivery'],
    gradient: 'from-blue-500 to-cyan-500'
  }
];

export const stats = [
  { value: '158+', label: 'Countries Supported' },
  { value: '1M+', label: 'Active Users' },
  { value: '$5B+', label: 'Transaction Volume' },
  { value: '24/7', label: 'Customer Support' }
];

export const faqs = [
  {
    question: 'What is 3dotpay?',
    answer: '3dotpay is a crypto payment platform that allows you to spend your cryptocurrency anywhere with our virtual and physical cards. We support multiple cryptocurrencies and stablecoins.'
  },
  {
    question: 'How do I get started?',
    answer: 'Simply download our app, complete the quick KYC verification process, and you\'ll receive your virtual card instantly. You can order a physical card anytime.'
  },
  {
    question: 'Which cryptocurrencies are supported?',
    answer: 'We support major cryptocurrencies including Bitcoin, Ethereum, USDT, USDC, and many other popular stablecoins and altcoins.'
  },
  {
    question: 'Are there any fees?',
    answer: 'We maintain transparent, competitive fees. Virtual cards are free, and we charge minimal transaction fees. Check our pricing page for detailed information.'
  },
  {
    question: 'Is my money safe?',
    answer: 'Yes! We use bank-level security, multi-device protection, and store the majority of funds in cold storage. Your account is protected by our Access Key security system.'
  },
  {
    question: 'Where can I use my card?',
    answer: 'Your 3dotpay card works anywhere that accepts major card networks, both online and in-store, across 158+ countries worldwide.'
  }
];
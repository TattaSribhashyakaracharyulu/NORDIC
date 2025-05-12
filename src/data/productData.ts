export const productData = {
  product: {
    id: 'nordic-lounge-chair',
    name: 'Nordic Lounge Chair',
    price: 299.99,
    compareAtPrice: 349.99,
    description: `Experience the epitome of Nordic design with our signature Lounge Chair. Crafted with premium materials and meticulous attention to detail, this chair offers both aesthetic appeal and exceptional comfort.

    Designed for versatility, it seamlessly integrates into various interior styles, from minimalist to eclectic. The clean lines and organic form create a visually pleasing silhouette that serves as both a functional piece and a statement of style.

    The ergonomic design supports proper posture while providing relaxation. Perfect for reading corners, living spaces, or as an accent piece in bedrooms and offices.`,
    
    shortDescription: 'A modern lounge chair inspired by Scandinavian design principles, featuring clean lines and exceptional comfort.',
    
    images: [
      'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg',
      'https://images.pexels.com/photos/2180883/pexels-photo-2180883.jpeg',
      'https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg',
      'https://images.pexels.com/photos/945225/pexels-photo-945225.jpeg',
      'https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg'
    ],
    
    colors: [
      {
        name: 'Natural Oak',
        hex: '#D4B895',
        images: [
          'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg',
          'https://images.pexels.com/photos/2180883/pexels-photo-2180883.jpeg',
          'https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg',
        ]
      },
      {
        name: 'Walnut',
        hex: '#5E4B3B',
        images: [
          'https://images.pexels.com/photos/945225/pexels-photo-945225.jpeg',
          'https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg',
          'https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg',
        ]
      },
      {
        name: 'Charcoal',
        hex: '#36454F',
        images: [
          'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
          'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg',
          'https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg',
        ]
      },
      {
        name: 'Sage',
        hex: '#9CAF88',
        images: [
          'https://images.pexels.com/photos/1248583/pexels-photo-1248583.jpeg',
          'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg',
          'https://images.pexels.com/photos/945225/pexels-photo-945225.jpeg',
        ]
      }
    ],
    
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    
    details: {
      material: 'Solid oak frame with premium upholstery fabric (55% linen, 45% cotton)',
      dimensions: 'Width: 75cm, Depth: 80cm, Height: 85cm, Seat Height: 45cm',
      careInstructions: 'Spot clean fabric with mild detergent. Dust wooden frame regularly with a soft, dry cloth.',
      origin: 'Designed in Denmark, Manufactured in Portugal'
    }
  },
  
  complementaryProducts: [
    {
      id: 'nordic-side-table',
      name: 'Nordic Side Table',
      price: 129.99,
      image: 'https://images.pexels.com/photos/2451264/pexels-photo-2451264.jpeg',
      category: 'Furniture'
    },
    {
      id: 'wool-throw-pillow',
      name: 'Wool Throw Pillow',
      price: 49.99,
      image: 'https://images.pexels.com/photos/4210337/pexels-photo-4210337.jpeg',
      category: 'Accessories'
    },
    {
      id: 'artisan-ceramic-vase',
      name: 'Artisan Ceramic Vase',
      price: 79.99,
      image: 'https://images.pexels.com/photos/4207785/pexels-photo-4207785.jpeg',
      category: 'Decor'
    },
    {
      id: 'pendant-light',
      name: 'Pendant Light',
      price: 159.99,
      image: 'https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg',
      category: 'Lighting'
    },
    {
      id: 'wool-area-rug',
      name: 'Wool Area Rug',
      price: 199.99,
      image: 'https://images.pexels.com/photos/6508338/pexels-photo-6508338.jpeg',
      category: 'Textiles'
    }
  ],
  
  bundleProducts: [
    {
      id: 'nordic-ottoman',
      name: 'Nordic Ottoman',
      price: 149.99,
      image: 'https://images.pexels.com/photos/890669/pexels-photo-890669.jpeg',
      variant: 'Natural Oak'
    },
    {
      id: 'lumbar-pillow',
      name: 'Lumbar Support Pillow',
      price: 59.99,
      image: 'https://images.pexels.com/photos/6046917/pexels-photo-6046917.jpeg',
      variant: 'Cream Linen'
    }
  ],
  
  relatedProducts: [
    {
      id: 'nordic-dining-chair',
      name: 'Nordic Dining Chair',
      price: 199.99,
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
      category: 'Furniture',
      badge: 'Best Seller',
      colors: ['#D4B895', '#5E4B3B', '#36454F']
    },
    {
      id: 'nordic-sofa',
      name: 'Nordic 3-Seater Sofa',
      price: 899.99,
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
      category: 'Furniture',
      colors: ['#D4B895', '#36454F', '#9CAF88']
    },
    {
      id: 'nordic-coffee-table',
      name: 'Nordic Coffee Table',
      price: 249.99,
      image: 'https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg',
      category: 'Furniture',
      badge: 'New',
      colors: ['#D4B895', '#5E4B3B']
    },
    {
      id: 'nordic-bookshelf',
      name: 'Nordic Bookshelf',
      price: 349.99,
      image: 'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg',
      category: 'Furniture',
      colors: ['#D4B895', '#5E4B3B', '#36454F']
    }
  ]
};
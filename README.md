# Nordic - Premium Furniture & Home Decor

A modern, fully-featured e-commerce product page built with React, TypeScript, and Tailwind CSS. This project showcases a comprehensive shopping experience with advanced features commonly found in high-end e-commerce platforms.

## Features

- **Interactive Product Gallery**
  - Scrollable image gallery with thumbnails
  - Image zoom on hover
  - Smooth transitions between images
  - Support for multiple color variants

- **Advanced Product Selection**
  - Color swatches with real-time image updates
  - Size selection with persistent storage
  - Interactive size chart modal
  - Color comparison tool
  - Quantity selector

- **Enhanced Shopping Experience**
  - Product bundles with automatic discount calculation
  - "Pair Well With" recommendations carousel
  - Related products grid with badges
  - Comprehensive product information tabs

- **User Experience**
  - Fully responsive design (mobile, tablet, desktop)
  - Persistent user preferences via localStorage
  - Accessible modals and interactive elements
  - Smooth animations and transitions
  - Loading state management

## Technical Implementation

- React 18 with TypeScript
- Tailwind CSS for styling
- Context API for state management
- Lucide React for icons
- Responsive images from Pexels
- Modern ES6+ JavaScript features
- Vite for fast development and building

## Getting Started

1. Clone the repository
```bash
git clone <repository-url>
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## Project Structure

```
src/
├── components/         # React components
│   ├── Header.tsx     # Site header with navigation
│   ├── ProductGallery.tsx
│   ├── ProductInfo.tsx
│   └── ...
├── context/           # React Context providers
│   └── ProductContext.tsx
├── data/             # Static data and types
│   └── productData.ts
└── App.tsx           # Root component
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Considerations

- Optimized image loading
- Minimal bundle size
- Efficient state management
- Responsive image sizing
- Code splitting for modals

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

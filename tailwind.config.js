/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFA500",
        secondary: "#F5F5F5",
        background: "#F2F2F2",
      },
      fontFamily: {
        'body': ['Poppins', 'sans-serif'],
        'heading': ['Oswald', 'sans-serif'],
        'oswald': ["Oswald", 'sans-serif'],
      },
      backgroundImage: {
        'hero-back': "url('/src/Assets/hero-bg.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
        'category-background' : "url('/src/Assets/catagory-card-shape (1).png')",
        'bread-crumbs' : "url('/src/Assets/breadcrumb.jpg')",
        'offer-bg' : "url('/src/Assets/offer-bg-1.png')",
        'pizza-offer' : "url('/src/Assets/pizza-bg.png')",
        'order-banner' : "url('/src/Assets/main-cta-bg.jpg')",
        'foodWrapper-banner' : "url('/src/Assets/food-shape-2.png')",
        'Second-banner' : "url('/src/Assets/main-bg.jpg')",
        'pizza-background' : "url('/src/Assets/bg.jpg')",
        'pizza-banner-bg' : "url('/src/Assets/comboo-bg.jpg')",
        'kfc-banner-bg' : "url('/src/Assets/kfc-bg.png')",
        'kfc-banner' : "url('/src/Assets/kfc (1).png')",
        'delivery-banner-bg' : "url('/src/Assets/main-cta-bg-1.jpg')",
        'curve-Shape' : "url('/src/Assets/shape.png')",
        'login-bg' : "url('/src/Assets/tasty-pizza-near-ingredients.jpg')",
      },
      keyframes : {
        bgchange:{
          '0%': {backgroundColor: '#ffb936'},
          '100%':{backgroundColor: '#D22B2A'},

        },
      },
        animation:{
          bgchange:'bgchange 0.8s ease-in-out normal both ',
        },
         slideDown: {
      '0%': { transform: 'translateY(-100%)' },
      '100%': { transform: 'translateY(0)' },
    },
  },
  animation: {
    slideDown: 'slideDown 0.4s ease-out forwards',
  },
      
   
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-outline': {
          color: 'transparent',
          '-webkit-text-stroke': '1px #D12525',
          'text-stroke': '1px #D12525',
        },
        '.text-outline-grey': {
        color: 'transparent',
        '-webkit-text-stroke': '1px #212121',
        'text-stroke': '1px #212121',
      },
      });
    },
  ],
}
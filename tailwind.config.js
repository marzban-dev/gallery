/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }
            'md': '768px',
            // => @media (min-width: 768px) { ... }
            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }
            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        fontFamily: {
            italiana: ["Italiana", "sans-serif"],
            bodoni: ["Libre Bodoni", "sans-serif"],
        },
        extend: {
            colors: {
                primary: "rgba(197,191,171,0.8)",
                secondary: {},
            },
            backgroundImage: {
                // 'explore-slider-bg': "url('/assets/img/explore-slider-bg.jpg')"
            }
        },
    },
    plugins: [
        plugin(({addVariant}) => {
            addVariant('hocus', ['&:hover', '&:focus']);
        })
    ]
}
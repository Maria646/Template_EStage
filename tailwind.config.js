/** @type {import('tailwindcss').Config} */
export default {
  content:  ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', "./node_modules/flowbite/**/*.js"],
  media: false,
  theme: {
    extend: {},
    fontSize: {
      huit: ['8px', '0.5rem'],
      neuf: ['9px', '0.5rem'],
      dix: ['10px', '0.75rem'],
      onze: ['11px', '0.75rem'],
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.25rem'],
      base: ['1rem', '1.5rem'],
      lg: ['1.125rem', '1.75rem'],
      xl: ['1.25rem', '1.75rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.25rem'],
      '4xl': ['2.25rem', '2.5rem'],
      '5xl': ['3rem', '1'],
      '6xl': ['3.75rem', '1'],
      '7xl': ['4.5rem', '1'],
      '8xl': ['6rem', '1'],
      '9xl': ['8rem', '1']
    }
/*     screens:{
      'sm': '640px',
      'md': '768px',
      'lg': '900px',
      'xl': '1280px',
    }, */
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // এখানে এনিমেশনটি ডিফাইন করা হলো
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
      },
      // এখানে কি-ফ্রেম (Keyframes) সেট করা হলো যাতে গ্রেডিয়েন্ট মুভ করে
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
}
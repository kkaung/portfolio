/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            container: {
                padding: {
                    DEFAULT: '1rem',
                    lg: '8rem',
                    xl: '10rem',
                },
            },
        },
    },
    plugins: [],
};

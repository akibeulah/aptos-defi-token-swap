export default {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class', // Enable dark mode
    theme: {
        extend: {
            colors: {
                white: "#F2F2F2",
                primary: '#8b6aa1', // Purple
                secondary: '#34D399', // Green
                text: {
                    DEFAULT: '#FFFFFF', // White
                    secondary: '#6B7280', // Gray
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

module.exports = {
    content: ['./public/index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            animation: {
                grow: 'grow 1s ease-out',
            },
            backgroundImage: {
                'desktop-header': "url('../images/desktop/image-header.jpg')",
                'mobile-header': "url('../images/mobile/image-header.jpg')",
                'desktop-transform': "url('../images/desktop/image-transform.jpg')",
                'mobile-transform': "url('../images/mobile/image-transform.jpg')",
            },
            colors: {
                primary: {
                    cyan: 'hsl(186, 34%, 60%)',
                    red: 'hsl(10, 79%, 65%)',
                },
                neutral: {
                    brown: 'hsl(28, 10%, 53%)',
                    cream: 'hsl(27, 66%, 92%)',
                    'dark-brown': 'hsl(25, 47%, 15%)',
                    orange: 'hsl(33, 100%, 98%)',
                },
            },
            fontFamily: {
                sans: ['DM Sans', 'sans-serif'],
            },
            keyframes: {
                grow: {
                    '0%': { transform: 'scale(1,0)' },
                    '100%': { transform: 'scale(1)' },
                },
            },
        },
    },
    plugins: [],
};

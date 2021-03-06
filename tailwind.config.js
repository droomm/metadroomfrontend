module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: "#ffffff",
                midDark: "#ffffff",
                primary: "#6016FC",
                secondary: "#EF5DA8",
                third: "#161629",
                shadow: "#79BCCF",
                waitingList: "#DFD7F955",
                success: "#f7f7f7"
            },
            screens: {
                'xsm': '420px',
                'sm': '640px',

                'md': '768px',

                'lg': '1024px',

                'xl': '1280px',

                '2xl': '1536px',
                '3xl': '1836px',
                '4xl': '2000px',
            }

        },
    },
    plugins: [],
}
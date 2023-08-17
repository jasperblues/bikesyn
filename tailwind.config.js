/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./docs/**/*.{js,ts,jsx,tsx,html}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'nav-bg': "url(images/header-background.png)",
            },
            container: {
                padding: '16rem',
            },
        },
    },
    plugins: [],
}
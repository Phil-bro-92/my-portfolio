/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                heading: ["Montserrat", "sans-serif"], // use this for headings like your name
                body: ["Montserrat", "sans-serif"] // optional: use for body text too
            }
        }
    },
    plugins: [require("@tailwindcss/forms")]
};

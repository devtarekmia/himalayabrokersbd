import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/js/Components/*.jsx',
        './resources/js/Layouts/*.jsx',
        './resources/js/Pages/Auth/*.jsx',
        './resources/js/Pages/Profile/*.jsx',
        './resources/js/Pages/Profile/**/*.jsx',
        './resources/js/Pages/Dashboard.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],

    corePlugins: {
        preflight: false,
    },
};

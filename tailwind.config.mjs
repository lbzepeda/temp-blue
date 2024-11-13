/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class', // o 'media' si prefieres basarlo en la configuración del sistema
    theme: {
      extend: {
        colors: {
          // Aquí puedes agregar tus colores personalizados
          primary: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
            950: '#082f49',
          },
        },
        fontFamily: {
          sans: ['InterVariable', 'Inter', 'system-ui', 'sans-serif'],
          mono: ['JetBrains Mono', 'monospace'],
        },
        typography: {
          DEFAULT: {
            css: {
              maxWidth: '65ch',
              color: 'inherit',
              a: {
                'color': 'inherit',
                'textDecoration': 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              },
            },
          },
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  };
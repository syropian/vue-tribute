module.exports = {
  mode: 'jit',
  content: ['./demo/**/*.{ts,vue,html}'],
  theme: {
    extend: {
      typography: theme => ({
        dark: {
          css: {
            h2: {
              color: theme('colors.gray.200'),
            },
            h3: {
              color: theme('colors.gray.300'),
            },
            p: {
              color: theme('colors.gray.400'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}

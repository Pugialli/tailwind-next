import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        diego: '#8257E6',
      },
    },
  },
  plugins: [],
}
export default config

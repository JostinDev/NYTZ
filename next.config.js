const { translation } = require('./next-i18next.config.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'fr-CH', 'de-DE'],
    defaultLocale: 'en-US',
    localeDetection: true,
  },
  translation,
}

module.exports = nextConfig

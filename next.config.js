module.exports = {
  // Generate Sitemap.xml
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./utils/generateSiteMap')
    }

    return config
  }
  // End Generate Sitemap.xml
}
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "/personal-blog/" : "",
};

const withOptimizedImages = require('next-optimized-images')

module.exports = withOptimizedImages({
    handleImages: ['jpeg', 'png', 'svg'],
})
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.join(path.resolve(__dirname, 'src/components')),
      '@pages': path.join(path.resolve(__dirname, 'src/pages')),
      '@templates': path.join(
        path.resolve(__dirname, 'src/components/templates')
      ),
      '@atoms': path.join(path.resolve(__dirname, 'src/components/UI/atoms')),
      '@molecules': path.join(
        path.resolve(__dirname, 'src/components/UI/molecules')
      ),
      '@organisms': path.join(
        path.resolve(__dirname, 'src/components/UI/organisms')
      ),
      '@styles': path.join(path.resolve(__dirname, 'src/styles')),
      '@lib': path.join(path.resolve(__dirname, 'src/lib')),
    },
  },
};

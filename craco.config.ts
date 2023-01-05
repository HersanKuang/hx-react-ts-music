const path = require('path')
const CracoLessPlugin = require('craco-less')

const resolve = (dir: string) => path.resolve(__dirname, dir)

module.exports = {
  plugins: [{ plugin: CracoLessPlugin }],
  webpack: {
    alias: {
      '@': resolve('src')
    }
  }
}

export {}

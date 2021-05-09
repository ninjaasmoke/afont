const withPwa = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPwa({
    pwa: {
        dest: 'public',
        runtimeCaching,
    }
})
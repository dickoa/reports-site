const contentful = require('contentful');

// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js
const config = {
  space: process.env.CTF_SPACE_ID,
  environment: process.env.CTF_ENVIRONMENT || 'master',
  accessToken: process.env.CTF_CDA_PREVIEW_TOKEN,
  host: process.env.CTF_HOST,
}

// export `createClient` to use it in page components
module.exports = {
  createClient () {
    return contentful.createClient(config)
  }
}

const withCSS = require('@zeit/next-css')
module.exports = withCSS()
module.exports = {
    env: {
        MONGO_URI: "mongodb+srv://ecomtest:qwer@1234@cluster0.dtlxe.mongodb.net/ecom?retryWrites=true&w=majority",
        DB_NAME: 'ecom'
    }
}
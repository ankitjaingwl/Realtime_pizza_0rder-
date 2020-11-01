const authController = require('../app/http/controllers/authController')
const cartController = require('../app/http/controllers/customer/cartController')
const homecontroller = require('../app/http/controllers/homeController')

function initRoutes(app) {
    app.get('/',homecontroller().index)
    app.get('/cart', cartController().index)
    app.get('/login', authController().login)
    app.get('/register', authController().register)
}

module.exports = initRoutes
const controller = require("./controller");

module.exports = function(app) {
    app.get('/', controller.index)
    app.get('/raven', controller.displayer)
    app.get('/raven/new', controller.adopter)
    app.get('/raven/edit', controller.modifier)
};
const controller = require("./controller");

// ORDER YOUR ROUTES BY COMPLEXITY
// routes with the least to them (like a root/index route)
// should be last/@ the bottom
module.exports = function(app) {
    app.get('/raven/destroy/:_id', controller.destroyer)
    app.get('/raven/edit/:_id', controller.modifier)//related to .post/raven/:_id
    app.get('/raven/new', controller.adopter)//related to .post/raven
    app.get('/raven/:_id', controller.displayer)
    app.post('/raven/:_id', controller.modification)//related to .get/raven/edit/:_id
    app.post('/raven', controller.adoption)//related to .get/raven/new
    app.get('/', controller.index)
};
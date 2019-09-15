const controller = require("./controller");

// ORDER YOUR ROUTES BY COMPLEXITY
// routes with the least to them (like a root/index route)
// should be last/@ the bottom
module.exports = function(app) {
    app.post('/raven/destoy/:_id',)
    app.get('/raven/edit/:_id', controller.modify)
    app.get('/raven/new', controller.adoption)
    app.get('/raven/:_id', controller.displayer)
    app.post('/raven', controller.adopter)
    app.get('/', controller.index)
};
const Raven = require("./models")

module.exports = {
    // RENDERS
    index: function(Request,Response){// should display a table
        console.log("########  @ INDEX");
        Raven.find().then( docs => // put all the ravens in the DB in the table
            Response.render('index', {ravens: docs})
        );
    },
    adopter: function(Request,Response){// should display a form
        console.log("######## @ ADOPT");
        Response.render('adopt');
    },
    displayer: function(Request,Response){// should display data
        console.log("######## @ DISPLAY");
        Raven.findOne(Request.params)// using different methods from Mongoose docs is REALLLY important
            .then(oneRaven => Response.render('display', {aRaven: oneRaven})
            .catch(err => Response.json(err))
        );
    },
    modifier: function(Request,Response){// should display a form
        console.log("######## @ MODIFY");
        Raven.findOne(Request.params)
            .then(oneRaven => Response.render('modify', {aRaven: oneRaven})
            .catch(err => Response.json(err))
        );
    },
    // PROCESSORS
    adoption: function(Request,Response){
        console.log("######## @ ADOPTION PROCESS");
        console.log('######## DATA: ', Request.body);
        let adoptee = Request.body;
        Raven.create(adoptee)//make sure the names for your input's match the
            .then(newRaven => {// the model field names EXACTLY!
                console.log('######## NEW RAVEN: ', newRaven);
                Response.redirect(`/raven/${newRaven._id}`)
            });
    },
    modification: function(Request,Response){
        Raven.updateOne(Request.params,{name: Request.body.name})
            .then(Response.redirect('/'))//I can successfully update
    },
    destroyer: function(Request,Response){
        console.log("######## @ DESTROYER");
        console.log(Request.params);
        let target = Request.params;
        Raven.deleteOne(target)
            .then(Response.redirect('/'))
            .catch(err => Response.json(err));
    },
}
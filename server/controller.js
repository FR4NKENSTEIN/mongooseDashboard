const Raven = require("./models")

module.exports = {
    // RENDERS
    index: function(Request,Response){// should display a table
        console.log("########  @ INDEX");
        Raven.find().then( docs => // put all the ravens in the DB in the table
            Response.render('index', {ravens: docs})
        );
    },
    adoption: function(Request,Response){// should display a form
        console.log("######## @ ADOPT");
        Response.render('adopt');
    },
    displayer: function(Request,Response){// should display data
        console.log("######## @ DISPLAY");
        Raven.findOne(Request.params)
            .then(oneRaven => Response.render('display', {aRaven: oneRaven})
            .catch(err => Response.json(err))
        );
    },
    modify: function(Request,Response){// should display a form
        console.log("######## @ MODIFY");
        Response.render('modify');
    },
    // PROCESSORS
    adopter: function(Request,Response){
        console.log("######## @ ADOPTION PROCESS");
        console.log('######## DATA: ', Request.body);
        // Response.redirect('/raven/new');
        const adoptee = new Raven();
        adoptee.name = Request.body.name_input;
        adoptee.age = Request.body.age_input;
        adoptee.save().then(newRaven => {
            console.log('######## NEW RAVEN: ', newRaven);
            Response.redirect(`/raven/${newRaven._id}`);
        });
    },
}
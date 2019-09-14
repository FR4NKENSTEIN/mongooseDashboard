

module.exports = {
    // RENDERS
    index: function(req,res){
        console.log("########  @ INDEX");
        res.render('index');
    },
    adopter: function(req,res){
        console.log("######## @ ADOPT");
        res.render('adopt');
    },
    displayer: function(req,res){
        console.log("######## @ DISPLAY");
        res.render('display');
    },
    modifier: function(req,res){
        console.log("######## @ MODIFY");
        res.render('modify');
    },
}
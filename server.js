// CONFIGURATION
    // IMPORTS
const express = require("express");
const app = express();

    // SETTINGS
app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');

app.use(express.urlencoded({extended:true}));

// ROUTES
require("./server/routes")(app);


//PORT
app.listen(8000, (err)=>{
    console.log("listening on PORT 8000");
});
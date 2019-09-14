// CONFIGURATION
    // IMPORTS
const express = require("express");
const app = express();

    // SETTINGS
app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');

// ROUTES
require("./server/routes")(app);

//PORT
app.listen(8000, (err)=>{
    console.log("listening on PORT 8000");
});
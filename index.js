// Import express
let express = require('express')
// Initialize the app
let app = express();
// Setup server port
var port = process.env.PORT || 3000;
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World'));
// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running on port " + port);
});
//import routes
let apiRoutes = require("./routes")
//use API routes in the App
app.use('/listProducts', apiRoutes);
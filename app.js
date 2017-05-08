var port = process.env.PORT || 8000;
let server = require('http').Server(app);

server.listen(port, function() {
    console.log("App is running on port " + port);
});
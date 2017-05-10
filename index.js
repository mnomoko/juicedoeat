var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));
//app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/'));

app.set('views', __dirname + '/');
//app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(request, response) {
    response.render('views/index');
    //response.render('views/index');
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
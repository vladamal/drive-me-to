

var express         = require('express'),
    app             = express(),
    path            = require('path');


app.listen(80, '0.0.0.0');

app.use(express.static(path.join(__dirname) + '/webapp'));

app.get('/', function(req, res) {
    res.render('webapp/index.html');
});

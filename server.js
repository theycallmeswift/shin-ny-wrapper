var express = require('express')
  , app = express()
  , fs = require('fs')
  , path = require('path')
  , port = process.env.PORT || 3000;

app.configure(function() {
  app.use(express.logger());
});

function sendPatientData(req, res) {
  var filename = path.join(__dirname, 'data', 'patient' + req.params.id + '.xml')
    , readStream = fs.createReadStream(filename);

  res.setHeader("Access-Control-Allow-Origin", "*");

  readStream.on('open', function () {
    res.setHeader('Content-Type', 'text/xml');
    readStream.pipe(res);
  });

  readStream.on('error', function(err) {
    var statusCode, errorMessage;

    if(err.errno == 34) {
      statusCode = 404;
      errorMessage = "Not Found";
    } else {
      statusCode = 500;
      errorMessage = "Internal Server Error";
    }

    res.setHeader('Content-Type', 'text/xml');
    res.statusCode = statusCode;
    res.send("<?xml version='1.0' encoding='UTF-8'?><errors><error><code>" + statusCode + "</code><message>" + errorMessage + "</message></error></errors>");
  });
}

app.get('/', function(req, res) {
  res.redirect("https://github.com/theycallmeswift/shin-ny-wrapper");
});

app.get('/patients/:id', sendPatientData);
app.get("/bb/record/documentreference/:id/document", sendPatientData);

app.listen(port);
console.log("Listening on port " + port);

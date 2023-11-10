var express = require('express')
var ejs = require('ejs')


var app = express();

app.use(express.static('public')); //Vincular el node.js con la carpeta public.
app.set('view engine', 'ejs'); //Determinar el render de los html con ejs.

app.listen(8080);// Indicación de Puerto para la aplicación. Visualización en navegador: localhost:8080

app.get('/',function(req,res){

    res.send("Hello");

});
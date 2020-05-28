// Módulos
const express = require('express');
const app = express();


const bodyparser = require('body-parser');

const path = require('path');

app.set('port',process.env.PORT ||   3000);
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));
app.use(bodyparser.urlencoded({extended: false}));


app.use(require('./routes'));

app.listen(app.get('port'), () =>{
    console.log("Servidor cargado en el puerto ", app.get('port'));
});

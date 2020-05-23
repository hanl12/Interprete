// Módulos
const express = require('express');
const app = express();

const path = require('path');

app.set('port', 3000);
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));


const peg = require('./parser');

app.use(require('./routes/index'));

app.listen(app.get('port'), () =>{
    console.log("Servidor cargado en el puerto ", app.get('port'));
});

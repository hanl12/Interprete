const express = require('express');
const router = express.Router();
const escodegen = require('escodegen');
const peg = require('../parser');

router.get('/', (req, res) =>{
    res.render('index.html');
});

// router.get('/compilador', (req,res) =>{
//     res.render('compilador.html');
// })
router.post('/add', (req, res) =>{
    var texto = req.body.texto;
    var sw = 0;
    try {
        var parseado = "";
        parseado = peg.parse(texto);
    }catch (e) {
        sw = 1;
        parseado = "";
    }
    

    if(sw!=1 && parseado != "")
    {
        var js = escodegen.generate(parseado);
        try{
            eval(js);
        }
        catch
        {
            sw = 1;
        }
    }

    if(sw == 1)
    {
        res.render('compilador.html', {tittle: "Error sintáctico",compilado: texto,color: "background-color: #F78181;",atss: "Hay un error sintáctico"});
    }
    else
    {
        res.render('compilador.html', {tittle: "Texto válido",compilado: texto,color: "background-color: #81F79F;", atss: js});
    }
});

module.exports = router;
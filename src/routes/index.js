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
    let texto = req.body.texto;
    try {
        var prueba = peg.parse("a");
    }catch (e) {
        let grammar = "Error gramático";
        prueba = "";
    }
    if(prueba != "")
    {
        var js = escodegen.generate(prueba);
        //var ejecucion = eval(js);
    }
    
    res.render('compilador.html', {tittle: 'jajka'});
});

module.exports = router;
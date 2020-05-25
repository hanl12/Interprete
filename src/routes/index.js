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
        var prueba = peg.parse(texto);
    }catch (e) {
        console.log("Error gramático")
        prueba = "";
    }
    if(prueba != "")
    {
        var js = escodegen.generate(prueba);
        try{
            var resultado = eval(js);
            console.log(js);
        }catch(e){
            console.log(e.message);
        }
    }
    
    res.render('compilador.html', {tittle: js});
});

module.exports = router;
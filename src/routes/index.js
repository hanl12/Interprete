const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.render('index.html');
});

router.post('/add', (req, res) =>{
    let texto = req.body.texto;
    console.log(texto);
});

module.exports = router;
var express = require("express");
var modelo = require("../../modelo/modelo");
var router = express.Router();

//raiz de reservas/* y se añade una function
router.get("/", function(req, res, next){
     res.render('index', { title: 'Calendario' });
}
);
router.get("/cliente", function(req, res, next){
     res.render('index', { title: 'Reservas por cliente' });
}
);
router.get("/fechas", function(req, res, next){
    res.render('index', { title: 'Reservas por fechas' });
}
);

module.exports = router;

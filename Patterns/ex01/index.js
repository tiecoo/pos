//importando os pacotes
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//config para aplicacao usar o bodyparser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//definir port 
var port = process.env.port || 3000;
// app.listen(port)

//definindo rota
var router = express.Router();

//middleware
router.use(function(req, res, next){
    console.log('interceptacao pelo middleware');
    next();
})

router.get('/', function(req, res){
    res.json({'message': 'ok, rota de teste funcionando'});
})

//vinculo da app com o motor de rotas
app.use('/api', router)

app.listen(port);
console.log(`api server is ip and running on port ${port}`)
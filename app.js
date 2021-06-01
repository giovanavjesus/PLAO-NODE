const app = require('./config/server')

app.get('/', function (req, res){
    //res.send('<html><body>Portal de Notícias</body></html>');
    res.send("home/index");
});

app.get('/noticias', (req, res)=>{
    //res.send('<html><body>Notícias de tecnologia</body></html>');
    res.send("noticias/noticia")
});

app.get('/noticia', (req, res)=>{
    //res.send('<html><body>Notícias de tecnologia</body></html>');
    res.send("noticias/noticia")
});

app.get('/admin', (req, res)=>{
    //res.send('<html><body>Notícias de moda</body></html>');
    res.send("admin/form_add_noticia")
});

app.listen(3000, function(){
    console.log('Rodando...')
});
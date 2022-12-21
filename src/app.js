const express =  require('express');
const path = require('path');
const app = express(); 

//const publicPath = path.resolve(__dirname, './public');

app.use(express.static('./public'));

const port = process.env.PORT || 3000;
app.listen(port, () => {console.log('Servidor corriendo en puerto http://localhost' + port)});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get('/registro', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/registro.html'));
});

app.post('/registro', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/registro.html'));

})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/login.html'));
});

app.post('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/login.html'));

})

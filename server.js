const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});



app.get('/', (req, res) => {
    // res.send('Hola Mundo')
    res.render('home.hbs', {
        nombre: 'Boris'
    });
});

app.get('/about', (req, res) => {
    // res.send('Hola Mundo')
    res.render('about.hbs');
});

// app.get('/data', (req, res) => {
//     res.send('Hola Data')
// });

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})
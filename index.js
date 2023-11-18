const express = require('express')
const path = require('path')//Trabajar con rutas
const hbs = require('hbs')//Incorporar motor de plantillas

const app = express()

const port = 8383

//Servidor de contenido estático
app.use(express.static('public'))

//Ingeniería de las vistas: hbs
//Asignar la ubicación de los archivos hbs
app.set('views', path.join(__dirname+'/public/views'))
app.set('view engine', 'hbs')

//Configuración del directorio que guardará los archivos partials hbs
hbs.registerPartials(__dirname + '/public/views/partials');

app.get('/', (req, res) => {
    res.render('index')//Redireccionar hacia el archivo de hbs
})

app.get('/pedidos', (req, res) => {
    res.render('listarPedido')//Redireccionar hacia el archivo de hbs
})

app.get('/login', (req, res) => {
    res.render('login')//Redireccionar hacia el archivo de hbs
})

app.get('*', (req, res) => {
    //res.sendFile(__dirname+'/public/views/404.hbs')
    res.render('404')//Redireccionar hacia el archivo de blade
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

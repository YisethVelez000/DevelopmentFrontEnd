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

app.get('/proveedores', (req, res) => {
    res.render('proveedores')
})//Redireccionar hacia el archivo de hbs

app.get('/empleados', (req, res) => {
    res.render('empleados')
})//
app.get('/fichatecnica', (req, res) => {
    res.render('fichatecnica')
})//
app.get('/editarfichatecnica', (req, res) => {
    res.render('editarfichatecnica')
})/
app.get('/listarfichatecnica', (req, res) => {
    res.render('listarfichatecnica')
})/
app.get('/agregarPedido', (req, res) => {
    res.render('agregarPedido')//Redireccionar hacia el archivo de hbs
})

app.get('/insumos', (req, res) => {
    res.render('registrarInsumos')//Redireccionar hacia el archivo de hbs
})

app.get('/categoriaInsumos', (req, res) => {
    res.render('registrarCatInsumos')//Redireccionar hacia el archivo de hbs
})

app.get('/cotizacion', (req, res) => {
    res.render('cotizacion')//Redireccionar hacia el archivo de hbs
})

app.get('/listarCotizacion', (req, res) => {
    res.render('listarCotizacion')//Redireccionar hacia el archivo de hbs
})

app.get('/vistaCotizacion', (req, res) => {
    res.render('vistaCotizacion')//Redireccionar hacia el archivo de hbs
})

app.get('/compras', (req, res) => {
    res.render('compras')//Redireccionar hacia el archivo de hbs
})

app.get('/visualizarCompra', (req, res) => {
    res.render('visualizarCompra')//Redireccionar hacia el archivo de hbs
})

app.get('/editarCompra', (req, res) => {
    res.render('editarCompra')//Redireccionar hacia el archivo de hbs
})



app.get('*', (req, res) => {
    //res.sendFile(__dirname+'/public/views/404.hbs')
    res.render('404')//Redireccionar hacia el archivo de blade
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

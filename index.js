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
    res.render('index')
})

app.get('/pedidos', (req, res) => {
    res.render('listarPedido')
})
app.get('/login', (req, res) => {
    res.render('login')
})
app.get('/proveedores', (req, res) => {
    res.render('proveedores')
})

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
    res.render('agregarPedido')
})

app.get('/insumos', (req, res) => {
    res.render('registrarInsumos')
})

app.get('/categoriaInsumos', (req, res) => {
    res.render('registrarCatInsumos')
})

app.get('/cotizacion', (req, res) => {
    res.render('cotizacion')
})

app.get('/listarCotizacion', (req, res) => {
    res.render('listarCotizacion')
})

app.get('/vistaCotizacion', (req, res) => {
    res.render('vistaCotizacion')
})
app.get('/proveedores', (req, res) => {
    res.render('proveedores')
})

app.get('/empleados', (req, res) => {
    res.render('empleados')
})
app.get('/fichatecnica', (req, res) => {
    res.render('fichatecnica')
})
app.get('/editarfichatecnica', (req, res) => {
    res.render('editarfichatecnica')
})
app.get('/listarfichatecnica', (req, res) => {
    res.render('listarfichatecnica')
})
app.get('/agregarPedido', (req, res) => {
    res.render('agregarPedido')
})

app.get('/insumos', (req, res) => {
    res.render('registrarInsumos')
})

app.get('/categoriaInsumos', (req, res) => {
    res.render('registrarCatInsumos')
})

app.get('/cotizacion', (req, res) => {
    res.render('cotizacion')
})

app.get('/listarCotizacion', (req, res) => {
    res.render('listarCotizacion')
})

app.get('/vistaCotizacion', (req, res) => {
    res.render('vistaCotizacion')
})
app.get('/proveedores', (req, res) => {
    res.render('proveedores')
})

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
    res.render('agregarPedido')
})

app.get('/insumos', (req, res) => {
    res.render('registrarInsumos')
})

app.get('/categoriaInsumos', (req, res) => {
    res.render('registrarCatInsumos')
})
app.get('/visualizarficha', (req, res) => {
    res.render('visualizarficha')//Redireccionar hacia el archivo de hbs
})


app.get('/cotizacion', (req, res) => {
    res.render('cotizacion')
})

app.get('/listarCotizacion', (req, res) => {
    res.render('listarCotizacion')
})

app.get('/vistaCotizacion', (req, res) => {
    res.render('vistaCotizacion')
})
app.get('/editarUsuario', (req, res) => {
    res.render('editarUsuario')
})

app.get('/ordenProduccion', (req, res) => {
    res.render('ordenProduccion')
})
app.get('*', (req, res) => {
    //res.sendFile(__dirname+'/public/views/404.hbs')
    res.render('404')//Redireccionar hacia el archivo de blade
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
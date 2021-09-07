let express = require('express');
let app = express();
let bodyParser = require('body-parser')
const path = require('path');

const mainRutas = require('./routes/main');

// le estamos haciendo saber a express que la carpeta de archivos estaticos será la carpeta public
app.use(express.static(path.join('public')));

// para que mi servidor sepa que tiene que usar este motor de pantillas que esta previamente instalado
app.set('view engine', 'ejs');

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

// le estamos diciendo a app que vamos a utilizar la ruta / y le vamos a pasar las demas rutas que estan guardadas en la variable mainRutas
app.use('/', mainRutas);

// estas dos lineas son muy importantes a la hora de ejecutar el metodo POST del HTML
// le estamos diciendo a la apllicacion que deseamos capturar todo aquello que venga de un FORMULARIO en forma de un OBJETO LITERAL y que a su vez nos de la posibilidad de convertir esta data a un archivo de tipo JSON
// si no ponemos estas dos lineas cualquier información capturada desde un formulario no va a poder ser procesada por el backend de una forma eficiente.
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.listen(3000, ()=>{
    console.log("SERVIDOR FUNCIONANDO EN EL PUERTO 3000");

});
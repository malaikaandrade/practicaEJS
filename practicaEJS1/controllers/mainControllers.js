const nombre= ['Malaika','Donaldo','Aixa','Ayelen', 'Julian','Angeles','Ariana'];
const mainControllers = {
    // aqui lo que le estamos queriendo decir es que nos renderice la vista de index y ponemos render, tampoco es necesario escribir la extension
    index : (req, res) => {
        return res.render('index');
    },
    register : (req, res) => {
        return res.render('registro');
    },
    login : (req, res) => {
        return res.send('login');
    },
    list: (req, res) => {
        // aqui queremos guardar un array de usuarios que quieres para como parámetro dentro de tu HTML (EN LA VISTA userList.ejs)
        // let users= [
        //     'Malaika',
        //     'Donaldo',
        //     'Aixa',
        //     'Ayelen', 
        //     'Julian',
        //     'Angeles',
        //     'Ariana'
        // ];

        let apellidoUsers = [
            'Andrade',
            'Fernández',
            'Andrade',
            'Andrade',
            'Andrade',
            'Fernández',
            'Hernández'

        ];
        // al método render le pasamos como segundo parámetro un objeto literal aclarando las variables que yo tengo en el controlador y quiero compartir con la vista, en este caso la variable users, al ser un objeto literal le tenemos que dar un identificador que normalmente lo llamamos de la misma manera que la variable para no confundirnos. esta identificacion es fundamentar para pasarla a la vista userList.ejs
        res.render('userList', {
            apellidoUsers : apellidoUsers,
            nombres: nombre,
            genero: 'Mujer'
        });
    }

};

module.exports = mainControllers;
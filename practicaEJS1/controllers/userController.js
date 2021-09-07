const userController = {
    registroUsuario: function(req,res){
        res.render('registroUsuario');

    },
    usuarios : function(req, res){
        let users = [
            {id: 1, name : 'Malaika'},
            {id: 2, name : 'Donaldo'},
            {id: 3, name : 'Aixa'},
            {id: 4, name : 'Camila'},
            {id: 5, name : 'Martín'},
            {id: 6, name : 'Marcos'},
        ];
        res.render('userList3', {'users': users}) 
    },
    search: function(req, res){
        let loQueBuscoElUsuario = req.query.search;
        let users = [
            {id: 1, name : 'Malaika'},
            {id: 2, name : 'Donaldo'},
            {id: 3, name : 'Aixa'},
            {id: 4, name : 'Camila'},
            {id: 5, name : 'Martín'},
            {id: 6, name : 'Marcos'},
        ];
        let usersResults = [];
        
        for (let i =0; i<users.length; i++){
            if (users[i].name.includes(loQueBuscoElUsuario)){
                usersResults.push(users[i]);
            }
        }
        res.render('userResults', {usersResults: usersResults});
    },
    create: function(req, res){
        console.log("aqui tot io");
        console.log(req.body)
        // res.send(req.body);
        // let persona= {
        //     nombre: req.body,

        // }
        // res.send(persona);
    }
};

module.exports= userController;
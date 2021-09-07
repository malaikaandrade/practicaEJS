let express = require('express');
let router = express.Router();

let mainControllers = require('../controllers/mainControllers');
let userController = require('../controllers/userController');

// end points=> punto de acceso a una página
router.get('/', mainControllers.index);
router.get('/registro', mainControllers.register);
router.get('/login', mainControllers.login);
router.get('/list', mainControllers.list);
router.get('/usuarios', userController.usuarios);
router.get('/search', userController.search);
// esta ruta de arriba va a reaccionar cuando yo pida el formulario para verlo y llenar los datos
router.get('/registro-usuario', userController.registroUsuario);
// y esta de abajo va a reaccionar cuando yo envíe el formulario y tenga que procesarla, almacenarla en el back
router.post('/registro-usuario', userController.create);

module.exports = router;
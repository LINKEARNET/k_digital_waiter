const express = require("express");
const router = express.Router();
const categoriasController = require('../controllers/categorias.controller');
const { isLoggedIn } = require('../lib/auth');
const f = require('../controllers/fotoCategorias.controller');
const fotoCategoria = require("../controllers/fotoCategorias.controller");


router.get('/', isLoggedIn, categoriasController.getListCategorias);
router.post('/categorias', isLoggedIn,categoriasController.postCategoria);
router.get('/add', isLoggedIn, categoriasController.getAddCategorias);
router.get('/list-categorias', isLoggedIn,categoriasController.getListCategorias);
router.get('/delete-categorias/:id', isLoggedIn,categoriasController.deleteCategoria);
router.get('/edit-categorias/:id', isLoggedIn,categoriasController.getCategoria);
router.post('/edit-categorias/:id', isLoggedIn,categoriasController.updateCategoria);

 
//views profile
router.post('/foto-categoria/:id', isLoggedIn, fotoCategoria.updateFoto);




module.exports = router;

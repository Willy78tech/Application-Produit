const express = require('express');
const router = express.Router();
const homeController = require('./homeController');


router.get("/new", homeController.getIndex); //route qui nous renvoie vers la page ajout produit

router.post("/new", homeController.saveProduct); //route qui permet d'ajouter un produit

router.get("/product/search", homeController.search); //route qui renvoie vers la page de recherche produit

router.get("/search", homeController.FindOneProduct); //route qui permet de rechercher un produit

router.get("/", homeController.allProducts); //route qui renvoie vers la page de tous les produits

router.get("/edit/:id", homeController.editProduct); //route qui renvoie vers la page d'édition d'un produit

router.put("/edit/:id", homeController.update); //route qui permet de mettre à jour un produit

router.delete("/delete/:id", homeController.delete); //route qui permet de supprimer un produit


module.exports = router;

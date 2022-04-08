'use strict';
const Product = require("../model/product");
// fonction qui renvoie vers la page d'ajout produit
exports.getIndex = (req, res)=>{
    res.render("new");
};

// fonction qui renvoie vers la page de recherche produit
exports.search = (req, res)=>{
    res.render("search", {product: null});  
};

// fonction qui permet d'ajouter un produit
exports.saveProduct = (req, res)=>{
    const code = req.body.code;
    const description = req.body.description;
    const price = req.body.price;

    const newProduct = new Product({code: code, description: description, price: price});
    newProduct.save()
    .then(result=> {
        req.flash("success_msg", "Product Data added To Database successfully");
        res.redirect("/");})
    .catch(error=>{
        req.flash("error_msg", "Product not added");
        res.redirect("/");
    });

};

// fonction qui permet de rechercher un produit
exports.FindOneProduct = (req, res)=>{
const searchQuery = {code: req.query.code};
Product.findOne(searchQuery).then(product=>{
    if (product !== null) {
        res.render("search", {product: product});
    } else {
        req.flash("error_msg", `Product does not exist with this name`);
        res.redirect("/product/search");
    }
})
    .catch(error=>{   
        req.flash("error_msg", " not found");
    res.redirect("/");}
);
};

// fonction qui permet d'afficher tous les produits
exports.allProducts = (req, res)=>{
    Product.find({}).then(product=>{
        res.render("index", {products: product});
    }).catch(
        error=>{
            res.redirect("/");
        }
    );
};

// fonction qui renvoie vers la page d'édition d'un produit
exports.editProduct = (req, res)=>{
    const searchById = {_id: req.params.id};
    Product.findOne(searchById).then(
        product=>{res.render("edit", {product: product});}
    ).catch(error => {res.redirect("/");});

};

// fonction qui permet de mettre à jour un produit
exports.update = (req, res)=>{
    const searchQuery = {_id: req.params.id};
    Product.updateOne(searchQuery, {$set: {
        code: req.body.code,
        description: req.body.description,
        price: req.body.price,
    }}).then((product)=>{
        req.flash("success_msg", "Product data updated successfully");
        res.redirect("/");
    })
    .catch(error => {
        req.flash("error_msg", "Product not deleted");
        res.redirect("/");});

};

// fonction qui permet de supprimer un produit
exports.delete = (req, res)=>{

    const searchQuery = {_id: req.params.id}; 
    Product.deleteOne(searchQuery).then(()=>{
        req.flash("success_msg", "Product deleted successfully");
        res.redirect("/");
    }).catch(error=>{
        req.flash("error_msg", "Product not deleted");
        res.redirect("/");
    });

};
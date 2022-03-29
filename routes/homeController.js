'use strict';
const User = require("../model/user");

exports.getIndex = (req, res)=>{
    res.render("new");
};

exports.saveUser = (req, res)=>{
    const code = req.body.code;
    const description = req.body.description;
    const price = req.body.price;

    const newUser = new User({code: code, description: description, price: price});
    newUser.save()
    .then(result=> {
        req.flash("success_msg", "User added successfully");
        res.redirect("/");})
    .catch(error=>{
        req.flash("error_msg", "User not added");
        console.log(error);
    });

};

exports.FindOneUser = (req, res)=>{
const searchById = {_id: req.params.id};
User.findById(searchById).then(user=>{res.render("search");}).catch(
    error=>{console.log(error);}
);

};

exports.allUsers = (req, res)=>{
    User.find({}).then(user=>{
        res.render("index", {users: user});
    }).catch(
        error=>{
            console.log(error);
        }
    );
};

exports.editUser = (req, res)=>{
    const searchById = {_id: req.params.id};
    User.findOne(searchById).then(
        user=>{res.redirect("index", {user: user});}
    ).catch();

};

exports.update = (req, res)=>{
    const searchQuery = {_id: req.params.id};
    User.updateOne(searchQuery, {$set: {
        code: req.body.code,
        description: req.body.description,
        price: req.body.price,
    }}).then((user)=>{
        res.redirect("/");
    })
    .catch(error => {res.redirect("/");});

};



exports.delete = (req, res)=>{

    const searchQuery = {_id: req.params.id}; // filter
    User.deleteOne(searchQuery).then(()=>{
        req.flash("success_msg", "User deleted successfully");
        res.redirect("/");
    }).catch(error=>{
        req.flash("error_msg", "User not deleted");
        res.redirect("/");
    });

};
const express = require('express');
const router = express.Router();
const homeController = require('./homeController');


router.get("/new", homeController.getIndex);
router.post("/new", homeController.saveUser);
router.get("/search/:id", homeController.FindOneUser);

//router.get("/:id", homeController.FindOneUser);
router.get("/", homeController.allUsers);

router.get("/edit/:id", homeController.editUser);

router.put("/edit/:id", homeController.update);

router.delete("/delete/:id", homeController.delete);

module.exports = router;

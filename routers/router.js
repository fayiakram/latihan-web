const express = require("express");
const HomeController = require("../controllers/home.controller");
const homeController = new HomeController;
const router = express.Router();

router.get("/", homeController.index);

module.exports = router;
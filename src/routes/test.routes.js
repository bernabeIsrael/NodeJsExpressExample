const router = require("express").Router();
const test = require("../controllers/test.controller");

// Routes
router.get("/", test);

module.exports = router;
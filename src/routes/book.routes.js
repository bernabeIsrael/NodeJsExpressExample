const router = require("express").Router();
const {container} = require("../di-setup.js");

// Routes
router.get("/",container.resolve('bookController').getBooks);

module.exports = router;
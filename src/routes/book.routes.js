const router = require("express").Router();
const { container } = require("../di-setup.js");

// Routes
router.get("/", container.resolve("bookController").getBooks);
router.post("/", container.resolve("bookController").creatBook);

module.exports = router;

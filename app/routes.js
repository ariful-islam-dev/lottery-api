const router = require("express").Router();

router.use("/api/v1/tickets", require("../routes/tickets"));


router.get("/", (req, res) => {
  res.send({ message: "Hello World" });
});

module.exports = router;

const getEvents = require("../controllers/inedx");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello");
});

router.get("/events", getEvents);

module.exports = router;

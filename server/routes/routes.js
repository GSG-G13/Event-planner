const getEvents = require("../controllers/Events/getEvent");
const { addEvent } = require("../controllers/Events/addEvent");
const { addUser } = require("../controllers/Users/addUser");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello");
});
router.get("/events", getEvents);
router.post("/users", addUser);
router.post("/event", addEvent);
module.exports = router;

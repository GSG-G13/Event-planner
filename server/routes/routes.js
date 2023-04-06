const {
  getAllEvents,
  addEvent,
  addUser,
  updateEvent,
} = require("../controllers/index");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello");
});
router.get("/events", getAllEvents);
router.post("/users", addUser);
router.post("/event", addEvent);
module.exports = router;

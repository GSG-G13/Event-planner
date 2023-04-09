const {
  getAllEvents,
  addEvent,
  addUser,
  login,
  getAttendee,
  updateEventReq
} = require("../controllers/index");

const router = require("express").Router();

router.get("/events", getAllEvents);
router.post("/users", addUser);
router.post("/event", addEvent);
router.post('/login',login);
router.post('/getAttendee',getAttendee);
router.post("/updateEvent",updateEventReq);

module.exports = router;

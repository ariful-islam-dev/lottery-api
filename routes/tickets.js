const router = require("express").Router();

const db = require("../db/db");

// Ticket Router

router.get("/t/:ticketId", (req, res) => {
  const ticketId = req.params.ticketId;
  //   console.log(ticketId);
  const ticket = db.findById(ticketId);
  res.status(200).json(ticket);
});
router.patch("/t/:ticketId", (req, res) => {
  const ticketId = req.params.ticketId;
  const updatedTicket = db.updateById(ticketId, req.body);
  res.status(200).json({ message: "Updated Successfully", updatedTicket });
});

router.delete("/t/:ticketId", (req, res) => {
  const ticketId = req.params.ticketId;
  db.deleteById(ticketId);
  res.status(203).send({
    message: "Delete Successfully",
  });
});

//User Router

router.get("/u/:username", (req, res) => {
  const username = req.params.username;
  
  const tickets = db.findByUsername(username);
  res.status(200).json(tickets);
});
router.patch("/u/:username", (req, res) => {
  const username = req.params.username;

  const updatedTicket = db.updateByUsername(username, req.body);
  res.status(200).json({
    message: "Update Successfully",
    updatedTicket,
  });
});
router.delete("/u/:username", (req, res) => {
  const username = req.params.username;
  db.deleteByUsername(username);
  res.status(203).send({
    message: "Delete Successfully",
  });
});

// Root Router

router.post("/sell", (req, res) => {
  const { username, price } = req.body;
  // console.log(req.body);
  const ticket = db.create(username, price);
  res.status(201).json({
    message: "Ticket Created Successfully",
    ticket,
  });
});
router.post("/bulk", (req, res) => {
  const { username, price, quantity } = req.body;
  const tickets = db.bulkCreate(username, price, quantity);
  res.status(201).json({
    message: "Ticket Created Successfully",
    tickets,
  });
});
router.get("/draw", (req, res) => {
  const winnerCount = req.query.wc ?? 3;
  const winners = db.draw(winnerCount);
  res.status(200).json({
    message: "See all winners",
    winners,
  });
});
router.get("/", (req, res) => {
  //   console.log(req.body);
  const tickets = db.find();
  res.status(200).json({
    tickets,
  });
});
module.exports = router;

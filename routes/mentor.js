const express = require("express");
const router = express.Router();

const { mentor } = require("../shared/db");

router.get("/", async (req, res) => {
  console.log("get all mentors");
  try {
    const data = await mentor.find();
    res.send(data);
  } catch (e) {
    res.send(e);
  }
});

router.post("/", async (req, res) => {
  console.log("mentor create route");
  try {
    const data = await mentor.create({
      name: req.body.name,
      email: req.body.email,
      expert: req.body.expert,
      studentsAssigned: req.body.studentsAssigned,
    });
    res.send(data);
  } catch (e) {
    console.log(e.message, "error");
    res.status(500).send("Error in mentor POST");
  }
});

// router.get("/:id", async (req, res) => {
//   console.log("show all students for particular mentor");
//   try {
//     const ment = await mentor
//       .findById(req.params.id)
//       .populate("studentsAssigned", "name");
//     res.send(ment);
//   } catch (e) {
//     console.log(e, "error");
//     res.status(500).send("error in for 1 mentor get all students");
//   }
// });
module.exports = router;
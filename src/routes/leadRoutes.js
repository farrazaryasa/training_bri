const express = require("express");
const router = express.Router();

const {
    createLead,
    updateLead
} = require("../controllers/leadController");

router.post("/", createLead);
router.put("/:id", updateLead);

module.exports = router;
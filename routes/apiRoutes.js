const express = require("express");
const {
  processRequest,
  getOperationCode,
} = require("../controllers/apiController");

const router = express.Router();

router.post("/", processRequest);

router.get("/", getOperationCode);

module.exports = router;

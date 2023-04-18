const express = require("express");
const problemController = require("../controllers/problems");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.get("/", checkAuth, problemController.getProblems);
router.post("/", checkAuth, problemController.addProblem);
router.put("/:problemId", checkAuth, problemController.updateProblem);
router.delete("/:problemId", checkAuth, problemController.deleteProblem);

module.exports = router;

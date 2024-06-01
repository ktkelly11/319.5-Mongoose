const { Router } = require("express");
const gradesCtrl = require("../controllers/grades.js");

const router = Router();

router.post("/", gradesCtrl.createGrade);

router.get("/", gradesCtrl.getGrades);

module.exports = router;

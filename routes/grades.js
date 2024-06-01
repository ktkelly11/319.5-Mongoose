const { Router } = require("express");
const gradesCtrl = require("../controllers/grades.js");

const router = Router();

router.post("/", gradesCtrl.createGrade);

router.get("/", gradesCtrl.getGrades);

router.put("/:id", gradesCtrl.updateGrade);

router.delete("/:id", gradesCtrl.deleteGrade);

module.exports = router;

const Grade = require("../models/Grade");

module.exports = {
  getGrades,
  createGrade,
  updateGrade,
};

async function createGrade(req, res) {
  try {
    const grade = new Grade(req.body);

    await grade.save();
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getGrades(req, res) {
  try {
    const grades = await Grade.find({});

    res.status(200).json(grades);
  } catch (err) {
    res.status(400).send(err);
  }
}

async function updateGrade(req, res) {
  try {
    const updatedGrade = await Grade.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json(updatedGrade);
  } catch (err) {
    res.status(400).send(err);
  }
}

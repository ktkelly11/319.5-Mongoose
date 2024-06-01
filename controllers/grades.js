const Grade = require("../models/Grade");

module.exports = {
  getGrades,
};

async function getGrades(req, res) {
  try {
    const grades = await Grade.find({});

    res.status(200).json(grades);
  } catch (err) {
    res.status(400).send(err);
  }
}

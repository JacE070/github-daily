const Problem = require("../models/Problem");

const getProblems = async (req, res) => {
  try {
    const problems = await Problem.find({ user: req.userId });
    res.status(200).json({ problems });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const addProblem = async (req, res) => {
  const { name, leetcodeUrl, difficulty } = req.body;

  try {
    const problem = new Problem({
      name,
      leetcodeUrl,
      difficulty,
      completionDate: new Date(),
      user: req.userId,
    });

    await problem.save();

    res.status(201).json({ problem, message: "Problem added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const updateProblem = async (req, res) => {
  const { problemId } = req.params;
  const { name, leetcodeUrl, difficulty, completionDate } = req.body;

  try {
    const problem = await Problem.findById(problemId);

    if (!problem) {
      return res.status(404).json({ message: "Problem not found" });
    }

    if (problem.user.toString() !== req.userId) {
      return res
        .status(403)
        .json({ message: "Not authorized to update this problem" });
    }

    problem.name = name;
    problem.leetcodeUrl = leetcodeUrl;
    problem.difficulty = difficulty;
    problem.completionDate = completionDate;

    await problem.save();

    res.status(200).json({ problem, message: "Problem updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const deleteProblem = async (req, res) => {
  const { problemId } = req.params;

  try {
    const problem = await Problem.findById(problemId);

    if (!problem) {
      return res.status(404).json({ message: "Problem not found" });
    }

    if (problem.user.toString() !== req.userId) {
      return res
        .status(403)
        .json({ message: "Not authorized to delete this problem" });
    }

    await problem.remove();

    res.status(200).json({ message: "Problem deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  getProblems,
  addProblem,
  updateProblem,
  deleteProblem,
};

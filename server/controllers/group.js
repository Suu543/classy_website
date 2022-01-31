const { Group } = require("../models/Group");

exports.saveGroupInfo = async (req, res) => {
  const { name, teamname, email, phone, base_resorts, lesson_resorts } =
    req.body;
  const group = new Group({
    name,
    teamname,
    email,
    phone,
    base_resorts,
    lesson_resorts,
  });

  console.log("Group", group);

  try {
    await group.save();
    return res.status(201).json({
      message: "Group is successfully created...",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: "Failed to save user",
    });
  }
};

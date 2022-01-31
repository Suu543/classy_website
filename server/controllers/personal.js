const { Personal } = require("../models/Personal");

exports.savePersonalInfo = async (req, res) => {
  const { name, email, phone, resorts, licenses } = req.body;
  const personal = new Personal({ name, email, phone, resorts, licenses });
  //   console.log(`
  //     name: ${name}, \n
  //     email: ${email}, \n
  //     phone: ${phone}, \n
  //     resorts: ${resorts}, \n
  //     licenses: ${licenses}
  //     `);
  console.log("Personal", personal);

  try {
    await personal.save();
    return res.status(201).json({
      message: "User is successfully created...",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: "Failed to save user",
    });
  }
};

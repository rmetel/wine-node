const router = require("express").Router();
const sendMail = require("../utilities/sendemail");

router.post("/", async (req, res) => {
  try {
    const email = await req.body.email;
    const name = await req.body.name;
    const message = await req.body.message;

    await sendMail(email, name, message);

    return res.status(200).send("Email was sent.");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    res
      .status(200)
      .send(
        "Here is where we write our logic and functionalities to send the email"
      );
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;

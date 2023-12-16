const router = require("express").Router();
const sendMail = require("../utilities/sendEmail");

router.post("/", async (req, res) => {
  try {
    const firstName = await req.body.firstName;
    const lastName = await req.body.lastName;
    const email = await req.body.email;
    const phone = await req.body.phone;
    const message = await req.body.message;

    await sendMail(firstName, lastName, email, phone, message);

    return res.status(200).send("Ihre Nachricht wurde gesendet, vielen Dank!");
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

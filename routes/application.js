const router = require("express").Router();
const sendApplication = require("../utilities/sendApplication");

router.post("/", async (req, res) => {
  try {
    const firstName = await req.body.firstName;
    const lastName = await req.body.lastName;
    const street = await req.body.street;
    const streetNumber = await req.body.streetNumber;
    const zip = await req.body.zip;
    const city = await req.body.city;
    const email = await req.body.email;
    const phone = await req.body.phone;
    const message = await req.body.message;

    await sendApplication(
      firstName,
      lastName,
      street,
      streetNumber,
      zip,
      city,
      email,
      phone,
      message
    );

    return res.status(200).send("Ihre Bewerbung wurde versendet, vielen Dank!");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;

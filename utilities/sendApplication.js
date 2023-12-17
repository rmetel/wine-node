const getTransporter = require("../utilities/transporter");

module.exports = async (
  firstName,
  lastName,
  street,
  streetNumber,
  zip,
  city,
  email,
  phone,
  message
) => {
  try {
    const transporter = await getTransporter();

    // Defining the mail and sending it using the transport
    await transporter.sendMail({
      from: {
        name: process.env.SENDER_NAME,
        address: process.env.USER,
      },
      cc: [
        // "info@metzner-gruppe.com",
        "ralph.metel@gmail.com",
      ],
      replyTo: email,
      to: process.env.USER,
      subject: "Bewerbung",
      html: `
      <p>${firstName}&nbsp;${lastName}</p>
      <p>${street}&nbsp;${streetNumber}</p>
      <p>${zip}&nbsp;${city}</p>
      <p>Email:&nbsp;${email}</p>
      <p>Telefon:&nbsp;<a href="tel:${phone}">${phone}</a></p>
      <h2 style="color: #333">Bewerbung</h2>
      ${message}
      `,
    });
  } catch (error) {
    console.log(error.message);
    return response;
  }
};

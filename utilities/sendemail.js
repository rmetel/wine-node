const getTransporter = require("../utilities/transporter");

module.exports = async (firstName, lastName, email, phone, message) => {
  try {
    const transporter = await getTransporter();

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
      subject: "Kontakt",
      html: `
      ${firstName}&nbsp;${lastName}<br/>
      <p>Email:&nbsp;${email}</p>
      <p>Telefon:&nbsp;<a href="tel:${phone}">${phone}</a></p>
      <h2 style="color: #333">Nachricht</h2>
      <p style="color: #333">${message}</p>
      `,
    });
  } catch (error) {
    console.log(error.message);
    return response;
  }
};

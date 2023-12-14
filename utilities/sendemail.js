const nodemailer = require("nodemailer");

module.exports = async (email, name, replyTo, subject, message) => {
  try {
    // initialize and define the mode of transport
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port: Number(process.env.EMAIL_PORT),
      secure: Boolean(process.env.SECURE),
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    // Defining the mail and sending it using the transport
    const sentEmail = await transporter.sendMail({
      from: {
        name: "Kontakt",
        address: process.env.USER,
      },
      replyTo: replyTo,
      to: email,
      subject: subject,
      html: `Von: ${name} &lt;${replyTo}&gt;<br/>Nachricht: ${message}`,
    });
    const response = "Email sent successfully";
    console.log(response);
  } catch (error) {
    console.log(error.message);
    return response;
  }
};

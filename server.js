const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.set("views", path.join(__dirname, "build"));
app.set("view engine", "html");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jinming9420@gmail.com',
    pass: 'rokpjokmrqznywqi'
  }
});

app.listen(port, () =>
  console.log(`This project is listening on port ${port}!`)
);

app.post("/api/send_email", function(req, res) {
  let data = req.body;
  res.set("Content-Type", "application/json");
  
  const mailOptions = {
    from: "From My Kot-Webite <jinming9420@gmail.com>",
    to: 'jin.bestvictoria718@gmail.com',
    subject: data.subject,
    text: JSON.stringify(data)
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  
  res.end("ok");  

});

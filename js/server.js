const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5500;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: `${name}님의 메시지`,
    text: `이름: ${name}\n이메일: ${email}\n메시지: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('이메일 전송 오류:', error);
      return res.status(500).json({ success: false, message: '이메일 전송 실패', error: error.toString() });
    }
    res.status(200).json({ success: true, message: '이메일 전송됨', info: info.response });
  });
});

app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT}에서 실행 중입니다`);
});

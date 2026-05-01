const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 8080;
const publicDir = path.join(__dirname, 'Lightning Certification');
const examFile = path.join(publicDir, 'Lightning_SE_Certification_Exam.html');

app.disable('x-powered-by');

app.use(express.static(publicDir, {
  extensions: ['html'],
  maxAge: '1h'
}));

app.get('*', (_req, res) => {
  res.sendFile(examFile);
});

app.listen(port, () => {
  console.log(`Lightning Certification app listening on port ${port}`);
});

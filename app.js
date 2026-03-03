const express = require('express');
// const path = require('path');
const app = express();
const port = 3000;

// 현재 폴더(또는 public 폴더)를 정적 파일 저장소로 지정
app.use(express.static(__dirname));

// app.use((req, res, next) => {
//     res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
//     res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
//     next();
// });

app.get('/', (req, res) => {
  // res.send('Hello from Express in Docker!');
  // console.log('get requst');
  res.sendFile(__dirname + '/test/login.html');
});

app.get('/home', (req, res) => {
  res.send('HOME');
  console.log('get home requst');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/test/login.html');
  console.log('get home requst ' + __dirname);
});

app.get('/sqlite', (req, res) => {
  res.sendFile(__dirname + '/test/sqlite.html');
  console.log('get sqlite requst ');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
// 받아지기는 하는데~

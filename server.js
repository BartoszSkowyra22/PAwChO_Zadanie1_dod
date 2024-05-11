const express = require('express');
const os = require('os');

const moment = require('moment-timezone');

const app = express();

//Definicja zmiennych
const port = 3000;
const authorName = "Bartosz Skowyra";

// Zapisanie w logach autora oraz aktualnej daty
console.log(`Autor aplikacji ${authorName}, data uruchomienia ${new Date()}, port aplikacji ${port}`);

app.get('/', (req, res) => {

    //Uzyskanie lokalizacji klienta
  const clientIp = req.ip;
  
    const clientTime = moment().tz(moment.tz.guess()).format('YYYY-MM-DD HH:mm:ss');

  // Tworzenie treści odpowiedzi
  const content = `
    <html>
      <head>
        <title>Informacje o kliencie</title>
      </head>
      <body>
        <h1>Adres IP: ${clientIp}</h1><br>
        <p>Data i godzina w strefie czasowej klienta: ${clientTime}</p>
      </body>
    </html>
  `;

  res.send(content);
  }
);


app.listen(port, () => {
  console.log(`Serwer nasluchuje na porcie ${port}`);
});

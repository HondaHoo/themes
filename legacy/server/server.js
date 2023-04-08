/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const cron = require('node-cron');
const fs = require('fs');
const getThemes = require('./get-themes');
const compression = require('compression');

const app = express();
app.use(compression());
const port = 3001;

cron.schedule(
  '0 0 * * *',
  () => {
    getThemes(process.argv.includes('isDev'));
  },
  {
    timezone: 'Europe/London',
  }
);

app.get('/api/v1/themes', (req, res) => {
  const fileBlob = fs.readFileSync('./themes.json');
  const fileJson = JSON.parse(fileBlob.toString());
  res.send(fileJson);
});

app.get('/', (req, res) => {
  // this lets the start-server-and-test the server is running
  res.sendStatus(200);
});

app.listen(port, () =>
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`)
);

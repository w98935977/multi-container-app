// backend/app.js
const { Client } = require('pg');
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const client = require('prom-client');
const register = client.register;

client.collectDefaultMetrics();

// 一個簡單的 GET API
app.get('/', (req, res) => {
  res.send('Hello from backend!');
});

app.get('/db', async (req, res) => {
  const client = new Client({ connectionString: process.env.DATABASE_URL });
  try {
    await client.connect();
    const result = await client.query('SELECT * FROM messages;');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('DB Error');
  } finally {
    await client.end();
  }
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});




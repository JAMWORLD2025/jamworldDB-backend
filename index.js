require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch(err => console.log('❌ DB Error:', err.message));

app.get('/', (req, res) => res.send('JamWorldDB Backend is live!'));

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', db: mongoose.connection.readyState });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

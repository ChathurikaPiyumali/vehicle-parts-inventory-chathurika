require('dotenv').config();
console.log("🌱 Starting backend server...");
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models/Part');
const partsRouter = require('./routes/parts');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/parts', partsRouter);

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`🚀 Server running on port ${process.env.PORT}`)
  );
});


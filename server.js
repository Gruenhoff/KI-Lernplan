// server.js
const express = require('express');
const app = express();
const studentsRouter = require('./routes/students');

// Middleware
app.use(express.json());

// Routes
app.use('/api/students', studentsRouter);

// Port für lokale Entwicklung
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

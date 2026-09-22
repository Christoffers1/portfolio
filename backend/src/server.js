const express = require('express');
const sequelize = require('../config/database.js');

const app = express();
const PORT = 3000;

startServer(async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection successfull.');

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error.message);
    }
})

startServer();
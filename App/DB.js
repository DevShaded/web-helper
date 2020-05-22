'use strict';

const dotenv = require('dotenv');
dotenv.config();

const mysql = require('mysql2/promise');

if(process.env.ENVIRONMENT === 'dev'){
    const pool = mysql.createPool({
        host: process.env.DB_HOST_DEV,
        user: process.env.DB_USER_DEV,
        password: process.env.DB_PASS_DEV,
        port: process.env.DB_PORT_DEV,
        database: process.env.DB_DBNAME_DEV,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });

    module.exports = {
        pool
    };
} else if (process.env.ENVIRONMENT === 'prod'){
    const pool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        port: process.env.DB_PORT,
        database: process.env.DB_DBNAME,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });

    module.exports = {
        pool
    };
} else {
    return console.error('Environment has not been set up correctly');
}

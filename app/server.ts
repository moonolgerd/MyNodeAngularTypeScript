import express = require('express');
var app = express();
import mysql = require('mysql');
var connectionpool = mysql.createPool({
    host: 'host',
    user: 'user',
    password: 'password',
    database: 'database'
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    res.setHeader('Access-Control-Allow-Origin', 'null');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
    },
    express.static('.')
);

app.get('/results', (req, res) => {
    connectionpool.getConnection((err, connection) => {
        if (err) {
            console.error('CONNECTION error: ', err);
            res.statusCode = 503;
            res.send({
                result: 'error',
                err: err.code
            });
        } else {
            connection.query('SELECT * FROM table',
                (error, rows, fields) => {
                    if (error) {
                        console.error(error);
                        res.statusCode = 500;
                        res.send({
                            result: 'error',
                            err: error.code
                        });
                    }
                    res.send({
                        result: 'success',
                        err: '',
                        fields: fields,
                        json: rows,
                        length: rows.length
                    });
                    connection.release();
                });
        }
    });
});

app.get('/', (req, res) => res.sendfile('app/index.html'));

app.listen(8000);
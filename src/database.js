const { Client } = require('pg');
const { database } = require('./keys');

const client = new Client(database);

client.connect(database);
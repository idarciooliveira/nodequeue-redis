require('dotenv').config();
const express = require('express');

const Queue = require('./services/Queue');
const { ExpressAdapter } = require('@bull-board/express');
const { createBullBoard } = require('@bull-board/api')
const { BullAdapter } = require('@bull-board/api/bullAdapter')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended :false}));

const serverAdapter = new ExpressAdapter();

createBullBoard({
    queues: Queue.queues.map(queue=> new BullAdapter(queue.bull)),
    serverAdapter: serverAdapter
});


serverAdapter.setBasePath('/admin/queues');
app.use('/admin/queues', serverAdapter.getRouter());

app.use(require('./routes'))

module.exports = app;


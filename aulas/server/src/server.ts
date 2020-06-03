import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    response.json([
        'Tácio',
        'Paula',
        'Miguel'
    ]);
});

app.listen(8003);
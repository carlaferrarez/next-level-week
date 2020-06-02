import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuarios');
    
    response.json([
        'Carla',
        'Caio',
        'Andre'
    ]);

});

app.listen(3333);
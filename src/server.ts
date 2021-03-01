import express, { request, response } from 'express';


const app = express();

app.use(express.json());

app.get('/users', (request, response) => {
    return response.json({ message: 'Hello World' });

});

app.listen(5555);

 

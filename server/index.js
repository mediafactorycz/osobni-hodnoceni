const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({dev});
const handle = app.getRequestHandler();

const axios = require('axios');

app.prepare().then(() => {

    const server = express();

    server.get('/api', async (req, res) => {

        try {
            const getUsers = async () => {
                return axios.get('http://5aa8158bcef9ba001442fcac.mockapi.io/oh/api/users');
            };

            const users = await getUsers();

//            res.json([{id: 1, name: 'testik'}, {id: 2, name: 'super'}]);
            res.json(users.data);


        } catch (e) {
            console.log(e.stack);
            res.status(500).send({error: e.message});
        }

    });

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

    server.listen(port, (err) => {
        if (err) {
            throw err;
        }

        console.log(`> Ready on http://localhost:${port}`);
    });
});
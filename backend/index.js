import express from 'express';

const app = express();

app.get('/', (req, res) => {
            res.send('server is ready!');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
            console.log(`server is ruunig at http://localhost:${port}`);
}); 
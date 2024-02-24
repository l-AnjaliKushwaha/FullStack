import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
            res.send('server is ready!');
});

// get a list of 5 jokes

app.get('/api/jokes', (req, res) => {
            const jokes = [
                        {
                                    id: 1,
                                    title: 'A joke',
                                    content: 'This is a joke'
                        },
                        {
                                    id: 2,
                                    title: 'Another joke',
                                    content: 'This is another joke'

                        },
                        {
                                    id: 3,
                                    title: 'A third joke',
                                    content: 'This is a third joke'

                        },
                        {
                                    id: 4,
                                    title: 'A fouth joke',
                                    content: 'This is a fouth joke'

                        },
                        {
                                    id: 5,
                                    title: 'A five joke',
                                    content: 'This is a five joke'

                        },
            ];
            res.send(jokes);
})


app.listen(port, () => {
            console.log(`server is ruunig at http://localhost:${port}`);
}); 
import * as express from 'express';

const app = express();

app.use(express.json());

app.post('/hello', (req, res) => {
    interface HelloRequest {
        name: string;
    }
    
    interface HelloResponse {
        message: string;
    }

    const request = req.body as HelloRequest;
    const response = { message: `Hello, ${request.name}!` } as HelloResponse;
    res.json(response);
});

const port = process.env['PORT'] ?? 8000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

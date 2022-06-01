import * as cors from 'cors';
import * as express from 'express';

const app = express();

app.use(cors({
    // Frontend origins are allowed.
    origin: [
        'http://localhost:4200',
        'https://frontend-glud4nxwta-uw.a.run.app',
    ]
}));

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

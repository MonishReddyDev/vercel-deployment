// index.js
import dotenv from 'dotenv'
dotenv.config()
import express from 'express';

const app = express();
const port = process.env.port || 4000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/test', (req, res) => {
    const sampleData = {
        message: 'Test data fetched successfully!',
        timestamp: new Date(),
        items: [
            { id: 1, name: 'Apple', category: 'Fruit' },
            { id: 2, name: 'Carrot', category: 'Vegetable' },
            { id: 3, name: 'Bread', category: 'Bakery' }
        ]
    };

    res.json(sampleData);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

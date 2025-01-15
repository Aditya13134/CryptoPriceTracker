import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import alertRoutes from './routes/alertRoutes';
import cryptoRoutes from './routes/cryptoRoutes';

const app = express();

// Enable CORS for all routes
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174'], // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

app.use(bodyParser.json());
app.use('/api/alerts', alertRoutes);
app.use('/api/crypto', cryptoRoutes);

export default app;
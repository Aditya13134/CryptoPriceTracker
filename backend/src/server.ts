import dotenv from 'dotenv';
import app from './app';
import { connectDB } from './config/db';
import { connectRedis } from './config/redis';

// Ensure that the process variable is recognized by TypeScript
declare var process: {
  env: {
    PORT?: string;
  };
};

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();
  await connectRedis();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
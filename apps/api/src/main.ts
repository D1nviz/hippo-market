import cors from 'cors';
import express from 'express';

import connectDB from './db';
import authRoutes from './routes/auth';

const app = express();

app.use(
  cors({
    origin: '*',
  })
);
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

connectDB();

const port = process.env.PORT || 3333;

app.use('/api', authRoutes);

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

export { app, server };

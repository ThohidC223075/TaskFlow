import express from 'express';
import cors from 'cors';
import { env } from './config/env.js';
import apiRoutes from './routes/index.js';
import { notFound } from './middleware/notFound.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

// 1. Core middleware
app.use(cors({ origin: env.CLIENT_URL }));
app.use(express.json({ limit: '10kb' }));

// 2. Root route (friendly message)
app.get('/', (_req, res) => {
  res.json({
    success: true,
    message: 'TaskFlow API is running. Visit /api/health',
  });
});

// 3. API routes
app.use('/api', apiRoutes);

// 4. 404 handler (after all routes)
app.use(notFound);

// 5. Global error handler (always last)
app.use(errorHandler);

export default app;
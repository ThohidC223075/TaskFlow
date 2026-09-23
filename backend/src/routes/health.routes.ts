import { Router } from 'express';
import { env } from '../config/env.js';

const router = Router();

router.get('/', (_req, res) => {
  res.status(200).json({
    success: true,
    data: {
      status: 'ok',
      environment: env.NODE_ENV,
      uptime: Math.round(process.uptime()),
      timestamp: new Date().toISOString(),
    },
  });
});

export default router;
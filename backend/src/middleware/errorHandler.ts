import type { ErrorRequestHandler } from 'express';
import { env } from '../config/env.js';
import { AppError } from '../utils/AppError.js';

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  // 1. Known, expected errors
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
      ...(err.details !== undefined && { errors: err.details }),
    });
    return;
  }

  // 2. Malformed JSON body (thrown by express.json())
  if (err instanceof SyntaxError && 'body' in err) {
    res.status(400).json({
      success: false,
      message: 'Invalid JSON in request body',
    });
    return;
  }

  // 3. Unexpected errors (bugs, database down, etc.)
  console.error('💥 Unexpected error:', err);

  res.status(500).json({
    success: false,
    message: 'Internal server error',
    ...(env.NODE_ENV === 'development' && {
      stack: err instanceof Error ? err.stack : String(err),
    }),
  });
};
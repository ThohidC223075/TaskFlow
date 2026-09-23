import app from './app.js';
import { env } from './config/env.js';

function handleServerError(error: NodeJS.ErrnoException): void {
  if (error.code === 'EADDRINUSE') {
    console.error(`❌ Port ${env.PORT} is already in use. Stop the other process or change PORT in .env`);
  } else {
    console.error('❌ Server failed to start:', error);
  }
  process.exit(1);
}

const server = app.listen(env.PORT, (error?: Error) => {
  if (error) {
    handleServerError(error);
    return;
  }
  console.log(`🚀 TaskFlow API running at http://localhost:${env.PORT}`);
  console.log(`🩺 Health check: http://localhost:${env.PORT}/api/health`);
});

server.on('error', handleServerError);

function shutdown(signal: string): void {
  console.log(`\n${signal} received. Shutting down gracefully...`);
  server.close(() => {
    console.log('✅ Server closed.');
    process.exit(0);
  });
}

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
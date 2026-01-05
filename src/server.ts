import { App } from './app';
import { database } from './modules/data-persistence';

/**
 * Start the application
 */
const startServer = async () => {
  try {
    // Connect to database
    await database.connect();

    // Initialize and start the Express application
    const app = new App();
    app.listen();

    // Graceful shutdown
    process.on('SIGTERM', async () => {
      console.log('SIGTERM signal received: closing HTTP server');
      await database.disconnect();
      process.exit(0);
    });

    process.on('SIGINT', async () => {
      console.log('SIGINT signal received: closing HTTP server');
      await database.disconnect();
      process.exit(0);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

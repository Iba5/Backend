import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import config from './config';
import { errorHandler, notFoundHandler } from './core/middleware';
import { API_PREFIX } from './shared/constants';

// Import routes
import securityRoutes from './modules/security/security.routes';
import userRoutes from './modules/user/user.routes';
import eventRoutes from './modules/event/event.routes';
import registrationRoutes from './modules/registration/registration.routes';

export class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeErrorHandling();
  }

  private initializeMiddlewares(): void {
    // Security middleware
    this.app.use(helmet());

    // CORS configuration
    this.app.use(
      cors({
        origin: config.cors.origin,
        credentials: true,
      })
    );

    // Body parsing middleware
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    // Logging middleware
    if (config.env === 'development') {
      this.app.use(morgan('dev'));
    } else {
      this.app.use(morgan('combined'));
    }
  }

  private initializeRoutes(): void {
    // Health check endpoint
    this.app.get('/health', (_req, res) => {
      res.status(200).json({
        success: true,
        message: 'Server is running',
        timestamp: new Date().toISOString(),
      });
    });

    // API routes
    this.app.use(`${API_PREFIX}/auth`, securityRoutes);
    this.app.use(`${API_PREFIX}/users`, userRoutes);
    this.app.use(`${API_PREFIX}/events`, eventRoutes);
    this.app.use(`${API_PREFIX}/registrations`, registrationRoutes);

    // 404 handler
    this.app.use(notFoundHandler);
  }

  private initializeErrorHandling(): void {
    // Global error handler
    this.app.use(errorHandler);
  }

  public listen(): void {
    this.app.listen(config.port, () => {
      console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   🎓 College Event Management System - Backend API       ║
║                                                           ║
║   Environment: ${config.env.padEnd(44, ' ')}║
║   Port: ${config.port.toString().padEnd(51, ' ')}║
║   API Base: ${API_PREFIX.padEnd(48, ' ')}║
║                                                           ║
║   Server is running and ready to accept requests! 🚀     ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
      `);
    });
  }
}

# College Event Management System - Backend

A robust and scalable backend system for managing college events, built with Node.js, Express.js, and TypeScript following clean architecture principles.

## 🏗️ Architecture

This project follows a modular, clean architecture design with clear separation of concerns:

### Modules

1. **Security and Access Control**
   - JWT-based authentication
   - Role-based authorization (ADMIN, ORGANIZER, PARTICIPANT, GUEST)
   - Password hashing and validation
   - Token management

2. **User and Identity Management**
   - User registration and profile management
   - User roles and permissions
   - User CRUD operations

3. **Event Management**
   - Event creation, update, and deletion
   - Event status management (DRAFT, PUBLISHED, ONGOING, COMPLETED, CANCELLED)
   - Event categorization (TECHNICAL, CULTURAL, SPORTS, WORKSHOP, etc.)
   - Event capacity tracking

4. **Registration and Participation**
   - Event registration system
   - Registration approval workflow
   - Registration status tracking (PENDING, APPROVED, REJECTED, CANCELLED)
   - User participation history

5. **Data Persistence Layer**
   - Database abstraction layer
   - Repository pattern implementation
   - Support for various database systems

6. **Application Core**
   - Express application setup
   - Middleware configuration
   - Error handling
   - Response formatting
   - Utilities and helpers

## 📁 Project Structure

```
src/
├── config/                  # Application configuration
│   └── index.ts
├── core/                    # Core application components
│   ├── middleware/          # Global middleware
│   │   ├── errorHandler.ts
│   │   ├── notFoundHandler.ts
│   │   └── asyncHandler.ts
│   ├── utils/               # Utility functions
│   │   └── responseHandler.ts
│   └── errors/              # Custom error classes
│       └── AppError.ts
├── modules/                 # Business logic modules
│   ├── security/            # Authentication & Authorization
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── middleware/
│   │   └── types/
│   ├── user/                # User management
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── models/
│   │   └── types/
│   ├── event/               # Event management
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── models/
│   │   └── types/
│   ├── registration/        # Registration & Participation
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── models/
│   │   └── types/
│   └── data-persistence/    # Database layer
│       ├── database/
│       └── repositories/
├── shared/                  # Shared resources
│   ├── interfaces/          # Common interfaces
│   ├── constants/           # Application constants
│   └── enums/               # Enumerations
├── app.ts                   # Express app setup
└── server.ts                # Server entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- A database system (PostgreSQL, MongoDB, MySQL - to be configured)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Iba5/Backend.git
cd Backend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development server:
```bash
npm run dev
```

The server will start at `http://localhost:3000`

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier

## 🔌 API Endpoints

### Authentication (`/api/v1/auth`)
- `POST /login` - User login
- `POST /register` - User registration
- `POST /refresh-token` - Refresh access token
- `POST /logout` - User logout

### Users (`/api/v1/users`)
- `GET /` - Get all users
- `GET /:id` - Get user by ID
- `POST /` - Create new user
- `PUT /:id` - Update user
- `DELETE /:id` - Delete user

### Events (`/api/v1/events`)
- `GET /` - Get all events (with filters)
- `GET /:id` - Get event by ID
- `POST /` - Create new event
- `PUT /:id` - Update event
- `DELETE /:id` - Delete event
- `POST /:id/publish` - Publish event
- `POST /:id/cancel` - Cancel event

### Registrations (`/api/v1/registrations`)
- `POST /` - Register for an event
- `GET /:id` - Get registration by ID
- `GET /event/:eventId` - Get all registrations for an event
- `GET /user/:userId` - Get all registrations for a user
- `POST /:id/cancel` - Cancel registration
- `POST /:id/approve` - Approve registration
- `POST /:id/reject` - Reject registration

### Health Check
- `GET /health` - Server health check

## 🔐 Environment Variables

See `.env.example` for all available environment variables:

- `NODE_ENV` - Environment (development/production)
- `PORT` - Server port
- `DB_*` - Database configuration
- `JWT_*` - JWT configuration
- `CORS_ORIGIN` - CORS origin
- `BCRYPT_ROUNDS` - Password hashing rounds
- `RATE_LIMIT_*` - Rate limiting configuration

## 🛠️ Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Security**: Helmet, CORS, JWT
- **Code Quality**: ESLint, Prettier
- **Development**: Nodemon, ts-node

## 📦 Data Models

### User Roles
- `ADMIN` - Full system access
- `ORGANIZER` - Can create and manage events
- `PARTICIPANT` - Can register for events
- `GUEST` - Limited read-only access

### Event Status
- `DRAFT` - Event is being created
- `PUBLISHED` - Event is live and accepting registrations
- `ONGOING` - Event is currently happening
- `COMPLETED` - Event has ended
- `CANCELLED` - Event was cancelled

### Registration Status
- `PENDING` - Awaiting approval
- `APPROVED` - Registration confirmed
- `REJECTED` - Registration denied
- `CANCELLED` - Registration cancelled by user

## 🔄 Next Steps

### TODO: Implementation Priorities

1. **Database Integration**
   - Choose and configure database (PostgreSQL/MongoDB/MySQL)
   - Implement database connection
   - Complete repository implementations
   - Add database migrations

2. **Authentication & Security**
   - Implement JWT token generation and verification
   - Add password hashing with bcrypt
   - Implement refresh token mechanism
   - Add rate limiting

3. **Validation**
   - Add request validation middleware
   - Implement DTOs validation
   - Add input sanitization

4. **Testing**
   - Set up testing framework (Jest/Mocha)
   - Write unit tests
   - Write integration tests
   - Add test coverage reporting

5. **Advanced Features**
   - File upload for event images
   - Email notifications
   - Search and filtering
   - Pagination improvements
   - Caching layer

6. **Documentation**
   - API documentation with Swagger/OpenAPI
   - Add JSDoc comments
   - Create deployment guide

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👥 Authors

- Initial work - [Iba5](https://github.com/Iba5)

## 🙏 Acknowledgments

- Built with clean architecture principles
- Following Node.js and TypeScript best practices
- Designed for scalability and maintainability

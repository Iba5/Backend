# API Documentation

Base URL: `http://localhost:3000/api/v1`

All endpoints return responses in the following format:

## Response Format

### Success Response
```json
{
  "success": true,
  "message": "Operation successful",
  "data": { /* response data */ }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error message"
}
```

### Paginated Response
```json
{
  "success": true,
  "message": "Data retrieved successfully",
  "data": [ /* array of items */ ],
  "pagination": {
    "currentPage": 1,
    "totalPages": 10,
    "totalItems": 100,
    "itemsPerPage": 10
  }
}
```

---

## Authentication Endpoints

### POST /auth/login
Login with email and password.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "accessToken": "jwt-token-here",
    "refreshToken": "refresh-token-here"
  }
}
```

---

### POST /auth/register
Register a new user.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "username": "johndoe",
  "firstName": "John",
  "lastName": "Doe"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "Registration successful",
  "data": {
    "accessToken": "jwt-token-here",
    "refreshToken": "refresh-token-here"
  }
}
```

---

### POST /auth/refresh-token
Refresh access token.

**Request Body:**
```json
{
  "refreshToken": "refresh-token-here"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Token refreshed successfully",
  "data": {
    "accessToken": "new-jwt-token-here",
    "refreshToken": "new-refresh-token-here"
  }
}
```

---

### POST /auth/logout
Logout user.

**Request Body:**
```json
{
  "userId": "user-id-here"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Logout successful",
  "data": null
}
```

---

## User Endpoints

### GET /users
Get all users with pagination.

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)

**Response (200):**
```json
{
  "success": true,
  "message": "Resource fetched successfully",
  "data": [
    {
      "id": "user-id",
      "email": "user@example.com",
      "username": "johndoe",
      "firstName": "John",
      "lastName": "Doe",
      "role": "PARTICIPANT",
      "isActive": true,
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

---

### GET /users/:id
Get user by ID.

**Response (200):**
```json
{
  "success": true,
  "message": "Resource fetched successfully",
  "data": {
    "id": "user-id",
    "email": "user@example.com",
    "username": "johndoe",
    "firstName": "John",
    "lastName": "Doe",
    "role": "PARTICIPANT",
    "isActive": true,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

---

### POST /users
Create a new user.

**Request Body:**
```json
{
  "email": "newuser@example.com",
  "username": "newuser",
  "password": "password123",
  "firstName": "New",
  "lastName": "User",
  "role": "PARTICIPANT"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "Resource created successfully",
  "data": {
    "id": "new-user-id",
    "email": "newuser@example.com",
    "username": "newuser",
    "firstName": "New",
    "lastName": "User",
    "role": "PARTICIPANT",
    "isActive": true,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

---

### PUT /users/:id
Update user information.

**Request Body:**
```json
{
  "firstName": "Updated",
  "lastName": "Name",
  "isActive": true
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Resource fetched successfully",
  "data": {
    "id": "user-id",
    "email": "user@example.com",
    "username": "johndoe",
    "firstName": "Updated",
    "lastName": "Name",
    "role": "PARTICIPANT",
    "isActive": true,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T12:00:00.000Z"
  }
}
```

---

### DELETE /users/:id
Delete user (soft delete).

**Response (200):**
```json
{
  "success": true,
  "message": "User deleted successfully",
  "data": null
}
```

---

## Event Endpoints

### GET /events
Get all events with filtering and pagination.

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)
- `status` (optional): Filter by status (DRAFT, PUBLISHED, ONGOING, COMPLETED, CANCELLED)
- `category` (optional): Filter by category (TECHNICAL, CULTURAL, SPORTS, WORKSHOP, SEMINAR, COMPETITION, OTHER)
- `organizerId` (optional): Filter by organizer ID

**Response (200):**
```json
{
  "success": true,
  "message": "Resource fetched successfully",
  "data": [
    {
      "id": "event-id",
      "title": "Tech Workshop 2024",
      "description": "Annual technical workshop",
      "category": "WORKSHOP",
      "status": "PUBLISHED",
      "startDate": "2024-02-01T10:00:00.000Z",
      "endDate": "2024-02-01T16:00:00.000Z",
      "venue": "Main Auditorium",
      "capacity": 100,
      "registeredCount": 45,
      "organizerId": "organizer-id",
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

---

### GET /events/:id
Get event by ID.

**Response (200):**
```json
{
  "success": true,
  "message": "Resource fetched successfully",
  "data": {
    "id": "event-id",
    "title": "Tech Workshop 2024",
    "description": "Annual technical workshop",
    "category": "WORKSHOP",
    "status": "PUBLISHED",
    "startDate": "2024-02-01T10:00:00.000Z",
    "endDate": "2024-02-01T16:00:00.000Z",
    "venue": "Main Auditorium",
    "capacity": 100,
    "registeredCount": 45,
    "organizerId": "organizer-id",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

---

### POST /events
Create a new event.

**Request Body:**
```json
{
  "title": "New Workshop",
  "description": "Workshop description",
  "category": "WORKSHOP",
  "startDate": "2024-03-01T10:00:00.000Z",
  "endDate": "2024-03-01T16:00:00.000Z",
  "venue": "Room 101",
  "capacity": 50,
  "organizerId": "organizer-id"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "Resource created successfully",
  "data": {
    "id": "new-event-id",
    "title": "New Workshop",
    "description": "Workshop description",
    "category": "WORKSHOP",
    "status": "DRAFT",
    "startDate": "2024-03-01T10:00:00.000Z",
    "endDate": "2024-03-01T16:00:00.000Z",
    "venue": "Room 101",
    "capacity": 50,
    "registeredCount": 0,
    "organizerId": "organizer-id",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

---

### PUT /events/:id
Update event information.

**Request Body:**
```json
{
  "title": "Updated Workshop",
  "capacity": 75,
  "status": "PUBLISHED"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Resource fetched successfully",
  "data": {
    "id": "event-id",
    "title": "Updated Workshop",
    "description": "Workshop description",
    "category": "WORKSHOP",
    "status": "PUBLISHED",
    "startDate": "2024-03-01T10:00:00.000Z",
    "endDate": "2024-03-01T16:00:00.000Z",
    "venue": "Room 101",
    "capacity": 75,
    "registeredCount": 0,
    "organizerId": "organizer-id",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T12:00:00.000Z"
  }
}
```

---

### DELETE /events/:id
Delete event.

**Response (200):**
```json
{
  "success": true,
  "message": "Event deleted successfully",
  "data": null
}
```

---

### POST /events/:id/publish
Publish an event.

**Response (200):**
```json
{
  "success": true,
  "message": "Event published successfully",
  "data": {
    "id": "event-id",
    "status": "PUBLISHED",
    /* ... other event fields ... */
  }
}
```

---

### POST /events/:id/cancel
Cancel an event.

**Response (200):**
```json
{
  "success": true,
  "message": "Event cancelled successfully",
  "data": {
    "id": "event-id",
    "status": "CANCELLED",
    /* ... other event fields ... */
  }
}
```

---

## Registration Endpoints

### POST /registrations
Register for an event.

**Request Body:**
```json
{
  "eventId": "event-id",
  "userId": "user-id",
  "additionalInfo": "Optional additional information"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "Registration successful",
  "data": {
    "id": "registration-id",
    "eventId": "event-id",
    "userId": "user-id",
    "status": "PENDING",
    "additionalInfo": "Optional additional information",
    "registeredAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

---

### GET /registrations/:id
Get registration by ID.

**Response (200):**
```json
{
  "success": true,
  "message": "Resource fetched successfully",
  "data": {
    "id": "registration-id",
    "eventId": "event-id",
    "userId": "user-id",
    "status": "APPROVED",
    "additionalInfo": "Additional information",
    "registeredAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T12:00:00.000Z"
  }
}
```

---

### GET /registrations/event/:eventId
Get all registrations for an event.

**Response (200):**
```json
{
  "success": true,
  "message": "Resource fetched successfully",
  "data": [
    {
      "id": "registration-id-1",
      "eventId": "event-id",
      "userId": "user-id-1",
      "status": "APPROVED",
      "registeredAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

---

### GET /registrations/user/:userId
Get all registrations for a user.

**Response (200):**
```json
{
  "success": true,
  "message": "Resource fetched successfully",
  "data": [
    {
      "id": "registration-id-1",
      "eventId": "event-id-1",
      "userId": "user-id",
      "status": "APPROVED",
      "registeredAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

---

### POST /registrations/:id/cancel
Cancel a registration.

**Response (200):**
```json
{
  "success": true,
  "message": "Registration cancelled successfully",
  "data": null
}
```

---

### POST /registrations/:id/approve
Approve a registration (requires organizer/admin role).

**Response (200):**
```json
{
  "success": true,
  "message": "Registration approved successfully",
  "data": {
    "id": "registration-id",
    "eventId": "event-id",
    "userId": "user-id",
    "status": "APPROVED",
    "registeredAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T12:00:00.000Z"
  }
}
```

---

### POST /registrations/:id/reject
Reject a registration (requires organizer/admin role).

**Response (200):**
```json
{
  "success": true,
  "message": "Registration rejected successfully",
  "data": {
    "id": "registration-id",
    "eventId": "event-id",
    "userId": "user-id",
    "status": "REJECTED",
    "registeredAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T12:00:00.000Z"
  }
}
```

---

## Health Check

### GET /health
Check server health status.

**Response (200):**
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

---

## Error Codes

| Status Code | Description |
|-------------|-------------|
| 200 | OK - Request successful |
| 201 | Created - Resource created successfully |
| 204 | No Content - Request successful with no content |
| 400 | Bad Request - Invalid request data |
| 401 | Unauthorized - Authentication required |
| 403 | Forbidden - Insufficient permissions |
| 404 | Not Found - Resource not found |
| 409 | Conflict - Resource conflict |
| 500 | Internal Server Error - Server error |

---

## Data Enumerations

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

### Event Categories
- `TECHNICAL` - Technical events
- `CULTURAL` - Cultural events
- `SPORTS` - Sports events
- `WORKSHOP` - Workshop events
- `SEMINAR` - Seminar events
- `COMPETITION` - Competition events
- `OTHER` - Other events

### Registration Status
- `PENDING` - Awaiting approval
- `APPROVED` - Registration confirmed
- `REJECTED` - Registration denied
- `CANCELLED` - Registration cancelled by user

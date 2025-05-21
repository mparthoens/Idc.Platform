# API Authentication Documentation

## Overview

This API uses JWT (JSON Web Token) authentication to secure all endpoints. By default, all endpoints require authentication except for the login endpoint.

## Authentication Flow

1. Client sends credentials to the `/api/auth/login` endpoint
2. Server validates credentials and returns a JWT token
3. Client includes the token in the Authorization header for subsequent requests
4. Server validates the token for each request

## Endpoints

### Authentication Endpoint

- **URL**: `/api/auth/login`
- **Method**: POST
- **Auth Required**: No
- **Request Body**:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Success Response**:
  - **Code**: 200 OK
  - **Content**:
    ```json
    {
      "token": "string",
      "username": "string",
      "expiration": "datetime"
    }
    ```
- **Error Response**:
  - **Code**: 401 UNAUTHORIZED

### Protected Endpoints

All other endpoints in the API require authentication.

## Using JWT Tokens

### Token Format

The JWT token should be included in the Authorization header of each request:

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Token Lifetime

Tokens are valid for 60 minutes by default. After expiration, a new token must be obtained.

## Configuration

JWT authentication is configured in `appsettings.json` under the "JwtSettings" section:

```json
"JwtSettings": {
  "SecretKey": "your-secret-key",
  "Issuer": "IdcPlatform",
  "Audience": "IdcPlatformClients",
  "ExpiryInMinutes": 60
}
```

- **SecretKey**: The key used to sign the JWT tokens
- **Issuer**: The issuer of the token (your API)
- **Audience**: The intended recipient of the token
- **ExpiryInMinutes**: How long the token is valid

## Security Considerations

1. Always use HTTPS in production
2. Store the JWT SecretKey securely
3. Keep token expiration times short
4. Don't store sensitive data in JWT tokens

## Testing with Swagger

1. Access the Swagger UI at `/swagger`
2. Use the `/api/auth/login` endpoint to get a token
3. Click the "Authorize" button at the top
4. Enter `Bearer {your-token}` in the value field
5. Click "Authorize" and close the dialog
6. Now you can test protected endpoints

## Troubleshooting

- **401 Unauthorized**: Token is missing, invalid, or expired
- **403 Forbidden**: Token is valid but doesn't have sufficient permissions

## Implementation Details

The authentication system is implemented using:

- JWT Bearer Authentication middleware
- Global authorization policy requiring authentication
- Custom JwtTokenService for token generation

## Code Components

### Program.cs
Contains the configuration for JWT authentication and the global authorization policy that requires authentication for all endpoints.

### AuthController.cs
Provides the login endpoint that allows anonymous access and returns JWT tokens.

### JwtTokenService.cs
Generates JWT tokens with appropriate claims and expiration.

### ApiControllerBase.cs
Base controller class that includes the [Authorize] attribute for clarity.

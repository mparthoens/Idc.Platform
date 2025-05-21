# Application Settings Documentation

This document explains the settings in the `appsettings.json` file.

## Connection Strings

```json
"ConnectionStrings": {
  "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=IdcPlatformDb;Trusted_Connection=True;MultipleActiveResultSets=true"
}
```

- **DefaultConnection**: Main database connection string using local SQL Server instance

## JWT Authentication Settings

```json
"JwtSettings": {
  "SecretKey": "xxxxx....."
  "Issuer": "IdcPlatform",
  "Audience": "IdcPlatformClients",
  "ExpiryInMinutes": 60
}
```

- **SecretKey**: Secret key used to sign JWT tokens - keep this secure!
- **Issuer**: Identifies the server that generated the token
- **Audience**: Identifies the intended recipients of the token
- **ExpiryInMinutes**: Token validity period in minutes

## Logging Configuration

```json
"Logging": {
  "LogLevel": {
    "Default": "Information",
    "Microsoft.AspNetCore": "Warning"
  }
}
```

- **Default**: Default logging level for all categories
- **Microsoft.AspNetCore**: Specific logging level for ASP.NET Core

## Allowed Hosts

```json
"AllowedHosts": "*"
```

- Specifies which hosts are allowed to access the API. "*" means all hosts are allowed.

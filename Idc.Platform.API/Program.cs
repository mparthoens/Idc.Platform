using Idc.Platform.Application;
using Idc.Platform.Application.Common.Interfaces;
using Idc.Platform.Infrastructure.Persistence;
using Idc.Platform.Infrastructure.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;

// Create a new WebApplicationBuilder instance
var builder = WebApplication.CreateBuilder(args);

// ===== SERVICE CONFIGURATION =====

// Register application layer services (mediator, validators, etc.)
builder.Services.AddApplication();

// Register the CentralDbContext with SQL Server connection
// This is the main database context for the application
builder.Services.AddDbContext<CentralDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("DefaultConnection")));

// Register the IEpnSyncDbContext interface with the CentralDbContext implementation
// This allows for dependency injection of the database context through its interface
builder.Services.AddScoped<IEpnSyncDbContext>(provider =>
    provider.GetRequiredService<CentralDbContext>());

// Register the JWT token service for authentication token generation
builder.Services.AddScoped<JwtTokenService>();

// ===== JWT AUTHENTICATION CONFIGURATION =====
// Get JWT settings from configuration
var jwtSettings = builder.Configuration.GetSection("JwtSettings");
var secretKey = jwtSettings["SecretKey"] ?? throw new InvalidOperationException("JWT Secret Key is not configured");

// Configure JWT authentication
builder.Services.AddAuthentication(options =>
{
    // Set default authentication and challenge schemes
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options =>
{
    // Configure token validation parameters
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,        // Validate the server that created the token
        ValidateAudience = true,      // Validate the recipient of the token
        ValidateLifetime = true,      // Check if the token is not expired
        ValidateIssuerSigningKey = true, // Validate the security key
        ValidIssuer = jwtSettings["Issuer"],      // Set valid issuer
        ValidAudience = jwtSettings["Audience"],  // Set valid audience
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey)) // Set the key used to sign the token
    };
});

// ===== AUTHORIZATION CONFIGURATION =====
// Configure global authorization policy - all endpoints require authentication by default
builder.Services.AddAuthorization(options =>
{
    options.FallbackPolicy = new AuthorizationPolicyBuilder()
        .RequireAuthenticatedUser()
        .Build();
});

// Add controllers for API endpoints
builder.Services.AddControllers();

// Add API explorer for endpoint discovery (used by Swagger)
builder.Services.AddEndpointsApiExplorer();

// ===== SWAGGER CONFIGURATION =====
// Configure Swagger for API documentation
builder.Services.AddSwaggerGen(c =>
{
    // Define API information
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Idc.Platform API", Version = "v1" });

    // Configure Swagger to use JWT Authentication
    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Description = "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer {token}\"",
        Name = "Authorization",
        In = ParameterLocation.Header,
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer"
    });

    // Add global security requirement for JWT
    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            new string[] {}
        }
    });
});

// ===== APPLICATION PIPELINE CONFIGURATION =====
// Build the application
var app = builder.Build();

// Configure the HTTP request pipeline based on environment
if (app.Environment.IsDevelopment())
{
    // Enable Swagger UI in development environment
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Idc.Platform API v1"));
}

// Redirect HTTP requests to HTTPS
app.UseHttpsRedirection();

// Add authentication middleware to the pipeline
// This must come before UseAuthorization
app.UseAuthentication();

// Add authorization middleware to the pipeline
app.UseAuthorization();

// Map controller endpoints
app.MapControllers();

// Start the application
app.Run();


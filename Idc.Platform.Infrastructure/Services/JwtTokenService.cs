using Idc.Platform.Application.Common.Dtos;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Idc.Platform.Infrastructure.Services
{
    /// <summary>
    /// Service responsible for generating JWT tokens for authenticated users
    /// </summary>
    public class JwtTokenService
    {
        private readonly IConfiguration _configuration;

        /// <summary>
        /// Constructor that injects the configuration
        /// </summary>
        /// <param name="configuration">Application configuration containing JWT settings</param>
        public JwtTokenService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        /// <summary>
        /// Generates a JWT token for the specified username
        /// </summary>
        /// <param name="username">Username to include in the token claims</param>
        /// <returns>Authentication response containing the token, username, and expiration</returns>
        public AuthenticationResponse GenerateToken(string username)
        {
            // Get the secret key from configuration
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
                _configuration["JwtSettings:SecretKey"] ??
                throw new InvalidOperationException("JWT Secret Key is not configured")));

            // Create signing credentials using the key
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            // Create claims for the token
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, username),    // Subject (user identifier)
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()), // Unique token ID
                new Claim(ClaimTypes.Name, username)                 // User's name
                
                // Add additional claims as needed, such as roles:
                // new Claim(ClaimTypes.Role, "Admin")
            };

            // Set token expiration
            var expiryInMinutes = Convert.ToInt32(_configuration["JwtSettings:ExpiryInMinutes"]);
            var expiration = DateTime.UtcNow.AddMinutes(expiryInMinutes);

            // Create the JWT token
            var token = new JwtSecurityToken(
                issuer: _configuration["JwtSettings:Issuer"],         // Token issuer
                audience: _configuration["JwtSettings:Audience"],     // Token audience
                claims: claims,                                       // Token claims
                expires: expiration,                                  // Token expiration
                signingCredentials: credentials                       // Token signing credentials
            );

            // Return the token and related information
            return new AuthenticationResponse
            {
                Token = new JwtSecurityTokenHandler().WriteToken(token), // Serialize token to string
                Username = username,
                Expiration = expiration
            };
        }
    }
}

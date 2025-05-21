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
    public class JwtTokenService
    {
        private readonly IConfiguration _configuration;

        public JwtTokenService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public AuthenticationResponse GenerateToken(string username)
        {
            // Get the secret key from configuration
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
                _configuration["JwtSettings:SecretKey"] ??
                throw new InvalidOperationException("JWT Secret Key is not configured")));

            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            // Create claims for the token
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, username),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.Name, username)
                
                // Add additional claims as needed, such as roles:
                // new Claim(ClaimTypes.Role, "Admin")
            };

            // Set token expiration
            var expiryInMinutes = Convert.ToInt32(_configuration["JwtSettings:ExpiryInMinutes"]);
            var expiration = DateTime.UtcNow.AddMinutes(expiryInMinutes);

            // Create the JWT token
            var token = new JwtSecurityToken(
                issuer: _configuration["JwtSettings:Issuer"],
                audience: _configuration["JwtSettings:Audience"],
                claims: claims,
                expires: expiration,
                signingCredentials: credentials
            );

            // Return the token and related information
            return new AuthenticationResponse
            {
                Token = new JwtSecurityTokenHandler().WriteToken(token),
                Username = username,
                Expiration = expiration
            };
        }
    }
}

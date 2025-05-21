using Idc.Platform.Application.Common.Dtos;
using Idc.Platform.Infrastructure.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Idc.Platform.API.Controllers
{
    /// <summary>
    /// Controller responsible for authentication operations
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly JwtTokenService _jwtTokenService;

        /// <summary>
        /// Constructor that injects the JWT token service
        /// </summary>
        /// <param name="jwtTokenService">Service for generating JWT tokens</param>
        public AuthController(JwtTokenService jwtTokenService)
        {
            _jwtTokenService = jwtTokenService;
        }

        /// <summary>
        /// Authenticates a user and returns a JWT token
        /// </summary>
        /// <param name="request">Authentication request containing username and password</param>
        /// <returns>JWT token response if authentication is successful, otherwise 401 Unauthorized</returns>
        [AllowAnonymous] // Allows this endpoint to be accessed without authentication
        [HttpPost("login")]
        public ActionResult<AuthenticationResponse> Login([FromBody] AuthenticationRequest request)
        {
            // In a real application, you would validate the username and password against a database
            // For this example, we'll use a hardcoded check
            if (request.Username == "admin" && request.Password == "admin123")
            {
                var token = _jwtTokenService.GenerateToken(request.Username);
                return Ok(token);
            }
            return Unauthorized();
        }
    }
}

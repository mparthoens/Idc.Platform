using Idc.Platform.Application.Common.Dtos;
using Idc.Platform.Infrastructure.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Idc.Platform.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly JwtTokenService _jwtTokenService;

        public AuthController(JwtTokenService jwtTokenService)
        {
            _jwtTokenService = jwtTokenService;
        }

        [AllowAnonymous]
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

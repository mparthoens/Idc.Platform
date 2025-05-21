namespace Idc.Platform.Application.Common.Dtos
{
    /// <summary>
    /// Data transfer object for authentication requests
    /// Contains the credentials needed for user authentication
    /// </summary>
    public class AuthenticationRequest
    {
        /// <summary>
        /// Username for authentication
        /// </summary>
        public string? Username { get; set; }

        /// <summary>
        /// Password for authentication
        /// </summary>
        public string? Password { get; set; }
    }

    /// <summary>
    /// Data transfer object for authentication responses
    /// Contains the JWT token and related information returned after successful authentication
    /// </summary>
    public class AuthenticationResponse
    {
        /// <summary>
        /// JWT token string that should be used for subsequent authenticated requests
        /// </summary>
        public string? Token { get; set; }

        /// <summary>
        /// Username of the authenticated user
        /// </summary>
        public string? Username { get; set; }

        /// <summary>
        /// Expiration date and time of the token
        /// </summary>
        public DateTime Expiration { get; set; }
    }
}

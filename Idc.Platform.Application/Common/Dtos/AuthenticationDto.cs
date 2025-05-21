namespace Idc.Platform.Application.Common.Dtos
{
    public class AuthenticationRequest
    {
        public string? Username { get; set; }
        public string? Password { get; set; }
    }

    public class AuthenticationResponse
    {
        public string? Token { get; set; }
        public string? Username { get; set; }
        public DateTime Expiration { get; set; }  
    }
}

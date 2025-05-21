using Microsoft.AspNetCore.Identity;

namespace Idc.Platform.Domain.Entities
{
    public class AspNetUser : IdentityUser
    {
        public string? Language { get; set; }
    }
}

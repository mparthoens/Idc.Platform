using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace Idc.Platform.API.Controllers
{
    /// <summary>
    /// Base controller class that provides common functionality for API controllers
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    [Authorize] // This is redundant with the global FallbackPolicy but kept for clarity
    public abstract class ApiControllerBase : ControllerBase
    {
        private IMediator? _mediator;

        /// <summary>
        /// Provides access to the MediatR mediator instance
        /// Lazily loads the mediator from the request services when first accessed
        /// </summary>
        protected IMediator Mediator => _mediator ??= HttpContext.RequestServices.GetRequiredService<IMediator>();
    }
}

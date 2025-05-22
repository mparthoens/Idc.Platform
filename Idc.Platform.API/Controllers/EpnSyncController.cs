using Idc.Platform.Application.Common.Dtos;
using Idc.Platform.Application.EpnSyncs.Commands;
using Idc.Platform.Application.EpnSyncs.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Idc.Platform.API.Controllers
{
    /// <summary>
    /// Controller for managing EPN synchronization logs
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    // No need to add [Authorize] here since we've set the FallbackPolicy in Program.cs
    public class EpnSyncsController : ControllerBase
    {
        private readonly IMediator _mediator;

        /// <summary>
        /// Constructor that injects the MediatR mediator
        /// </summary>
        /// <param name="mediator">MediatR mediator for handling commands and queries</param>
        public EpnSyncsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        /// <summary>
        /// Retrieves all EPN synchronization logs
        /// </summary>
        /// <returns>List of EPN synchronization log DTOs</returns>
        [HttpGet]
        public async Task<ActionResult<List<EpnSyncDto>>> Get()
        {
            return await _mediator.Send(new GetEpnSyncsQuery());
        }

        /// <summary>
        /// Creates a new EPN synchronization log
        /// </summary>
        /// <param name="command">Command containing the log data to create</param>
        /// <returns>ID of the created log entry</returns>
        [HttpPost]
        public async Task<ActionResult<int>> Create(CreateEpnSyncCommand command)
        {
            return await _mediator.Send(command);
        }
    }
}



using Idc.Platform.Application.Common.Dtos;
using Idc.Platform.Application.EpnSyncLogs.Commands;
using Idc.Platform.Application.EpnSyncLogs.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Idc.Platform.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    // No need to add [Authorize] here since we've set the FallbackPolicy in Program.cs
    public class EpnSyncLogsController : ControllerBase
    {
        private readonly IMediator _mediator;

        public EpnSyncLogsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<EpnSyncLogDto>>> Get()
        {
            return await _mediator.Send(new GetEpnSyncLogsQuery());
        }

        [HttpPost]
        public async Task<ActionResult<int>> Create(CreateEpnSyncLogCommand command)
        {
            return await _mediator.Send(command);
        }
    }
}

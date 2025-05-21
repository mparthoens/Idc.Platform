using AutoMapper;
using Idc.Platform.Application.Common.Dtos;
using Idc.Platform.Application.Common.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Idc.Platform.Application.EpnSyncLogs.Queries
{
    public class GetEpnSyncLogsQuery : IRequest<List<EpnSyncLogDto>>
    {
    }

    public class GetEpnSyncLogsQueryHandler : IRequestHandler<GetEpnSyncLogsQuery, List<EpnSyncLogDto>>
    {
        private readonly IEpnSyncLogDbContext _context;
        private readonly IMapper _mapper;

        public GetEpnSyncLogsQueryHandler(IEpnSyncLogDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<List<EpnSyncLogDto>> Handle(GetEpnSyncLogsQuery request, CancellationToken cancellationToken)
        {
            var epnSyncLogs = await _context.EpnSyncLogs
                .AsNoTracking()
                .ToListAsync(cancellationToken);

            return _mapper.Map<List<EpnSyncLogDto>>(epnSyncLogs);
        }
    }
}

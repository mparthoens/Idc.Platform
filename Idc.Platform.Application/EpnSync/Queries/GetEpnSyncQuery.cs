using AutoMapper;
using Idc.Platform.Application.Common.Dtos;
using Idc.Platform.Application.Common.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Idc.Platform.Application.EpnSyncs.Queries
{
    public class GetEpnSyncsQuery : IRequest<List<EpnSyncDto>>
    {
    }

    public class GetEpnSyncsQueryHandler : IRequestHandler<GetEpnSyncsQuery, List<EpnSyncDto>>
    {
        private readonly IEpnSyncDbContext _context;
        private readonly IMapper _mapper;

        public GetEpnSyncsQueryHandler(IEpnSyncDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<List<EpnSyncDto>> Handle(GetEpnSyncsQuery request, CancellationToken cancellationToken)
        {
            var EpnSyncs = await _context.EpnSyncs
                .AsNoTracking()
                .ToListAsync(cancellationToken);

            return _mapper.Map<List<EpnSyncDto>>(EpnSyncs);
        }
    }
}





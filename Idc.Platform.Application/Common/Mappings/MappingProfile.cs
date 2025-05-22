using AutoMapper;
using Idc.Platform.Application.Common.Dtos;
using Idc.Platform.Domain.Entities;

namespace Idc.Platform.Application.Common.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            // Add your mappings here
            CreateMap<EpnSync, EpnSyncDto>();

        }
    }
}


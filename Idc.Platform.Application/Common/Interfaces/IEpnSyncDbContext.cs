using Idc.Platform.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;

namespace Idc.Platform.Application.Common.Interfaces
{
    public interface IEpnSyncDbContext
    {
        DbSet<EpnSync> EpnSyncs { get; set; }
        
        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}



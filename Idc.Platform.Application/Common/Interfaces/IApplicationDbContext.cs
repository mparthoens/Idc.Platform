using Idc.Platform.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;

namespace Idc.Platform.Application.Common.Interfaces
{
    public interface IApplicationDbContext
    {
        DbSet<Animal> Animals { get; }
        DbSet<AnimalAction> AnimalActions { get; }
        DbSet<AnimalActionType> AnimalActionTypes { get; }
        DbSet<AnimalBreed> AnimalBreeds { get; }
        DbSet<AnimalCoat> AnimalCoats { get; }
        DbSet<AnimalColor> AnimalColors { get; }
        DbSet<AnimalFinalCertificatePrintLog> AnimalFinalCertificatePrintLogs { get; }
        DbSet<AnimalOrganisationAssociation> AnimalOrganisationAssociations { get; }
        DbSet<AnimalOwnerLog> AnimalOwnerLogs { get; }
        DbSet<Association> Associations { get; }
        DbSet<Country> Countries { get; }
        DbSet<EmailCampaign> EmailCampaigns { get; }
        DbSet<EmailCampaignUniqueId> EmailCampaignUniqueIds { get; }
        DbSet<EpnSync> EpnSyncs { get; }
        DbSet<Identification> Identifications { get; }
        DbSet<IdentificationLocalisation> IdentificationLocalisations { get; }
        DbSet<IdentificationType> IdentificationTypes { get; }
        DbSet<Identifier> Identifiers { get; }
        DbSet<Language> Languages { get; }
        DbSet<MailjetStatus> MailjetStatuses { get; }
        DbSet<MailjetTemp> MailjetTemps { get; }
        DbSet<Organisation> Organisations { get; }
        DbSet<Owner> Owners { get; }
        DbSet<OwnerAddressLog> OwnerAddressLogs { get; }
        DbSet<Passport> Passports { get; }
        DbSet<PostalAddress> PostalAddresses { get; }
        DbSet<PostalCode> PostalCodes { get; }
        DbSet<RefAnimalColor> RefAnimalColors { get; }
        DbSet<RefBreedName> RefBreedNames { get; }
        DbSet<RefCoatName> RefCoatNames { get; }
        DbSet<RefSpeciesName> RefSpeciesNames { get; }
        DbSet<RefSpecies> RefSpecies { get; }
        DbSet<Title> Titles { get; }
        DbSet<User> AppUsers { get; }

        Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
    }
}


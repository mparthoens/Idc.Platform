namespace Idc.Platform.Domain.Entities;



public partial class Animal
{
    public int Id { get; set; }

    public int? OwnerId { get; set; }

    public int? AssociationId { get; set; }

    public string? Species { get; set; }

    public int LastOrganisationId { get; set; }

    public int? LastUserId { get; set; }

    public string? Name { get; set; }

    public string? Gender { get; set; }

    public DateOnly? Birthdate { get; set; }

    public bool Pending { get; set; }

    public bool Deceased { get; set; }

    public bool Breeding { get; set; }

    public bool Sterilized { get; set; }

    public bool Lost { get; set; }

    public bool Stolen { get; set; }

    public bool Exported { get; set; }

    public bool Unknown { get; set; }

    public bool Temporary { get; set; }

    public bool ToPrint { get; set; }

    public DateTime DateInsert { get; set; }

    public DateTime? DateUpdate { get; set; }

    public short? OldStationNumber { get; set; }

    public int? OldIntroductionNumber { get; set; }

    public short? OldStationNumberOwner { get; set; }

    public int? OldIntroductionNumberOwner { get; set; }

    public bool? BatchPrint { get; set; }

    public bool Validated { get; set; }

    public string? DistinguishingMarks { get; set; }

    public virtual ICollection<AnimalAction> AnimalActions { get; set; } = new List<AnimalAction>();

    public virtual ICollection<AnimalBreed> AnimalBreeds { get; set; } = new List<AnimalBreed>();

    public virtual ICollection<AnimalCoat> AnimalCoats { get; set; } = new List<AnimalCoat>();

    public virtual ICollection<AnimalColor> AnimalColors { get; set; } = new List<AnimalColor>();

    public virtual ICollection<AnimalFinalCertificatePrintLog> AnimalFinalCertificatePrintLogs { get; set; } = new List<AnimalFinalCertificatePrintLog>();

    public virtual ICollection<AnimalOrganisationAssociation> AnimalOrganisationAssociations { get; set; } = new List<AnimalOrganisationAssociation>();

    public virtual ICollection<AnimalOwnerLog> AnimalOwnerLogs { get; set; } = new List<AnimalOwnerLog>();

    public virtual Association? Association { get; set; }

    public virtual ICollection<Identification> Identifications { get; set; } = new List<Identification>();

    public virtual Organisation LastOrganisation { get; set; } = null!;

    public virtual User? LastUser { get; set; }

    public virtual Owner? Owner { get; set; }

    public virtual ICollection<Passport> Passports { get; set; } = new List<Passport>();
}

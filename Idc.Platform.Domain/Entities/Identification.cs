namespace Idc.Platform.Domain.Entities;



public partial class Identification
{
    public int Id { get; set; }

    public int IdentificationTypeId { get; set; }

    public int IdentificationLocalisationId { get; set; }

    public int AnimalId { get; set; }

    public int IdentifierId { get; set; }

    public int? LastUserId { get; set; }

    public string IdentificationNumber { get; set; } = null!;

    public string Comment { get; set; } = null!;

    public DateOnly? DateIdentification { get; set; }

    public DateTime DateInsert { get; set; }

    public DateTime? DateUpdate { get; set; }

    public short? OldStationNumberAnimal { get; set; }

    public int? OldIntroductionNumberAnimal { get; set; }

    public short? OldStationNumberIdentifier { get; set; }

    public int? OldIntroductionNumberIdentifier { get; set; }

    public bool Validated { get; set; }

    public int? AppUserId { get; set; }

    public DateTime? EpnDateInsert { get; set; }
    public DateTime? EpnDateUpdate { get; set; }

    public virtual Animal Animal { get; set; } = null!;

    public virtual IdentificationLocalisation IdentificationLocalisation { get; set; } = null!;

    public virtual IdentificationType IdentificationType { get; set; } = null!;

    public virtual Identifier Identifier { get; set; } = null!;

    public virtual User? LastUser { get; set; }
}

namespace Idc.Platform.Domain.Entities;



public partial class Identifier
{
  public int Id { get; set; }

  public int? UserId { get; set; }

  public string? LanguageCode { get; set; }

  public string CountryCode { get; set; } = null!;

  public int? LastUserId { get; set; }

  public string Type { get; set; } = null!;

  public string Title { get; set; } = null!;

  public string Firstname { get; set; } = null!;

  public string Lastname { get; set; } = null!;

  public string Phone { get; set; } = null!;

  public string Mobile { get; set; } = null!;

  public string Fax { get; set; } = null!;

  public string Email { get; set; } = null!;

  public string Number { get; set; } = null!;

  public string Street { get; set; } = null!;

  public string City { get; set; } = null!;

  public string PostalCode { get; set; } = null!;

  public string VatNumber { get; set; } = null!;

  public string VeterinaryNumber { get; set; } = null!;

  public bool NoMailing { get; set; }

  public DateTime DateInsert { get; set; }

  public DateTime? DateUpdate { get; set; }

  public short? OldStationNumber { get; set; }

  public int? OldIntroductionNumber { get; set; }

  public bool Authenticated { get; set; }

  public int? AspNetUserId { get; set; }

  public virtual Country Country { get; set; } = null!;

  public virtual ICollection<Identification> Identifications { get; set; } = new List<Identification>();
}

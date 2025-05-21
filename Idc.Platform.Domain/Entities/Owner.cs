namespace Idc.Platform.Domain.Entities;



public partial class Owner
{
  public int Id { get; set; }

  public int? UserId { get; set; }

  public string? LanguageCode { get; set; }

  public string CountryCode { get; set; } = null!;

  public int? LastUserId { get; set; }

  public string? Type { get; set; }

  public string Title { get; set; } = null!;

  public string Firstname { get; set; } = null!;

  public string Lastname { get; set; } = null!;

  public string Email { get; set; } = null!;

  public string Phone1 { get; set; } = null!;

  public string Phone2 { get; set; } = null!;

  public string Phone3 { get; set; } = null!;

  public string Phone4 { get; set; } = null!;

  public string Number { get; set; } = null!;

  public string Street { get; set; } = null!;

  public string City { get; set; } = null!;

  public string PostalCode { get; set; } = null!;

  public bool Confidential { get; set; }

  public string AgreementNumber { get; set; } = null!;

  public bool ImmediateTransferPrivilege { get; set; }

  public DateTime DateInsert { get; set; }

  public DateTime? DateUpdate { get; set; }

  public short? OldStationNumber { get; set; }

  public int? OldIntroductionNumber { get; set; }

  public bool Authenticated { get; set; }

  public int? AspNetUserId { get; set; }

  public virtual ICollection<AnimalOwnerLog> AnimalOwnerLogs { get; set; } = new List<AnimalOwnerLog>();

  public virtual ICollection<Animal> Animals { get; set; } = new List<Animal>();

  public virtual Country CountryCodeNavigation { get; set; } = null!;

  public virtual Language? LanguageCodeNavigation { get; set; }

  public virtual User? LastUser { get; set; }

  public virtual ICollection<OwnerAddressLog> OwnerAddressLogs { get; set; } = new List<OwnerAddressLog>();

  public virtual User? User { get; set; }
}

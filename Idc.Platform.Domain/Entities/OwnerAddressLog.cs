namespace Idc.Platform.Domain.Entities;



public partial class OwnerAddressLog
{
  public int Id { get; set; }

  public int OwnerId { get; set; }

  public int? LastUserId { get; set; }

  public DateTime DateInsert { get; set; }

  public string Number { get; set; } = null!;

  public string Street { get; set; } = null!;

  public string City { get; set; } = null!;

  public string PostalCode { get; set; } = null!;

  public string CountryCode { get; set; } = null!;

  public virtual Country CountryCodeNavigation { get; set; } = null!;

  public virtual User? LastUser { get; set; }

  public virtual Owner Owner { get; set; } = null!;
}

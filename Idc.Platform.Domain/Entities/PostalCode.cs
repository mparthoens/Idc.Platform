namespace Idc.Platform.Domain.Entities;



public partial class PostalCode
{
  public int Id { get; set; }

  public string PostalCode1 { get; set; } = null!;

  public string City { get; set; } = null!;

  public string MainPostalCode { get; set; } = null!;

  public string MainCity { get; set; } = null!;

  public string Province { get; set; } = null!;

  public string Region { get; set; } = null!;

  public string CountryCode { get; set; } = null!;

  public virtual Country CountryCodeNavigation { get; set; } = null!;
}

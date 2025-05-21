namespace Idc.Platform.Domain.Entities;



public partial class PostalAddress
{
  public int Id { get; set; }

  public string CountryCode { get; set; } = null!;

  public string PostalCode { get; set; } = null!;

  public string? MainPostalCode { get; set; }

  public string City { get; set; } = null!;

  public string Street { get; set; } = null!;
}

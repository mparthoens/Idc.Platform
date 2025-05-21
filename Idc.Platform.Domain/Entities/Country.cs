namespace Idc.Platform.Domain.Entities;



public partial class Country
{
  public string Code { get; set; } = null!;

  public string Name { get; set; } = null!;

  public virtual ICollection<Association> Associations { get; set; } = new List<Association>();

  public virtual ICollection<Organisation> Organisations { get; set; } = new List<Organisation>();

  public virtual ICollection<OwnerAddressLog> OwnerAddressLogs { get; set; } = new List<OwnerAddressLog>();

  public virtual ICollection<Owner> Owners { get; set; } = new List<Owner>();

  public virtual ICollection<Identifier> Identifiers { get; set; } = new List<Identifier>();

  public virtual ICollection<PostalCode> PostalCodes { get; set; } = new List<PostalCode>();
}

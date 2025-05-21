namespace Idc.Platform.Domain.Entities;



public partial class Language
{
  public string Code { get; set; } = null!;

  public string Name { get; set; } = null!;

  public int IndexNumber { get; set; }

  public virtual ICollection<Owner> Owners { get; set; } = new List<Owner>();

  public virtual ICollection<User> Users { get; set; } = new List<User>();
}

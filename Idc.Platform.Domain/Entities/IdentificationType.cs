namespace Idc.Platform.Domain.Entities;



public partial class IdentificationType
{
  public int Id { get; set; }

  public string Type { get; set; } = null!;

  public virtual ICollection<Identification> Identifications { get; set; } = new List<Identification>();
}

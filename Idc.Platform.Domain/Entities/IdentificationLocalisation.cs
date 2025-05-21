namespace Idc.Platform.Domain.Entities;



public partial class IdentificationLocalisation
{
  public int Id { get; set; }

  public string Localisation { get; set; } = null!;

  public virtual ICollection<Identification> Identifications { get; set; } = new List<Identification>();
}

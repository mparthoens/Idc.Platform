namespace Idc.Platform.Domain.Entities;



public partial class AnimalOrganisationAssociation
{
  public int Id { get; set; }

  public int AnimalId { get; set; }

  public int OrganisationId { get; set; }

  public DateTime DateInsert { get; set; }

  public virtual Animal Animal { get; set; } = null!;

  public virtual Organisation Organisation { get; set; } = null!;
}

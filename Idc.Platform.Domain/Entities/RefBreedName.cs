namespace Idc.Platform.Domain.Entities;



public partial class RefBreedName
{
  public int Id { get; set; }

  public string? Language { get; set; }

  public int SpeciesId { get; set; }

  public string Name { get; set; } = null!;

  public virtual RefSpecies Species { get; set; } = null!;
}

namespace Idc.Platform.Domain.Entities;



public partial class RefSpecies
{
  public int Id { get; set; }

  public virtual ICollection<RefBreedName> RefBreedNames { get; set; } = new List<RefBreedName>();

  public virtual ICollection<RefSpeciesName> RefSpeciesNames { get; set; } = new List<RefSpeciesName>();
}

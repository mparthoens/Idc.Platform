namespace Idc.Platform.Domain.Entities;



public partial class AnimalActionType
{
  public int Id { get; set; }

  public string Name { get; set; } = null!;

  public string StatusLink { get; set; } = null!;

  public bool StatusState { get; set; }
}

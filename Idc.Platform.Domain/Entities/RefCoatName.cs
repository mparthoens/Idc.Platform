namespace Idc.Platform.Domain.Entities;



public partial class RefCoatName
{
  public int Id { get; set; }

  public string? Language { get; set; }

  public string Name { get; set; } = null!;
}

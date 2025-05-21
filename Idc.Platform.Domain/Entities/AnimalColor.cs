namespace Idc.Platform.Domain.Entities;



public partial class AnimalColor
{
  public int AnimalId { get; set; }

  public string Value { get; set; } = null!;

  public byte Pos { get; set; }

  public virtual Animal Animal { get; set; } = null!;
}

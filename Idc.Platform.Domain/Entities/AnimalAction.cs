namespace Idc.Platform.Domain.Entities;



public partial class AnimalAction
{
  public int Id { get; set; }

  public int AnimalId { get; set; }

  public int AnimalActionTypeId { get; set; }

  public int UserId { get; set; }

  public int? LastUserId { get; set; }

  public DateOnly EffectiveDate { get; set; }

  public string Comment { get; set; } = null!;

  public DateTime DateInsert { get; set; }

  public virtual Animal Animal { get; set; } = null!;
}

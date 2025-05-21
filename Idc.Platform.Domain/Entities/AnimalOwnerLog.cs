namespace Idc.Platform.Domain.Entities;



public partial class AnimalOwnerLog
{
  public long Id { get; set; }

  public int AnimalId { get; set; }

  public int OwnerId { get; set; }

  public int? UserId { get; set; }

  public int? LastUserId { get; set; }

  public DateTime DateInsert { get; set; }

  public virtual Animal Animal { get; set; } = null!;

  public virtual User? LastUser { get; set; }

  public virtual Owner Owner { get; set; } = null!;

  public virtual User? User { get; set; }
}

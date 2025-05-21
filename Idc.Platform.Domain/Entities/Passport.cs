namespace Idc.Platform.Domain.Entities;



public partial class Passport
{
  public int Id { get; set; }

  public int AnimalId { get; set; }

  public int? LastUserId { get; set; }

  public string Number { get; set; } = null!;

  public DateTime DateInsert { get; set; }

  public virtual Animal Animal { get; set; } = null!;

  public virtual User? LastUser { get; set; }
}

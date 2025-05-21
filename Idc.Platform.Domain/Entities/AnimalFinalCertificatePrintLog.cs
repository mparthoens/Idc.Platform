namespace Idc.Platform.Domain.Entities;



public partial class AnimalFinalCertificatePrintLog
{
  public int Id { get; set; }

  public int? AnimalId { get; set; }

  public int OrganisationId { get; set; }

  public int? MicrochipIdentificationId { get; set; }

  public int? TattooIdentificationId { get; set; }

  public int? PassportId { get; set; }

  public string PrintType { get; set; } = null!;

  public DateTime PrintDate { get; set; }

  public int BatchNumber { get; set; }

  public string? SerializedAnimal { get; set; }

  public virtual Animal? Animal { get; set; }

  public virtual Organisation Organisation { get; set; } = null!;
}

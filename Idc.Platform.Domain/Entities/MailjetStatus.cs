namespace Idc.Platform.Domain.Entities;



public partial class MailjetStatus
{
  public string To { get; set; } = null!;

  public DateTime Date { get; set; }

  public string Status { get; set; } = null!;
}

namespace Idc.Platform.Domain.Entities;



public partial class MailjetTemp
{
  public DateTime Date { get; set; }

  public string? Details { get; set; }

  public string From { get; set; } = null!;

  public double Messageid { get; set; }

  public string? Subject { get; set; }

  public string Status { get; set; } = null!;

  public string To { get; set; } = null!;

  public bool Unsub { get; set; }

  public bool Bounce { get; set; }

  public bool Blocked { get; set; }

  public bool Click { get; set; }

  public bool Spam { get; set; }

  public bool Open { get; set; }

  public bool Queued { get; set; }

  public bool Sent { get; set; }
}

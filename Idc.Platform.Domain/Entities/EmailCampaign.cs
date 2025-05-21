namespace Idc.Platform.Domain.Entities;



public partial class EmailCampaign
{
  public long Id { get; set; }

  public string RecipientType { get; set; } = null!;

  public string RecipientEmail { get; set; } = null!;

  public int? LastOrganisationId { get; set; }

  public int? OwnerId { get; set; }

  public int? IdentifierId { get; set; }

  public string Language { get; set; } = null!;

  public bool ToSend { get; set; }

  public DateTime? UnsubscribedDate { get; set; }

  public string? CampaignName { get; set; }

  public DateTime? CampaignDate { get; set; }

  public DateTime? SentDate { get; set; }

  public string? EmailBody { get; set; }

  public DateTime? ClickedDate { get; set; }
}

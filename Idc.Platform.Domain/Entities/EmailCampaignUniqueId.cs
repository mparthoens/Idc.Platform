namespace Idc.Platform.Domain.Entities;



public partial class EmailCampaignUniqueId
{
  public string RecipientEmail { get; set; } = null!;

  public long? Maxid { get; set; }
}

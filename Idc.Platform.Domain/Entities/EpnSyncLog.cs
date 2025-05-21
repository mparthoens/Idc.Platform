namespace Idc.Platform.Domain.Entities
{
    public partial class EpnSyncLog
    {
        public int Id { get; set; }
        public string? TransactionType { get; set; } = "";
        public string? MemberCode { get; set; } = "";
        public string? IdentificationType { get; set; } = "";
        public string? IdentificationNumber { get; set; } = "";
        public DateTime? ChippedDate { get; set; }
        public string? Gender { get; set; } = "";
        public DateTime? BirthDate { get; set; }
        public string? Species { get; set; } = "";
        public bool? IsMissing { get; set; }
        public DateTime? MissingDate { get; set; }
        public DateTime? ProcessingDate { get; set; }
        public bool? IsSuccess { get; set; }
        public string? ErrorCodeList { get; set; } = "";
    }
}

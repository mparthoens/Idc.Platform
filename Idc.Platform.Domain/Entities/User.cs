namespace Idc.Platform.Domain.Entities;



public partial class User
{
  public int Id { get; set; }

  public string LanguageCode { get; set; } = null!;

  public int? LastUserId { get; set; }

  public string Firstname { get; set; } = null!;

  public string Lastname { get; set; } = null!;

  public string Email { get; set; } = null!;

  public string Login { get; set; } = null!;

  public string Password { get; set; } = null!;

  public DateTime DateInsert { get; set; }

  public DateTime? DateUpdate { get; set; }

  public virtual ICollection<AnimalOwnerLog> AnimalOwnerLogLastUsers { get; set; } = new List<AnimalOwnerLog>();

  public virtual ICollection<AnimalOwnerLog> AnimalOwnerLogUsers { get; set; } = new List<AnimalOwnerLog>();

  public virtual ICollection<Animal> Animals { get; set; } = new List<Animal>();

  public virtual ICollection<Identification> Identifications { get; set; } = new List<Identification>();

  public virtual ICollection<User> InverseLastUser { get; set; } = new List<User>();

  public virtual Language LanguageCodeNavigation { get; set; } = null!;

  public virtual User? LastUser { get; set; }

  public virtual ICollection<OwnerAddressLog> OwnerAddressLogs { get; set; } = new List<OwnerAddressLog>();

  public virtual ICollection<Owner> OwnerLastUsers { get; set; } = new List<Owner>();

  public virtual ICollection<Owner> OwnerUsers { get; set; } = new List<Owner>();

  public virtual ICollection<Passport> Passports { get; set; } = new List<Passport>();
}

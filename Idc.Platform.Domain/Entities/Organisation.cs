namespace Idc.Platform.Domain.Entities;



public partial class Organisation
{
  public int Id { get; set; }

  public string CountryCode { get; set; } = null!;

  public string Name { get; set; } = null!;

  public string Phone { get; set; } = null!;

  public string Fax { get; set; } = null!;

  public string Email { get; set; } = null!;

  public string Number { get; set; } = null!;

  public string Street { get; set; } = null!;

  public string City { get; set; } = null!;

  public string PostalCode { get; set; } = null!;

  public string Color { get; set; } = null!;

  public DateTime DateInsert { get; set; }

  public DateTime? DateUpdate { get; set; }

  public string Code { get; set; } = null!;

  public virtual ICollection<AnimalFinalCertificatePrintLog> AnimalFinalCertificatePrintLogs { get; set; } = new List<AnimalFinalCertificatePrintLog>();

  public virtual ICollection<AnimalOrganisationAssociation> AnimalOrganisationAssociations { get; set; } = new List<AnimalOrganisationAssociation>();

  public virtual ICollection<Animal> Animals { get; set; } = new List<Animal>();

  public virtual Country CountryCodeNavigation { get; set; } = null!;
}

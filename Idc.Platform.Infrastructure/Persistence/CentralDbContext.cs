using Idc.Platform.Application.Common.Interfaces;
using Idc.Platform.Domain.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;

namespace Idc.Platform.Infrastructure.Persistence;

public class CentralDbContext(DbContextOptions<CentralDbContext> options) : IdentityDbContext<AspNetUser>(options), IApplicationDbContext
{
  public virtual DbSet<Animal> Animals { get; set; }
  public virtual DbSet<AnimalAction> AnimalActions { get; set; }
  public virtual DbSet<AnimalActionType> AnimalActionTypes { get; set; }
  public virtual DbSet<AnimalBreed> AnimalBreeds { get; set; }
  public virtual DbSet<AnimalCoat> AnimalCoats { get; set; }
  public virtual DbSet<AnimalColor> AnimalColors { get; set; }
  public virtual DbSet<AnimalFinalCertificatePrintLog> AnimalFinalCertificatePrintLogs { get; set; }
  public virtual DbSet<AnimalOrganisationAssociation> AnimalOrganisationAssociations { get; set; }
  public virtual DbSet<AnimalOwnerLog> AnimalOwnerLogs { get; set; }
  public virtual DbSet<Association> Associations { get; set; }
  public virtual DbSet<Country> Countries { get; set; }
  public virtual DbSet<EmailCampaign> EmailCampaigns { get; set; }
  public virtual DbSet<EmailCampaignUniqueId> EmailCampaignUniqueIds { get; set; }
  public virtual DbSet<EpnSyncLog> EpnSyncLogs { get; set; }
  public virtual DbSet<Identification> Identifications { get; set; }
  public virtual DbSet<IdentificationLocalisation> IdentificationLocalisations { get; set; }
  public virtual DbSet<IdentificationType> IdentificationTypes { get; set; }
  public virtual DbSet<Identifier> Identifiers { get; set; }
  public virtual DbSet<Language> Languages { get; set; }
  public virtual DbSet<MailjetStatus> MailjetStatuses { get; set; }
  public virtual DbSet<MailjetTemp> MailjetTemps { get; set; }
  public virtual DbSet<Organisation> Organisations { get; set; }
  public virtual DbSet<Owner> Owners { get; set; }
  public virtual DbSet<OwnerAddressLog> OwnerAddressLogs { get; set; }
  public virtual DbSet<Passport> Passports { get; set; }
  public virtual DbSet<PostalAddress> PostalAddresses { get; set; }
  public virtual DbSet<PostalCode> PostalCodes { get; set; }
  public virtual DbSet<RefAnimalColor> RefAnimalColors { get; set; }
  public virtual DbSet<RefBreedName> RefBreedNames { get; set; }
  public virtual DbSet<RefCoatName> RefCoatNames { get; set; }
  public virtual DbSet<RefSpeciesName> RefSpeciesNames { get; set; }
  public virtual DbSet<RefSpecies> RefSpecies { get; set; }
  public virtual DbSet<Title> Titles { get; set; }
  public virtual DbSet<User> AppUsers { get; set; }

  public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
  {
    return base.SaveChangesAsync(cancellationToken);
  }

  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    base.OnModelCreating(modelBuilder);
    modelBuilder.Entity<Animal>(entity =>
    {
      entity.HasKey(e => e.Id).HasName("PK__tmp_ms_x__3213E83FEBBD8F8B");
      entity.ToTable("animal", tb =>
            {
            tb.HasTrigger("tg_animal_audit");
            tb.HasTrigger("tg_animal_cascade_delete");
          });
      entity.HasIndex(e => e.AssociationId, "IDX_animal_association_id");
      entity.HasIndex(e => e.LastOrganisationId, "IDX_animal_last_organisation_id");
      entity.HasIndex(e => e.LastUserId, "IDX_animal_last_user_id");
      entity.HasIndex(e => e.OwnerId, "IDX_animal_owner_id");
      entity.Property(e => e.Id).HasColumnName("id");
      entity.Property(e => e.AssociationId).HasColumnName("association_id");
      entity.Property(e => e.BatchPrint).HasColumnName("batch_print");
      entity.Property(e => e.Birthdate).HasColumnName("birthdate");
      entity.Property(e => e.Breeding).HasColumnName("breeding");
      entity.Property(e => e.DateInsert)
            .HasColumnType("datetime")
            .HasColumnName("date_insert");
      entity.Property(e => e.DateUpdate)
            .HasColumnType("datetime")
            .HasColumnName("date_update");
      entity.Property(e => e.Deceased).HasColumnName("deceased");
      entity.Property(e => e.DistinguishingMarks).HasColumnName("distinguishing_marks");
      entity.Property(e => e.Exported).HasColumnName("exported");
      entity.Property(e => e.Gender)
            .HasMaxLength(10)
            .HasColumnName("gender");
      entity.Property(e => e.LastOrganisationId).HasColumnName("last_organisation_id");
      entity.Property(e => e.LastUserId).HasColumnName("last_user_id");
      entity.Property(e => e.Lost).HasColumnName("lost");
      entity.Property(e => e.Name)
            .HasMaxLength(60)
            .HasColumnName("name");
      entity.Property(e => e.OldIntroductionNumber).HasColumnName("old_introduction_number");
      entity.Property(e => e.OldIntroductionNumberOwner).HasColumnName("old_introduction_number_owner");
      entity.Property(e => e.OldStationNumber).HasColumnName("old_station_number");
      entity.Property(e => e.OldStationNumberOwner).HasColumnName("old_station_number_owner");
      entity.Property(e => e.OwnerId).HasColumnName("owner_id");
      entity.Property(e => e.Pending).HasColumnName("pending");
      entity.Property(e => e.Species)
            .HasMaxLength(100)
              .HasColumnName("species");
            entity.Property(e => e.Sterilized).HasColumnName("sterilized");
            entity.Property(e => e.Stolen).HasColumnName("stolen");
            entity.Property(e => e.Temporary).HasColumnName("temporary");
            entity.Property(e => e.ToPrint).HasColumnName("to_print");
            entity.Property(e => e.Unknown).HasColumnName("unknown");
            entity.Property(e => e.Validated)
              .HasDefaultValue(true)
              .HasColumnName("validated");

            entity.HasOne(d => d.Association).WithMany(p => p.Animals)
              .HasForeignKey(d => d.AssociationId)
              .HasConstraintName("FK__animal__associat__0E44098D");

            entity.HasOne(d => d.LastOrganisation).WithMany(p => p.Animals)
              .HasForeignKey(d => d.LastOrganisationId)
              .OnDelete(DeleteBehavior.ClientSetNull)
              .HasConstraintName("FK__animal__last_org__0F382DC6");

            entity.HasOne(d => d.LastUser).WithMany(p => p.Animals)
              .HasForeignKey(d => d.LastUserId)
              .HasConstraintName("FK__animal__last_use__102C51FF");

            entity.HasOne(d => d.Owner).WithMany(p => p.Animals)
              .HasForeignKey(d => d.OwnerId)
              .HasConstraintName("FK__animal__owner_id__3FDB6521");
        });

        modelBuilder.Entity<AnimalAction>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__animal_a__3213E83F2CC2A6D7");

            entity.ToTable("animal_action", tb => tb.HasTrigger("tg_animal_action_audit"));

            entity.HasIndex(e => e.AnimalActionTypeId, "IDX_animal_action_animal_action_type_id");

            entity.HasIndex(e => e.AnimalId, "IDX_animal_action_animal_id");

            entity.HasIndex(e => e.LastUserId, "IDX_animal_action_last_user_id");

            entity.HasIndex(e => e.UserId, "IDX_animal_action_user_id");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.AnimalActionTypeId).HasColumnName("animal_action_type_id");
            entity.Property(e => e.AnimalId).HasColumnName("animal_id");
            entity.Property(e => e.Comment)
              .HasColumnType("ntext")
              .HasColumnName("comment");
            entity.Property(e => e.DateInsert)
              .HasColumnType("datetime")
              .HasColumnName("date_insert");
            entity.Property(e => e.EffectiveDate).HasColumnName("effective_date");
            entity.Property(e => e.LastUserId).HasColumnName("last_user_id");
            entity.Property(e => e.UserId).HasColumnName("user_id");

            entity.HasOne(d => d.Animal).WithMany(p => p.AnimalActions)
              .HasForeignKey(d => d.AnimalId)
              .HasConstraintName("FK__animal_ac__anima__0B679CE2");
        });

        modelBuilder.Entity<AnimalActionType>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__tmp_ms_x__3213E83FE1EF01F0");

            entity.ToTable("animal_action_type");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Name)
              .HasMaxLength(50)
              .HasColumnName("name");
            entity.Property(e => e.StatusLink)
              .HasMaxLength(20)
              .HasColumnName("status_link");
            entity.Property(e => e.StatusState).HasColumnName("status_state");
        });

        modelBuilder.Entity<AnimalBreed>(entity =>
        {
            entity.HasKey(e => new { e.AnimalId, e.Value }).HasName("PK__animal_b__7A63B131FA6EDA22");

            entity.ToTable("animal_breed");

            entity.HasIndex(e => e.AnimalId, "IDX_animal_breed_animal_id");

            entity.Property(e => e.AnimalId).HasColumnName("animal_id");
            entity.Property(e => e.Value)
              .HasMaxLength(50)
              .HasColumnName("value");
            entity.Property(e => e.Pos)
              .HasDefaultValue((byte)127)
              .HasColumnName("pos");

            entity.HasOne(d => d.Animal).WithMany(p => p.AnimalBreeds)
              .HasForeignKey(d => d.AnimalId)
              .HasConstraintName("FK__animal_br__anima__06A2E7C5");
        });

        modelBuilder.Entity<AnimalCoat>(entity =>
        {
            entity.HasKey(e => new { e.AnimalId, e.Value }).HasName("PK__animal_c__7A63B1312904828E");

            entity.ToTable("animal_coat");

            entity.HasIndex(e => e.AnimalId, "IDX_animal_coat_animal_id");

            entity.Property(e => e.AnimalId).HasColumnName("animal_id");
            entity.Property(e => e.Value)
              .HasMaxLength(50)
              .HasColumnName("value");
            entity.Property(e => e.Pos)
              .HasDefaultValue((byte)127)
              .HasColumnName("pos");

            entity.HasOne(d => d.Animal).WithMany(p => p.AnimalCoats)
              .HasForeignKey(d => d.AnimalId)
              .HasConstraintName("FK__animal_co__anima__097F5470");
        });

        modelBuilder.Entity<AnimalColor>(entity =>
        {
            entity.HasKey(e => new { e.AnimalId, e.Value }).HasName("PK__animal_c__7A63B1318D393AEC");

            entity.ToTable("animal_color");

            entity.HasIndex(e => e.AnimalId, "IDX_animal_color_animal_id");

            entity.Property(e => e.AnimalId).HasColumnName("animal_id");
            entity.Property(e => e.Value)
              .HasMaxLength(50)
              .HasColumnName("value");
            entity.Property(e => e.Pos)
              .HasDefaultValue((byte)127)
              .HasColumnName("pos");

            entity.HasOne(d => d.Animal).WithMany(p => p.AnimalColors)
              .HasForeignKey(d => d.AnimalId)
              .HasConstraintName("FK__animal_co__anima__0A7378A9");
        });

        modelBuilder.Entity<AnimalFinalCertificatePrintLog>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__animal_f__3213E83F259DE1AB");

            entity.ToTable("animal_final_certificate_print_log");

            entity.HasIndex(e => e.AnimalId, "IDX_animal_final_certificate_print_log_animal_id");

            entity.HasIndex(e => e.OrganisationId, "IDX_animal_final_certificate_print_log_organisation_id");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.AnimalId).HasColumnName("animal_id");
            entity.Property(e => e.BatchNumber).HasColumnName("batch_number");
            entity.Property(e => e.MicrochipIdentificationId).HasColumnName("microchip_identification_id");
            entity.Property(e => e.OrganisationId).HasColumnName("organisation_id");
            entity.Property(e => e.PassportId).HasColumnName("passport_id");
            entity.Property(e => e.PrintDate)
              .HasColumnType("datetime")
              .HasColumnName("print_date");
            entity.Property(e => e.PrintType)
              .HasMaxLength(10)
              .HasColumnName("print_type");
            entity.Property(e => e.SerializedAnimal)
              .HasColumnType("ntext")
              .HasColumnName("serialized_animal");
            entity.Property(e => e.TattooIdentificationId).HasColumnName("tattoo_identification_id");

            entity.HasOne(d => d.Animal).WithMany(p => p.AnimalFinalCertificatePrintLogs)
              .HasForeignKey(d => d.AnimalId)
              .OnDelete(DeleteBehavior.SetNull)
              .HasConstraintName("FK__animal_fi__anima__0D4FE554");

            entity.HasOne(d => d.Organisation).WithMany(p => p.AnimalFinalCertificatePrintLogs)
              .HasForeignKey(d => d.OrganisationId)
              .OnDelete(DeleteBehavior.ClientSetNull)
              .HasConstraintName("FK__animal_fi__organ__37E53D9E");
        });

        modelBuilder.Entity<AnimalOrganisationAssociation>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__tmp_ms_x__3213E83FE3E06E36");

            entity.ToTable("animal_organisation_association");

            entity.HasIndex(e => e.AnimalId, "IDX_animal_organisation_association_animal_id");

            entity.HasIndex(e => e.OrganisationId, "IDX_animal_organisation_association_organisation_id");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.AnimalId).HasColumnName("animal_id");
            entity.Property(e => e.DateInsert)
              .HasColumnType("datetime")
              .HasColumnName("date_insert");
            entity.Property(e => e.OrganisationId).HasColumnName("organisation_id");

            entity.HasOne(d => d.Animal).WithMany(p => p.AnimalOrganisationAssociations)
              .HasForeignKey(d => d.AnimalId)
              .HasConstraintName("FK__animal_or__anima__07970BFE");

            entity.HasOne(d => d.Organisation).WithMany(p => p.AnimalOrganisationAssociations)
              .HasForeignKey(d => d.OrganisationId)
              .OnDelete(DeleteBehavior.ClientSetNull)
              .HasConstraintName("FK__animal_or__organ__10CB707D");
        });

        modelBuilder.Entity<AnimalOwnerLog>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__tmp_ms_x__3213E83FAAC91FB4");

            entity.ToTable("animal_owner_log", tb => tb.HasTrigger("tg_animal_owner_log_audit"));

            entity.HasIndex(e => e.AnimalId, "IDX_animal_owner_log_animal_id");

            entity.HasIndex(e => e.LastUserId, "IDX_animal_owner_log_last_user_id");

            entity.HasIndex(e => e.OwnerId, "IDX_animal_owner_log_owner_id");

            entity.HasIndex(e => e.UserId, "IDX_animal_owner_log_user_id");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.AnimalId).HasColumnName("animal_id");
            entity.Property(e => e.DateInsert)
              .HasColumnType("datetime")
              .HasColumnName("date_insert");
            entity.Property(e => e.LastUserId).HasColumnName("last_user_id");
            entity.Property(e => e.OwnerId).HasColumnName("owner_id");
            entity.Property(e => e.UserId).HasColumnName("user_id");

            entity.HasOne(d => d.Animal).WithMany(p => p.AnimalOwnerLogs)
              .HasForeignKey(d => d.AnimalId)
              .HasConstraintName("FK__animal_ow__anima__12149A71");

            entity.HasOne(d => d.LastUser).WithMany(p => p.AnimalOwnerLogLastUsers)
              .HasForeignKey(d => d.LastUserId)
              .HasConstraintName("FK__animal_ow__last___149C0161");

            entity.HasOne(d => d.Owner).WithMany(p => p.AnimalOwnerLogs)
              .HasForeignKey(d => d.OwnerId)
              .OnDelete(DeleteBehavior.ClientSetNull)
              .HasConstraintName("FK__animal_ow__owner__41C3AD93");

            entity.HasOne(d => d.User).WithMany(p => p.AnimalOwnerLogUsers)
              .HasForeignKey(d => d.UserId)
              .HasConstraintName("FK__animal_ow__user___3592E0D8");
        });

        modelBuilder.Entity<Association>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__tmp_ms_x__3213E83F51AAF032");

            entity.ToTable("association", tb => tb.HasTrigger("tg_association_cascade_delete"));

            entity.HasIndex(e => e.CountryCode, "IDX_association_country_code");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.City)
              .HasMaxLength(50)
              .HasColumnName("city");
            entity.Property(e => e.CountryCode)
              .HasMaxLength(2)
              .HasColumnName("country_code");
            entity.Property(e => e.DateInsert)
              .HasColumnType("datetime")
              .HasColumnName("date_insert");
            entity.Property(e => e.DateUpdate)
              .HasColumnType("datetime")
              .HasColumnName("date_update");
            entity.Property(e => e.Email)
              .HasMaxLength(50)
              .HasColumnName("email");
            entity.Property(e => e.Fax)
              .HasMaxLength(20)
              .HasColumnName("fax");
            entity.Property(e => e.Name)
              .HasMaxLength(50)
              .HasColumnName("name");
            entity.Property(e => e.Number)
              .HasMaxLength(10)
              .HasColumnName("number");
            entity.Property(e => e.Phone)
              .HasMaxLength(20)
              .HasColumnName("phone");
            entity.Property(e => e.PostalCode)
              .HasMaxLength(10)
              .HasColumnName("postal_code");
            entity.Property(e => e.Street)
              .HasMaxLength(80)
              .HasColumnName("street");

            entity.HasOne(d => d.CountryCodeNavigation).WithMany(p => p.Associations)
              .HasForeignKey(d => d.CountryCode)
              .OnDelete(DeleteBehavior.ClientSetNull)
              .HasConstraintName("FK__associati__count__1590259A");
        });

        modelBuilder.Entity<Country>(entity =>
        {
            entity.HasKey(e => e.Code).HasName("PK__tmp_ms_x__357D4CF8FCAFDAEA");

            entity.ToTable("country");

            entity.Property(e => e.Code)
              .HasMaxLength(2)
              .HasColumnName("code");
            entity.Property(e => e.Name)
              .HasMaxLength(50)
              .HasColumnName("name");
        });

        modelBuilder.Entity<EmailCampaign>(entity =>
        {
            entity.ToTable("email_campaign");

            entity.HasIndex(e => e.RecipientEmail, "idx_email_campaign_recipient_email");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CampaignDate)
              .HasColumnType("datetime")
              .HasColumnName("campaign_date");
            entity.Property(e => e.CampaignName)
              .HasMaxLength(50)
              .HasColumnName("campaign_name");
            entity.Property(e => e.ClickedDate)
              .HasColumnType("datetime")
              .HasColumnName("clicked_date");
            entity.Property(e => e.EmailBody).HasColumnName("email_body");
            entity.Property(e => e.IdentifierId).HasColumnName("identifier_id");
            entity.Property(e => e.Language)
              .HasMaxLength(2)
              .HasDefaultValue("en")
              .HasColumnName("language");
            entity.Property(e => e.LastOrganisationId).HasColumnName("last_organisation_id");
            entity.Property(e => e.OwnerId).HasColumnName("owner_id");
            entity.Property(e => e.RecipientEmail)
              .HasMaxLength(80)
              .HasColumnName("recipient_email");
            entity.Property(e => e.RecipientType)
              .HasMaxLength(3)
              .HasColumnName("recipient_type");
            entity.Property(e => e.SentDate)
              .HasColumnType("datetime")
              .HasColumnName("sent_date");
            entity.Property(e => e.ToSend)
              .HasDefaultValue(true)
              .HasColumnName("to_send");
            entity.Property(e => e.UnsubscribedDate)
              .HasColumnType("datetime")
              .HasColumnName("unsubscribed_date");
        });

        modelBuilder.Entity<EmailCampaignUniqueId>(entity =>
        {
            entity
              .HasNoKey()
              .ToTable("email_campaign_unique_id");

            entity.Property(e => e.Maxid).HasColumnName("maxid");
            entity.Property(e => e.RecipientEmail)
              .HasMaxLength(80)
              .HasColumnName("recipient_email");
        });

        modelBuilder.Entity<EpnSyncLog>(entity =>
        {
            entity
            .HasKey(e => e.Id).HasName("PK_EpnSyncLog");
            entity
            .ToTable("EpnSyncLog");
            entity.Property(e => e.Id).HasColumnName("Id");
            entity.Property(e => e.TransactionType).HasColumnName("TransactionType");
            entity.Property(e => e.MemberCode).HasColumnName("MemberCode");
            entity.Property(e => e.IdentificationType).HasColumnName("IdentificationType");
            entity.Property(e => e.IdentificationNumber).HasColumnName("IdentificationNumber");
            entity.Property(e => e.ChippedDate).HasColumnName("ChippedDate");
            entity.Property(e => e.Gender).HasColumnName("Gender");
            entity.Property(e => e.BirthDate).HasColumnName("BirthDate");
            entity.Property(e => e.Species).HasColumnName("Species");
            entity.Property(e => e.IsMissing).HasColumnName("IsMissing");
            entity.Property(e => e.MissingDate).HasColumnName("MissingDate");
            entity.Property(e => e.ProcessingDate).HasColumnName("ProcessingDate");
            entity.Property(e => e.IsSuccess).HasColumnName("IsSuccess");
            entity.Property(e => e.ErrorCodeList).HasColumnName("ErrorCodeList");
        });


        modelBuilder.Entity<Identification>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__tmp_ms_x__3213E83FFC377581");

            entity.ToTable("identification", tb => tb.HasTrigger("tg_identification_audit"));

            entity.HasIndex(e => e.AnimalId, "IDX_identification_animal_id");

            entity.HasIndex(e => e.IdentificationLocalisationId, "IDX_identification_identification_localisation_id");

            entity.HasIndex(e => e.IdentificationTypeId, "IDX_identification_identification_type_id");

            entity.HasIndex(e => e.IdentifierId, "IDX_identification_identifier_id");

            entity.HasIndex(e => e.LastUserId, "IDX_identification_last_user_id");

            entity.HasIndex(e => e.AppUserId, "IX_identification_AppUserId");

            entity.HasIndex(e => e.IdentificationNumber, "UQ__identifi__224D5913FD20C123").IsUnique();

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.AnimalId).HasColumnName("animal_id");
            entity.Property(e => e.Comment)
              .HasColumnType("ntext")
              .HasColumnName("comment");
            entity.Property(e => e.DateIdentification).HasColumnName("date_identification");
            entity.Property(e => e.DateInsert)
              .HasColumnType("datetime")
              .HasColumnName("date_insert");
            entity.Property(e => e.DateUpdate)
              .HasColumnType("datetime")
              .HasColumnName("date_update");
            entity.Property(e => e.IdentificationLocalisationId).HasColumnName("identification_localisation_id");
            entity.Property(e => e.IdentificationNumber)
              .HasMaxLength(20)
              .HasColumnName("identification_number");
            entity.Property(e => e.IdentificationTypeId).HasColumnName("identification_type_id");
            entity.Property(e => e.IdentifierId).HasColumnName("identifier_id");
            entity.Property(e => e.LastUserId).HasColumnName("last_user_id");
            entity.Property(e => e.OldIntroductionNumberAnimal).HasColumnName("old_introduction_number_animal");
            entity.Property(e => e.OldIntroductionNumberIdentifier).HasColumnName("old_introduction_number_identifier");
            entity.Property(e => e.OldStationNumberAnimal).HasColumnName("old_station_number_animal");
            entity.Property(e => e.OldStationNumberIdentifier).HasColumnName("old_station_number_identifier");
            entity.Property(e => e.Validated)
              .HasDefaultValue(true)
              .HasColumnName("validated");

            entity.Property(e => e.EpnDateInsert)
                .HasColumnType("datetime")
                .HasColumnName("epn_date_insert");
            entity.HasIndex(d => d.EpnDateInsert, "IDX_epn_date_insert");

            entity.Property(e => e.EpnDateUpdate)
                .HasColumnType("datetime")
                .HasColumnName("epn_date_update");
            entity.HasIndex(d => d.EpnDateUpdate, "IDX_epn_date_update");


            entity.HasOne(d => d.Animal).WithMany(p => p.Identifications)
              .HasForeignKey(d => d.AnimalId)
              .HasConstraintName("FK__identific__anima__088B3037");

            entity.HasOne(d => d.IdentificationLocalisation).WithMany(p => p.Identifications)
              .HasForeignKey(d => d.IdentificationLocalisationId)
              .OnDelete(DeleteBehavior.ClientSetNull)
              .HasConstraintName("FK__identific__ident__186C9245");

            entity.HasOne(d => d.IdentificationType).WithMany(p => p.Identifications)
              .HasForeignKey(d => d.IdentificationTypeId)
              .OnDelete(DeleteBehavior.ClientSetNull)
              .HasConstraintName("FK__identific__ident__17786E0C");

            entity.HasOne(d => d.Identifier).WithMany(p => p.Identifications)
              .HasForeignKey(d => d.IdentifierId)
              .OnDelete(DeleteBehavior.ClientSetNull)
              .HasConstraintName("FK__identific__ident__1A54DAB7");

            entity.HasOne(d => d.LastUser).WithMany(p => p.Identifications)
              .HasForeignKey(d => d.LastUserId)
              .HasConstraintName("FK__identific__last___1B48FEF0");
        });

        modelBuilder.Entity<IdentificationLocalisation>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__tmp_ms_x__3213E83F98D1E1B4");

            entity.ToTable("identification_localisation");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Localisation)
              .HasColumnType("ntext")
              .HasColumnName("localisation");
        });

        modelBuilder.Entity<IdentificationType>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__tmp_ms_x__3213E83FAFFAD850");

            entity.ToTable("identification_type");

            entity.HasIndex(e => e.Type, "UQ__identifi__E3F85248A9E68F7A").IsUnique();

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Type)
              .HasMaxLength(100)
              .HasColumnName("type");
        });

        modelBuilder.Entity<Identifier>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__tmp_ms_x__3213E83FA2022F29");

            entity.ToTable("identifier", tb =>
              {
                  tb.HasTrigger("tg_identifier_audit");
                  tb.HasTrigger("tg_identifier_cascade_delete");
              });

            entity.HasIndex(e => e.CountryCode, "IDX_identifier_country_code");

            entity.HasIndex(e => e.LanguageCode, "IDX_identifier_language_code");

            entity.HasIndex(e => e.LastUserId, "IDX_identifier_last_user_id");

            entity.HasIndex(e => e.UserId, "IDX_identifier_user_id");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Authenticated)
              .HasDefaultValue(true)
              .HasColumnName("authenticated");
            entity.Property(e => e.City)
              .HasMaxLength(50)
              .HasColumnName("city");
            entity.Property(e => e.CountryCode)
              .HasMaxLength(2)
              .HasColumnName("country_code");
            entity.Property(e => e.DateInsert)
              .HasColumnType("datetime")
              .HasColumnName("date_insert");
            entity.Property(e => e.DateUpdate)
              .HasColumnType("datetime")
              .HasColumnName("date_update");
            entity.Property(e => e.Email)
              .HasMaxLength(80)
              .HasColumnName("email");
            entity.Property(e => e.Fax)
              .HasMaxLength(25)
              .HasColumnName("fax");
            entity.Property(e => e.Firstname)
              .HasMaxLength(30)
              .HasColumnName("firstname");
            entity.Property(e => e.LanguageCode)
              .HasMaxLength(2)
              .HasColumnName("language_code");
            entity.Property(e => e.LastUserId).HasColumnName("last_user_id");
            entity.Property(e => e.Lastname)
              .HasMaxLength(30)
              .HasColumnName("lastname");
            entity.Property(e => e.Mobile)
              .HasMaxLength(25)
              .HasColumnName("mobile");
            entity.Property(e => e.NoMailing).HasColumnName("no_mailing");
            entity.Property(e => e.Number)
              .HasMaxLength(10)
              .HasColumnName("number");
            entity.Property(e => e.OldIntroductionNumber).HasColumnName("old_introduction_number");
            entity.Property(e => e.OldStationNumber).HasColumnName("old_station_number");
            entity.Property(e => e.Phone)
              .HasMaxLength(25)
              .HasColumnName("phone");
            entity.Property(e => e.PostalCode)
              .HasMaxLength(10)
              .HasColumnName("postal_code");
            entity.Property(e => e.Street)
              .HasMaxLength(80)
              .HasColumnName("street");
            entity.Property(e => e.Title)
              .HasMaxLength(10)
              .HasColumnName("title");
            entity.Property(e => e.Type)
              .HasMaxLength(20)
              .HasColumnName("type");
            entity.Property(e => e.UserId).HasColumnName("user_id");
            entity.Property(e => e.VatNumber)
              .HasMaxLength(15)
              .HasDefaultValue("")
              .HasColumnName("vat_number");
            entity.Property(e => e.VeterinaryNumber)
              .HasMaxLength(20)
              .HasColumnName("veterinary_number");
            entity.HasOne(d => d.Country).WithMany(p => p.Identifiers)
        .HasForeignKey(d => d.CountryCode)
        .OnDelete(DeleteBehavior.ClientSetNull)
        .HasConstraintName("FK__identifier__country_c__45943E77");

        });

        modelBuilder.Entity<Language>(entity =>
        {
            entity.HasKey(e => e.Code).HasName("PK__tmp_ms_x__357D4CF81F9683EB");

            entity.ToTable("language");

            entity.Property(e => e.Code)
              .HasMaxLength(2)
              .HasColumnName("code");
            entity.Property(e => e.IndexNumber).HasColumnName("index_number");
            entity.Property(e => e.Name)
              .HasMaxLength(50)
              .HasColumnName("name");
        });

        modelBuilder.Entity<MailjetStatus>(entity =>
        {
            entity.HasKey(e => e.To).HasName("PK_mailjet_status_1");

            entity.ToTable("mailjet_status");

            entity.Property(e => e.To).HasMaxLength(50);
            entity.Property(e => e.Date).HasColumnName("date");
            entity.Property(e => e.Status)
              .HasMaxLength(50)
              .HasColumnName("status");
        });

        modelBuilder.Entity<MailjetTemp>(entity =>
        {
            entity
              .HasNoKey()
              .ToTable("mailjet_temp");

            entity.Property(e => e.Blocked).HasColumnName("blocked");
            entity.Property(e => e.Bounce).HasColumnName("bounce");
            entity.Property(e => e.Click).HasColumnName("click");
            entity.Property(e => e.Date).HasColumnName("date");
            entity.Property(e => e.Details)
              .HasMaxLength(50)
              .HasColumnName("details");
            entity.Property(e => e.From).HasMaxLength(50);
            entity.Property(e => e.Messageid).HasColumnName("messageid");
            entity.Property(e => e.Open).HasColumnName("open");
            entity.Property(e => e.Queued).HasColumnName("queued");
            entity.Property(e => e.Sent).HasColumnName("sent");
            entity.Property(e => e.Spam).HasColumnName("spam");
            entity.Property(e => e.Status)
              .HasMaxLength(50)
              .HasColumnName("status");
            entity.Property(e => e.Subject)
              .HasMaxLength(100)
              .HasColumnName("subject");
            entity.Property(e => e.To).HasMaxLength(50);
            entity.Property(e => e.Unsub).HasColumnName("unsub");
        });

        modelBuilder.Entity<Organisation>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__tmp_ms_x__3213E83F046E2E70");

            entity.ToTable("organisation", tb => tb.HasTrigger("tg_organisation_cascade_delete"));

            entity.HasIndex(e => e.CountryCode, "IDX_organisation_country_code");

            entity.HasIndex(e => e.Code, "UQ__tmp_ms_x__357D4CF9AC7CF894").IsUnique();

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.City)
              .HasMaxLength(50)
              .HasColumnName("city");
            entity.Property(e => e.Code)
              .HasMaxLength(3)
              .IsUnicode(false)
              .IsFixedLength()
              .HasColumnName("code");
            entity.Property(e => e.Color)
              .HasMaxLength(6)
              .HasColumnName("color");
            entity.Property(e => e.CountryCode)
              .HasMaxLength(2)
              .HasColumnName("country_code");
            entity.Property(e => e.DateInsert)
              .HasColumnType("datetime")
              .HasColumnName("date_insert");
            entity.Property(e => e.DateUpdate)
              .HasColumnType("datetime")
              .HasColumnName("date_update");
            entity.Property(e => e.Email)
              .HasMaxLength(50)
              .HasColumnName("email");
            entity.Property(e => e.Fax)
              .HasMaxLength(20)
              .HasColumnName("fax");
            entity.Property(e => e.Name)
              .HasMaxLength(50)
              .HasColumnName("name");
            entity.Property(e => e.Number)
              .HasMaxLength(10)
              .HasColumnName("number");
            entity.Property(e => e.Phone)
              .HasMaxLength(20)
              .HasColumnName("phone");
            entity.Property(e => e.PostalCode)
              .HasMaxLength(10)
              .HasColumnName("postal_code");
            entity.Property(e => e.Street)
              .HasMaxLength(80)
              .HasColumnName("street");

            entity.HasOne(d => d.CountryCodeNavigation).WithMany(p => p.Organisations)
              .HasForeignKey(d => d.CountryCode)
              .OnDelete(DeleteBehavior.ClientSetNull)
              .HasConstraintName("FK__organisat__count__1E256B9B");
        });

        modelBuilder.Entity<Owner>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__tmp_ms_x__3213E83FAA2E603E");

            entity.ToTable("owner", tb =>
              {
                  tb.HasTrigger("tg_owner_audit");
                  tb.HasTrigger("tg_owner_cascade_delete");
              });

            entity.HasIndex(e => e.LanguageCode, "IDX_iowner_language_code");

            entity.HasIndex(e => e.CountryCode, "IDX_owner_country_code");

            entity.HasIndex(e => e.LastUserId, "IDX_owner_last_user_id");

            entity.HasIndex(e => e.UserId, "IDX_owner_user_id");

            entity.HasIndex(e => e.AgreementNumber, "_dta_index_owner_8_2037582297__K20");

            entity.HasIndex(e => new { e.Lastname, e.City, e.Firstname, e.PostalCode, e.Street }, "nci_wi_owner_D401A5FCAC5D0E15AB1A");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.AgreementNumber)
              .HasMaxLength(20)
              .HasColumnName("agreement_number");
            entity.Property(e => e.Authenticated)
              .HasDefaultValue(true)
              .HasColumnName("authenticated");
            entity.Property(e => e.City)
              .HasMaxLength(50)
              .HasColumnName("city");
            entity.Property(e => e.Confidential).HasColumnName("confidential");
            entity.Property(e => e.CountryCode)
              .HasMaxLength(2)
              .HasColumnName("country_code");
            entity.Property(e => e.DateInsert)
              .HasColumnType("datetime")
              .HasColumnName("date_insert");
            entity.Property(e => e.DateUpdate)
              .HasColumnType("datetime")
              .HasColumnName("date_update");
            entity.Property(e => e.Email)
              .HasMaxLength(80)
              .HasColumnName("email");
            entity.Property(e => e.Firstname)
              .HasMaxLength(30)
              .HasColumnName("firstname");
            entity.Property(e => e.ImmediateTransferPrivilege).HasColumnName("immediate_transfer_privilege");
            entity.Property(e => e.LanguageCode)
              .HasMaxLength(2)
              .HasColumnName("language_code");
            entity.Property(e => e.LastUserId).HasColumnName("last_user_id");
            entity.Property(e => e.Lastname)
              .HasMaxLength(30)
              .HasColumnName("lastname");
            entity.Property(e => e.Number)
              .HasMaxLength(10)
              .HasColumnName("number");
            entity.Property(e => e.OldIntroductionNumber).HasColumnName("old_introduction_number");
            entity.Property(e => e.OldStationNumber).HasColumnName("old_station_number");
            entity.Property(e => e.Phone1)
              .HasMaxLength(25)
              .HasColumnName("phone1");
            entity.Property(e => e.Phone2)
              .HasMaxLength(25)
              .HasColumnName("phone2");
            entity.Property(e => e.Phone3)
              .HasMaxLength(25)
              .HasColumnName("phone3");
            entity.Property(e => e.Phone4)
              .HasMaxLength(25)
              .HasColumnName("phone4");
            entity.Property(e => e.PostalCode)
              .HasMaxLength(10)
              .HasColumnName("postal_code");
            entity.Property(e => e.Street)
              .HasMaxLength(80)
              .HasColumnName("street");
            entity.Property(e => e.Title)
              .HasMaxLength(10)
              .HasColumnName("title");
            entity.Property(e => e.Type)
              .HasMaxLength(20)
              .HasColumnName("type");
            entity.Property(e => e.UserId).HasColumnName("user_id");

            entity.HasOne(d => d.CountryCodeNavigation).WithMany(p => p.Owners)
              .HasForeignKey(d => d.CountryCode)
              .OnDelete(DeleteBehavior.ClientSetNull)
              .HasConstraintName("FK__owner__country_c__45943E77");

            entity.HasOne(d => d.LanguageCodeNavigation).WithMany(p => p.Owners)
              .HasForeignKey(d => d.LanguageCode)
              .HasConstraintName("FK__owner__language___44A01A3E");

            entity.HasOne(d => d.LastUser).WithMany(p => p.OwnerLastUsers)
              .HasForeignKey(d => d.LastUserId)
              .HasConstraintName("FK__owner__last_user__468862B0");

            entity.HasOne(d => d.User).WithMany(p => p.OwnerUsers)
              .HasForeignKey(d => d.UserId)
              .HasConstraintName("FK__owner__user_id__43ABF605");
        });

        modelBuilder.Entity<OwnerAddressLog>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__tmp_ms_x__3213E83F63E71BD9");

            entity.ToTable("owner_address_log", tb => tb.HasTrigger("tg_owner_address_log_audit"));

            entity.HasIndex(e => e.CountryCode, "IDX_owner_address_log_country_code");

            entity.HasIndex(e => e.LastUserId, "IDX_owner_address_log_last_user_id");

            entity.HasIndex(e => e.OwnerId, "IDX_owner_address_log_owner_id");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.City)
              .HasMaxLength(50)
              .HasColumnName("city");
            entity.Property(e => e.CountryCode)
              .HasMaxLength(2)
              .HasColumnName("country_code");
            entity.Property(e => e.DateInsert)
              .HasColumnType("datetime")
              .HasColumnName("date_insert");
            entity.Property(e => e.LastUserId).HasColumnName("last_user_id");
            entity.Property(e => e.Number)
              .HasMaxLength(10)
              .HasColumnName("number");
            entity.Property(e => e.OwnerId).HasColumnName("owner_id");
            entity.Property(e => e.PostalCode)
              .HasMaxLength(10)
              .HasColumnName("postal_code");
            entity.Property(e => e.Street)
              .HasMaxLength(50)
              .HasColumnName("street");

            entity.HasOne(d => d.CountryCodeNavigation).WithMany(p => p.OwnerAddressLogs)
              .HasForeignKey(d => d.CountryCode)
              .OnDelete(DeleteBehavior.ClientSetNull)
              .HasConstraintName("FK__owner_add__count__2101D846");

            entity.HasOne(d => d.LastUser).WithMany(p => p.OwnerAddressLogs)
              .HasForeignKey(d => d.LastUserId)
              .HasConstraintName("FK__owner_add__last___200DB40D");

            entity.HasOne(d => d.Owner).WithMany(p => p.OwnerAddressLogs)
              .HasForeignKey(d => d.OwnerId)
              .OnDelete(DeleteBehavior.ClientSetNull)
              .HasConstraintName("FK__owner_add__owner__42B7D1CC");
        });

        modelBuilder.Entity<Passport>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__tmp_ms_x__3213E83FED0ED256");

            entity.ToTable("passport", tb => tb.HasTrigger("tg_passport_audit"));

            entity.HasIndex(e => e.AnimalId, "IDX_passport_animal_id");

            entity.HasIndex(e => e.LastUserId, "IDX_passport_last_user_id");

            entity.HasIndex(e => e.Number, "UQ__passport__FD291E41B3DE7D58").IsUnique();

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.AnimalId).HasColumnName("animal_id");
            entity.Property(e => e.DateInsert)
              .HasColumnType("datetime")
              .HasColumnName("date_insert");
            entity.Property(e => e.LastUserId).HasColumnName("last_user_id");
            entity.Property(e => e.Number)
              .HasMaxLength(20)
              .HasColumnName("number");

            entity.HasOne(d => d.Animal).WithMany(p => p.Passports)
              .HasForeignKey(d => d.AnimalId)
              .OnDelete(DeleteBehavior.ClientSetNull)
              .HasConstraintName("FK__passport__animal__0C5BC11B");

            entity.HasOne(d => d.LastUser).WithMany(p => p.Passports)
              .HasForeignKey(d => d.LastUserId)
              .HasConstraintName("FK__passport__last_u__25C68D63");
        });

        modelBuilder.Entity<PostalAddress>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__tmp_ms_x__3213E83F98DD9847");

            entity.ToTable("postal_address");

            entity.HasIndex(e => new { e.CountryCode, e.PostalCode, e.City, e.Street }, "UQ__tmp_ms_x__3E2DE410DF7D150E").IsUnique();

            entity.HasIndex(e => new { e.CountryCode, e.City, e.PostalCode }, "_dta_index_postal_address_8_114099447__K2_K4_K3");

            entity.HasIndex(e => new { e.PostalCode, e.City, e.CountryCode }, "_dta_index_postal_address_8_114099447__K3_K4_K2");

            entity.HasIndex(e => e.City, "_dta_index_postal_address_8_114099447__K4");

            entity.HasIndex(e => new { e.City, e.CountryCode, e.PostalCode, e.Street }, "_dta_index_postal_address_8_114099447__K4_K2_K3_K5");

            entity.HasIndex(e => new { e.City, e.PostalCode, e.CountryCode }, "_dta_index_postal_address_8_114099447__K4_K3_K2");

            entity.HasIndex(e => new { e.Street, e.City, e.CountryCode, e.PostalCode }, "_dta_index_postal_address_8_114099447__K5_K4_K2_K3");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.City)
              .HasMaxLength(50)
              .HasColumnName("city");
            entity.Property(e => e.CountryCode)
              .HasMaxLength(2)
              .HasColumnName("country_code");
            entity.Property(e => e.MainPostalCode)
              .HasMaxLength(10)
              .HasColumnName("main_postal_code");
            entity.Property(e => e.PostalCode)
              .HasMaxLength(10)
              .HasColumnName("postal_code");
            entity.Property(e => e.Street)
              .HasMaxLength(80)
              .HasColumnName("street");
        });

        modelBuilder.Entity<PostalCode>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__tmp_ms_x__3213E83F62DFCEE0");

            entity.ToTable("postal_code");

            entity.HasIndex(e => e.CountryCode, "IDX_postal_code_country_code");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.City)
              .HasMaxLength(50)
              .HasColumnName("city");
            entity.Property(e => e.CountryCode)
              .HasMaxLength(2)
              .HasColumnName("country_code");
            entity.Property(e => e.MainCity)
              .HasMaxLength(50)
              .HasColumnName("main_city");
            entity.Property(e => e.MainPostalCode)
              .HasMaxLength(10)
              .HasColumnName("main_postal_code");
            entity.Property(e => e.PostalCode1)
              .HasMaxLength(10)
              .HasColumnName("postal_code");
            entity.Property(e => e.Province)
              .HasMaxLength(50)
              .HasColumnName("province");
            entity.Property(e => e.Region)
              .HasMaxLength(50)
              .HasColumnName("region");

            entity.HasOne(d => d.CountryCodeNavigation).WithMany(p => p.PostalCodes)
              .HasForeignKey(d => d.CountryCode)
              .OnDelete(DeleteBehavior.ClientSetNull)
              .HasConstraintName("FK__postal_co__count__26BAB19C");
        });

        modelBuilder.Entity<RefAnimalColor>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__ref_anim__3213E83F85F1BD71");

            entity.ToTable("ref_animal_color");

            entity.HasIndex(e => new { e.Language, e.Name }, "UQ__ref_anim__5883B728121C2D80").IsUnique();

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Language)
              .HasMaxLength(35)
              .IsUnicode(false)
              .HasColumnName("language");
            entity.Property(e => e.Name)
              .HasMaxLength(50)
              .HasColumnName("name");
        });

        modelBuilder.Entity<RefBreedName>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__ref_bree__3213E83F6128AF4B");

            entity.ToTable("ref_breed_name");

            entity.HasIndex(e => e.SpeciesId, "IDX_ref_breed_name_species_id");

            entity.HasIndex(e => new { e.Language, e.SpeciesId, e.Name }, "UQ__ref_bree__CFFC98AA8B0FA35A").IsUnique();

            entity.HasIndex(e => e.Name, "_dta_index_ref_breed_name_8_306100131__K4");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Language)
              .HasMaxLength(35)
              .IsUnicode(false)
              .HasColumnName("language");
            entity.Property(e => e.Name)
              .HasMaxLength(50)
              .HasColumnName("name");
            entity.Property(e => e.SpeciesId).HasColumnName("species_id");

            entity.HasOne(d => d.Species).WithMany(p => p.RefBreedNames)
              .HasForeignKey(d => d.SpeciesId)
              .OnDelete(DeleteBehavior.ClientSetNull)
              .HasConstraintName("FK__ref_breed__speci__05E3CDB6");
        });

        modelBuilder.Entity<RefCoatName>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__ref_coat__3213E83FD8DB447F");

            entity.ToTable("ref_coat_name");

            entity.HasIndex(e => new { e.Language, e.Name }, "UQ__ref_coat__5883B7286BCA9096").IsUnique();

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Language)
              .HasMaxLength(35)
              .IsUnicode(false)
              .HasColumnName("language");
            entity.Property(e => e.Name)
              .HasMaxLength(50)
              .HasColumnName("name");
        });

        modelBuilder.Entity<RefSpeciesName>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__ref_spec__3213E83F7D14AE9B");

            entity.ToTable("ref_species_name");

            entity.HasIndex(e => e.SpeciesId, "IDX_ref_species_name_species_id");

            entity.HasIndex(e => new { e.SpeciesId, e.Language, e.Name }, "UQ__ref_spec__37B5FEB117A830A9").IsUnique();

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Language)
              .HasMaxLength(35)
              .IsUnicode(false)
              .HasColumnName("language");
            entity.Property(e => e.Name)
              .HasMaxLength(50)
              .HasColumnName("name");
            entity.Property(e => e.SpeciesId).HasColumnName("species_id");

            entity.HasOne(d => d.Species).WithMany(p => p.RefSpeciesNames)
              .HasForeignKey(d => d.SpeciesId)
              .OnDelete(DeleteBehavior.ClientSetNull)
              .HasConstraintName("FK__ref_speci__speci__06D7F1EF");
        });

        modelBuilder.Entity<RefSpecies>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__ref_spec__3213E83F7147930B");

            entity.ToTable("ref_species");

            entity.Property(e => e.Id).HasColumnName("id");
        });

        modelBuilder.Entity<Title>(entity =>
        {
            entity.HasKey(e => e.Name).HasName("PK__tmp_ms_x__72E12F1A7B485285");

            entity.ToTable("title");

            entity.Property(e => e.Name)
              .HasMaxLength(30)
              .HasColumnName("name");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__tmp_ms_x__3213E83F3A436660");

            entity.ToTable("user", tb =>
              {
                  tb.HasTrigger("tg_audit_user");
                  tb.HasTrigger("tg_user_cascade_delete");
              });

            entity.HasIndex(e => e.LanguageCode, "IDX_user_language_code");

            entity.HasIndex(e => e.LastUserId, "IDX_user_last_user_id");

            entity.HasIndex(e => e.Login, "UQ__user__7838F27298A91A33").IsUnique();

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.DateInsert)
              .HasColumnType("datetime")
              .HasColumnName("date_insert");
            entity.Property(e => e.DateUpdate)
              .HasColumnType("datetime")
              .HasColumnName("date_update");
            entity.Property(e => e.Email)
              .HasMaxLength(50)
              .HasColumnName("email");
            entity.Property(e => e.Firstname)
              .HasMaxLength(30)
              .HasColumnName("firstname");
            entity.Property(e => e.LanguageCode)
              .HasMaxLength(2)
              .HasColumnName("language_code");
            entity.Property(e => e.LastUserId).HasColumnName("last_user_id");
            entity.Property(e => e.Lastname)
              .HasMaxLength(30)
              .HasColumnName("lastname");
            entity.Property(e => e.Login)
              .HasMaxLength(50)
              .HasColumnName("login");
            entity.Property(e => e.Password)
              .HasMaxLength(50)
              .HasColumnName("password");

            entity.HasOne(d => d.LanguageCodeNavigation).WithMany(p => p.Users)
              .HasForeignKey(d => d.LanguageCode)
              .OnDelete(DeleteBehavior.ClientSetNull)
              .HasConstraintName("FK__user__language_c__2B7F66B9");

            entity.HasOne(d => d.LastUser).WithMany(p => p.InverseLastUser)
              .HasForeignKey(d => d.LastUserId)
              .HasConstraintName("FK__user__last_user___2C738AF2");
        });

    }
}

using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace CapaDatos.contactoModel;

public partial class ContactoContext : DbContext
{
    public ContactoContext()
    {
    }

    public ContactoContext(DbContextOptions<ContactoContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Contacto> Contactos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=DESKTOP-MSP0BO0;Database=contactsssss;Integrated Security=true;Encrypt=false;TrustServerCertificate=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Contacto>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Contacto__3214EC073703FCE4");

            entity.ToTable("Contacto");

            entity.Property(e => e.Direccion)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.Mail)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.Nombre)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.Telefono)
                .HasMaxLength(255)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}

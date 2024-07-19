using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace CapaDatos.cuentaModel;

public partial class CuentaContext : DbContext
{
    public CuentaContext()
    {
    }

    public CuentaContext(DbContextOptions<CuentaContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Cuentum> Cuenta { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Cuentum>(entity =>
        {
            entity.HasKey(e => e.Mail).HasName("PK__Cuenta__2724B2D05E8A75DD");

            entity.Property(e => e.Mail)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.Pass)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.UserName)
                .HasMaxLength(255)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}

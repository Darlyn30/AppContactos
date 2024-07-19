using CapaDatos.contactoModel;
using CapaDatos.cuentaModel;
using CapaLogica.Clases;
using CapaLogica.Interfaces;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var con1 = builder.Configuration.GetConnectionString("AppConnection1");
builder.Services.AddDbContext<CuentaContext>(x => x.UseSqlServer(con1));
builder.Services.AddScoped<ICuentas,  CuentaLogica>();

var con2 = builder.Configuration.GetConnectionString("AppConnection2");
builder.Services.AddDbContext<ContactoContext>(y => y.UseSqlServer(con2));
builder.Services.AddScoped<IContacto, ContactoLogica>();




var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors(policy =>
{
    policy.AllowAnyHeader();
    policy.AllowAnyMethod();
    policy.AllowAnyOrigin();
});

app.MapControllers();

app.Run();

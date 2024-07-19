using System;
using System.Collections.Generic;

namespace CapaDatos.contactoModel;

public partial class Contacto
{
    public int Id { get; set; }

    public string? Telefono { get; set; }

    public string? Nombre { get; set; }

    public string? Mail { get; set; }

    public string? Direccion { get; set; }
}

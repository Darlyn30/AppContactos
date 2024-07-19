using CapaDatos.contactoModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaLogica.Interfaces
{
    public interface IContacto
    {
        // 4 metodos del CRUD

        List<Contacto> GetContactos();
        string SetContacto(Contacto model);
        string UpdateContacto(Contacto model);
        string DeleteContacto(int Id);
    }
}

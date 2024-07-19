using CapaDatos.contactoModel;
using CapaLogica.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaLogica.Clases
{
    public class ContactoLogica : IContacto
    {
        private ContactoContext dbContext;

        public ContactoLogica(ContactoContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public List<Contacto> GetContactos()
        {
            var result = dbContext.Contactos.ToList();
            return result;
        }

        public string SetContacto(Contacto model)
        {
            dbContext.Contactos.Add(model);
            dbContext.SaveChanges();
            Console.WriteLine("Request success!");
            return "Contacto guardado correctamente";
        }

        public string UpdateContacto(Contacto model)
        {
            dbContext.Entry(model).State = EntityState.Modified; // lo que esta dentro segun lo que elijas, lo modificas
            dbContext.SaveChanges(); // siempre necesitamos un savechanges para que se guarden los cambios en la db
            return "Contacto actualizado correctamente";
        }
        public string DeleteContacto(int Id)
        {
            var registro = dbContext.Contactos.Find(Id);
            dbContext.Contactos.Remove(registro!);
            dbContext.SaveChanges();
            return "registro eliminado correctamente";
        }


    }
}

using CapaDatos.contactoModel;
using CapaLogica.Interfaces;

namespace API_capas_App12.Services
{
    public class ContactoServices
    {
        IContacto _contacto;

        public ContactoServices(IContacto contacto)
        {
            _contacto = contacto;
        }

        public List<Contacto> GetContactos()
        {
            var result = _contacto.GetContactos();
            return result;
        }

        public void setContacto(Contacto model)
        {
            _contacto.SetContacto(model);
        }

        public void updateContacto(Contacto model)
        {
            _contacto.UpdateContacto(model);
        }

        public void deleteContacto(int Id)
        {
            _contacto.DeleteContacto(Id);
        }
    }
}

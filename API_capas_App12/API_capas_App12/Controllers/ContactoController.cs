using API_capas_App12.Services;
using CapaDatos.contactoModel;
using CapaLogica.Clases;
using CapaLogica.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API_capas_App12.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactoController : ControllerBase
    {
        ContactoServices service;
        IContacto _contacto;

        public ContactoController(IContacto contacto)
        {
            _contacto = contacto;
            service = new ContactoServices(_contacto);
        }

        [HttpGet]

        public IActionResult getContacto()
        {
            var result = service.GetContactos();
            return Ok(result);
        }

        [HttpPost]

        public void setContacto(Contacto model)
        {
            service.setContacto(model);
        }

        [HttpPut]
        public void putContacto(Contacto model)
        {
            service.updateContacto(model);
        }

        [HttpDelete]

        public void deleteContacto(int Id)
        {
            service.deleteContacto(Id);
        }
    }
}

using API_capas_App12.Services;
using CapaDatos.cuentaModel;
using CapaLogica.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API_capas_App12.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CuentasController : ControllerBase
    {
        CuentasServices services;
        ICuentas cuentas;
        public CuentasController(ICuentas cuentas)
        {
            this.cuentas = cuentas;
            services = new CuentasServices(cuentas);
        }

        [HttpGet]

        public IActionResult getCuentas()
        {
            var result = services.GetCuenta();
            return Ok(result);
        }

        [HttpPost]

        public void setCuentas(Cuentum model)
        {
            services.SetCuenta(model);
        }
    }
}

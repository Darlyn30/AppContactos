using CapaDatos.cuentaModel;
using CapaLogica.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace API_capas_App12.Services
{
    public class CuentasServices
    {
        
        ICuentas _cuentas;

        public CuentasServices(ICuentas _cuentas)
        {
            this._cuentas = _cuentas;
        }

        public List<Cuentum> GetCuenta()
        {
            var result = _cuentas.GetCuenta();
            return result;
        }

        public void SetCuenta(Cuentum model)
        {
            _cuentas.SetCuentas(model);

        }
    }
}

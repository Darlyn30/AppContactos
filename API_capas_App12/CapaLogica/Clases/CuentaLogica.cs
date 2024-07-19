using CapaDatos.cuentaModel;
using CapaLogica.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaLogica.Clases
{
    public class CuentaLogica : ICuentas
    {
        CuentaContext dbContext;

        public CuentaLogica(CuentaContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public List<Cuentum> GetCuenta()
        {
            var result = dbContext.Cuenta.ToList();
            return result;
        }

        public void SetCuentas(Cuentum model)
        {
            dbContext.Add(model);
            dbContext.SaveChanges();
        }
    }
}

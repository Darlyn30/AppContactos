using CapaDatos.cuentaModel;
using Microsoft.Extensions.Logging.Abstractions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaLogica.Interfaces
{
    public interface ICuentas
    {
        //aqui tendremos 2 metodos
        List<Cuentum> GetCuenta();
        void SetCuentas(Cuentum model);
    }
}

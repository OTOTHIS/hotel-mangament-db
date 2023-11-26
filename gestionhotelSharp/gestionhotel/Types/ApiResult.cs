using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace gestionhotel.Types
{
    public class ApiResult
    {
        public bool IsSuccess { get; set; }
        public string ResponseContent { get; set; }
        public string ErrorMessage { get; set; }
    }
}

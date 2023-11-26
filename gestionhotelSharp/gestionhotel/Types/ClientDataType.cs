using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace gestionhotel.Types
{
    internal class ClientDataContainer
    {
        public List<ClientDataType> Results { get; set; }
    }

    internal class ClientDataType
    {
     
            public string _id { get; set; }
            public string cin { get; set; }
            public string passport { get; set; }
            public string civilite { get; set; }
            public string Nom { get; set; }
            public string Prenom { get; set; }
            public string email { get; set; }
            public string situation { get; set; }
            public string paye { get; set; }
            public string ville { get; set; }
            public string addresse { get; set; }
            public string telephone { get; set; }
            public DateTime createdAt { get; set; }
            public DateTime updatedAt { get; set; }
      

    }
}

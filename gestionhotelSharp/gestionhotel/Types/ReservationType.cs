using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.Json.Serialization;


namespace gestionhotel.Types
{
    internal class ReservationType
    {
        public string _id { get; set; }
        public string Client { get; set; }
       
        public NumeroType numero { get; set; }
        public string Type { get; set; }
        public string Formuls { get; set; }
        public int NbrNuit { get; set; }
        public DateTime Debut { get; set; }
        public DateTime Fin { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    
    }

    internal class NumeroType
    {
        public int numero { get; set; }
    }
}

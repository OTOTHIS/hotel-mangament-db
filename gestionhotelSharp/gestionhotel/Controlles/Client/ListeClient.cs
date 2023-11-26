using gestionhotel.Components;
using gestionhotel.Types;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Newtonsoft.Json;
using gestionhotel.ApiHelper;

namespace gestionhotel.Controlles.Client
{
    public partial class ListeClient : UserControl
    {
        public ListeClient()
        {
            InitializeComponent();
        }



        private async void ListeClient_Load(object sender, EventArgs e)
        {
            string apiUrl = "client?fields=_id,telephone,email,paye,Nom,Prenom,cin";

            List<ClientDataType> userList = await HttpReqHelper.GetData<ClientDataType>(apiUrl);

            foreach (var item in userList)
            {
                string name = $"{item.Nom} {item.Prenom}";

                CardClient CardClient = new CardClient(item._id);
                CardClient.CardClientDesing(item.telephone, item.cin, item.email, name, flowLayoutPanel1); 
            }
        }


        private void flowLayoutPanel1_Paint(object sender, PaintEventArgs e)
        {

        }
    }
}

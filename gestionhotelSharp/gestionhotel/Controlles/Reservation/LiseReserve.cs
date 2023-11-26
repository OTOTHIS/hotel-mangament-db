using gestionhotel.ApiHelper;
using gestionhotel.Types;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

using Bunifu.UI.WinForms;


namespace gestionhotel.Controlles.Reservation
{
    public partial class LiseReserve : UserControl
    {
        public LiseReserve()
        {
            InitializeComponent();
        }
        private void SetupDataGridViewColumns()
        {
            // Add columns to the DataGridView
            bunifuDataGridView1.Columns.Add("Id", "Id");
            bunifuDataGridView1.Columns.Add("Client", "Client");
            bunifuDataGridView1.Columns.Add("Numero", "Numero");
            bunifuDataGridView1.Columns.Add("Type", "Type");
            bunifuDataGridView1.Columns.Add("Formuls", "Formuls");
            bunifuDataGridView1.Columns.Add("NbrNuit", "NbrNuit");
            bunifuDataGridView1.Columns.Add("Debut", "Debut");
            bunifuDataGridView1.Columns.Add("Fin", "Fin");
            bunifuDataGridView1.Columns.Add("CreatedAt", "CreatedAt");
            bunifuDataGridView1.Columns.Add("UpdatedAt", "UpdatedAt");

            // Adjust column properties as needed
            // Example: bunifuDataGridView1.Columns["Id"].Visible = false;
        }



        private async void LiseReserve_Load(object sender, EventArgs e)
        {
            string apiUrl = "reservation";

            List<ReservationType> reservationList = await HttpReqHelper.GetData<ReservationType>(apiUrl);



            SetupDataGridViewColumns();

            foreach (var reservation in reservationList)
            {
                // Assuming you have columns named "Id", "Client", "Numero", "Type", etc.
                bunifuDataGridView1.Rows.Add(
                    reservation._id,
                    reservation.Client,
                    reservation.numero.numero, // Assuming Numero is of type NumeroType
                    reservation.Type,
                    reservation.Formuls,
                    reservation.NbrNuit,
                    reservation.Debut,
                    reservation.Fin,
                    reservation.CreatedAt,
                    reservation.UpdatedAt
                );
            }



        }
    }
}

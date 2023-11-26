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
using static System.Net.Mime.MediaTypeNames;

namespace gestionhotel.Controlles.Reservation
{
    public partial class FormulaireReservation : UserControl
    {
        public FormulaireReservation()
        {
            InitializeComponent();
        }

        private void ClearAllFields()
        {
            ciintxt.Text = "";
            typetxt.Text = "";
            formuletxt.Text = "";
            debuttxt.Text = "";
            fintxt.Text = "";
            nbrchambretxt.Text = "";
            nbrnuittxt.Text = "";
        }



        /*  static string ConvertDateFormat(string inputDate)
          {
              // Parse the input date string
              if (DateTime.TryParse(inputDate, out DateTime parsedDate))
              {
                  // Format the date in the desired format
                  DateTime outputDate = new DateTime(
                      parsedDate.Year,
                      parsedDate.Month,
                      parsedDate.Day + 1, // Add one day
                      15, // Hours
                      25, // Minutes
                      0,  // Seconds
                      0   // Milliseconds
                  );

                  // Return the formatted date string in ISO 8601 format
                  return outputDate.ToString("yyyy-MM-ddTHH:mm:ssZ");
              }
              else
              {
                  throw new ArgumentException("Invalid date format");
              }
          }

          */

        static string ConvertDateFormatForMongoDB(string inputDate)
        {
            // Parse the input date string
            if (DateTime.TryParse(inputDate, out DateTime parsedDate))
            {
                // Format the date in the desired format for MongoDB
                string formattedDate = parsedDate.AddMinutes(25).ToString("yyyy-MM-ddTHH:mm:ss.fffZ");

                // Return the formatted date string
                return formattedDate;
            }
            else
            {
                throw new ArgumentException("Invalid date format");
            }
        }



        private async void ajoutereservbtn_Click(object sender, EventArgs e)
        {
          
           

            if (string.IsNullOrEmpty(ciintxt.Text) ||
            string.IsNullOrEmpty(typetxt.Text) ||
            string.IsNullOrEmpty(formuletxt.Text) ||
            string.IsNullOrEmpty(debuttxt.Text) ||
            string.IsNullOrEmpty(fintxt.Text) ||
            string.IsNullOrEmpty(nbrchambretxt.Text) ||
            string.IsNullOrEmpty(nbrnuittxt.Text)
            )
            {
                MessageBox.Show("all champs in important");
            }
            else
            {
                int numNuit = int.Parse(nbrnuittxt.Text);
                int numChamb = int.Parse(nbrchambretxt.Text);
              
                    var requestData = new
                    {
                        client = ciintxt.Text,
                        numero = numChamb,
                        type = typetxt.Text,
                        formuls = formuletxt.Text,
                        debut = ConvertDateFormatForMongoDB(debuttxt.Text),
                        fin = ConvertDateFormatForMongoDB(fintxt.Text),
                        nbrNuit = numNuit,
                    };

                ApiResult apiResult = await HttpReqHelper.PostData(requestData, "reservation");

                if (apiResult.IsSuccess)
                {
                    // Clear all the fields after processing
                    ClearAllFields();
                }
                else
                {
                    MessageBox.Show($"Error: {apiResult.ErrorMessage}", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                }


            }







        }
    }
}

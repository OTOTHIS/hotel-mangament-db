
using Newtonsoft.Json;
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

namespace gestionhotel
{
    public partial class FormulaireClient : UserControl
    {
        public FormulaireClient()
        {
            InitializeComponent();
        }

        string Api = Properties.Settings.Default.role;


      private async void  getCountries()
        {
            string apiUrl = "https://countriesnow.space/api/v0.1/countries";
            // Creating an instance of HttpClient
            using (HttpClient httpClient = new HttpClient())
            {
                try
                {
                    HttpResponseMessage response = await httpClient.GetAsync(apiUrl);
                    if (response.IsSuccessStatusCode)
                    {

                        string responseData = await response.Content.ReadAsStringAsync();


                        dynamic apiResponse = JsonConvert.DeserializeObject(responseData);


                        if (apiResponse.error == true)
                        {
                            Console.WriteLine($"API Error: {apiResponse.msg}");
                        }
                        else
                        {
                            foreach (var country in apiResponse.data)
                            {
                                payDropTxt.Items.Add(country.country);
                            }

                            payDropTxt.AutoCompleteMode = AutoCompleteMode.Suggest;
                            payDropTxt.AutoCompleteSource = AutoCompleteSource.ListItems;
                        }
                    }
                    else
                    {
                        // Printing an error message if the request was not successful
                        Console.WriteLine($"Error: {response.StatusCode} - {response.ReasonPhrase}");
                    }
                }
                catch (Exception ex)
                {
                    // Handling exceptions, if any
                    Console.WriteLine("Exception: " + ex.Message);
                }
            }
        }


        private async void FormulaireClient_Load(object sender, EventArgs e)
        {


            getCountries();


         


           



        }

        private async void addClient_Click(object sender, EventArgs e)
        {


   
        }

        private async void ajoutereservbtn_Click(object sender, EventArgs e)
        {


            if (string.IsNullOrEmpty(payDropTxt.Text) ||
     string.IsNullOrEmpty(cintxt.Text) ||
     string.IsNullOrEmpty(civiliteDropTxt.Text) ||
     string.IsNullOrEmpty(nomtxt.Text) ||
     string.IsNullOrEmpty(prenoTxt.Text) ||
     string.IsNullOrEmpty(emailTxt.Text) ||
     string.IsNullOrEmpty(situationTxt.Text) ||
     string.IsNullOrEmpty(vileTxt.Text) ||
     string.IsNullOrEmpty(adresseTxt.Text) ||
     string.IsNullOrEmpty(TelTxt.Text))
            {
                // Handle the case where any of the required fields is null or empty
                MessageBox.Show("All this chammps is required.");
            }
            else
            {

                var requestData = new
                {
                    cin = cintxt.Text,
                    passport = passportTxt.Text,
                    civilite = civiliteDropTxt.Text,
                    Nom = nomtxt.Text,
                    Prenom = prenoTxt.Text,
                    email = emailTxt.Text,
                    situation = situationTxt.Text,
                    paye = payDropTxt.Text,
                    ville = vileTxt.Text,
                    addresse = adresseTxt.Text,
                    telephone = TelTxt.Text,

                };


              /*  bool isSucces = await HttpReqHelper.PostData(requestData, "client");

                if (isSucces)
                {
                    // Clear all the fields after processing
                    payDropTxt.Text = "";
                    cintxt.Text = "";
                    passportTxt.Text = "";
                    civiliteDropTxt.Text = "";
                    nomtxt.Text = "";
                    prenoTxt.Text = "";
                    emailTxt.Text = "";
                    situationTxt.Text = "";
                    vileTxt.Text = "";
                    adresseTxt.Text = "";
                    TelTxt.Text = "";
                }
                else
                {
                    MessageBox.Show("An error occurred. Please try again.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                }

                */
            }
        }
    }
}

  

    
 



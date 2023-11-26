using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO.IsolatedStorage;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using gestionhotel.Controlles.Client;
using gestionhotel.Controlles.Reservation;

namespace gestionhotel
{
    public partial class Form1 : Form
    {
        bool sidebarExpand;
        bool clientCollapsed;

        string role = Properties.Settings.Default.role;

        public Form1()
        {
            InitializeComponent();
        }

        private void addUserControl(UserControl userControl)
        {
            userControl.Dock = DockStyle.Fill;
            wrapper.Controls.Clear();
            wrapper.Controls.Add(userControl);
        }

        /* private void bunifuButton21_Click(object sender, EventArgs e)
         {
             dashboard uc = new dashboard();
             addUserControl(uc);

         }
        */

 



        private void Form1_Load(object sender, EventArgs e)
        {

            clientcontainer.BringToFront();


           

          role = "assadi";


            if (role == "assadi")
            {

                dashboard uc = new dashboard();
                addUserControl(uc);
            }else
            {
                MessageBox.Show("not connected");
            }
         
        }

        private void formContainer_Click(object sender, EventArgs e)
        {
           
        }

        private void sidebarTimer_Tick(object sender, EventArgs e)
        {

            if (sidebarExpand)
            {
                sidebar.Width -= 10;
                if(sidebar.Width==sidebar.MinimumSize.Width)
                {
                    sidebarExpand = false;
                    sidebarTimer.Stop();
                }
             }
            else
            {
                sidebar.Width += 10;
                if (sidebar.Width == sidebar.MaximumSize.Width)
                {
                    sidebarExpand = true;
                    sidebarTimer.Stop();
                }
            }

        }

        private void pictureBox2_Click(object sender, EventArgs e)
        {
            sidebarTimer.Start();
        }

        private void clientTimer_Tick(object sender, EventArgs e)
        {
            if(clientCollapsed)
            {
                clientcontainer.Height += 20;
                if (clientcontainer.Height==clientcontainer.MaximumSize.Height)
                {
                    clientCollapsed = false;
                    clientTimer.Stop();
                }
            }
            else
            {
                clientcontainer.Height -= 20;
                if (clientcontainer.Height == clientcontainer.MinimumSize.Height)
                {
                    clientCollapsed = true;
                    clientTimer.Stop();
                }
            }
        }

        private void clientBtn_Click(object sender, EventArgs e)
        {
     
            clientTimer.Start();
        }

        private void dashbtn_Click(object sender, EventArgs e)
        {
            dashboard uc = new dashboard();
            addUserControl(uc);
        }

        private void bunifuButton211_Click(object sender, EventArgs e)
        {
            FormulaireClient uc = new FormulaireClient();
            addUserControl(uc);
        }

        private void bunifuButton210_Click(object sender, EventArgs e)
        {
            ListeClient uc = new ListeClient();
            addUserControl(uc);
        }




        private void bunifuButton21_Click(object sender, EventArgs e)
        {
            FormulaireReservation uc = new FormulaireReservation ();
            addUserControl(uc);
        }

        private void wrapper_Click(object sender, EventArgs e)
        {

        }

        private void facteurBtn_Click(object sender, EventArgs e)
        {
            LiseReserve uc = new LiseReserve();
            addUserControl(uc);
        }

        private void bunifuFormCaptionButton1_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void CenterFormOnScreen()
        {
            // Calculate the center position
            int screenWidth = Screen.PrimaryScreen.WorkingArea.Width;
            int screenHeight = Screen.PrimaryScreen.WorkingArea.Height;
            int formWidth = this.Width;
            int formHeight = this.Height;

            int centerX = (screenWidth - formWidth) / 2;
            int centerY = (screenHeight - formHeight) / 2;

            // Set the form's location to the calculated center position
            this.Location = new Point(centerX, centerY);
        }



        private void bunifuFormCaptionButton2_Click_1(object sender, EventArgs e)
        {
            if (this.WindowState == FormWindowState.Maximized)
            {
                this.WindowState = FormWindowState.Normal;
            
            }
            else if (this.WindowState == FormWindowState.Normal) {
                this.WindowState = FormWindowState.Maximized;
              


            }
            CenterFormOnScreen();


        }

        private void bunifuFormCaptionButton3_Click(object sender, EventArgs e)
        {
            this.WindowState = FormWindowState.Minimized;
        }

        private void sidebar_Paint(object sender, PaintEventArgs e)
        {

        }
    }
}

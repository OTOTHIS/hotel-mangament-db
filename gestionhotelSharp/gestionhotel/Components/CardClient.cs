using Bunifu.UI.WinForms;
using Bunifu.UI.WinForms.BunifuButton;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Runtime.Remoting.Contexts;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static Bunifu.UI.WinForms.BunifuButton.BunifuButton;

namespace gestionhotel.Components
{
    internal class CardClient
    {


        public string Id { get; private set; }

        public CardClient(string mongoId)
        {
            Id = mongoId;
        }



        public  void CardClientDesing(string num , string name , string email , string cin ,    FlowLayoutPanel flowLayoutPanel)
        {
          

             BunifuPanel bunifuPanel1 = new BunifuPanel();
            BunifuLabel label1 = new BunifuLabel();
            BunifuLabel label2 = new BunifuLabel();
            BunifuLabel label3 = new BunifuLabel();
            BunifuLabel label4 = new BunifuLabel();
            BunifuButton2 dashbtn = new BunifuButton2();
            BunifuButton2.BorderEdges borderEdges1 = new BunifuButton2.BorderEdges();

            // 
            // bunifuPanel1
            // 
            bunifuPanel1.BackgroundColor = System.Drawing.Color.FromArgb(((int)(((byte)(76)))), ((int)(((byte)(75)))), ((int)(((byte)(105)))));
            bunifuPanel1.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            bunifuPanel1.BorderColor = System.Drawing.Color.Transparent;
            bunifuPanel1.BorderRadius = 10;
            bunifuPanel1.BorderThickness = 1;
            bunifuPanel1.Controls.Add(dashbtn);
            bunifuPanel1.Controls.Add(label4);
            bunifuPanel1.Controls.Add(label3);
            bunifuPanel1.Controls.Add(label1);
            bunifuPanel1.Controls.Add(label2);
            bunifuPanel1.Location = new System.Drawing.Point(46, 31);
            bunifuPanel1.Name = "bunifuPanel1";
            bunifuPanel1.ShowBorders = true;
            bunifuPanel1.Size = new System.Drawing.Size(210, 194);
            bunifuPanel1.TabIndex = 0;
            // 
            // label2
            // 
            label2.AutoSize = true;
            label2.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(76)))), ((int)(((byte)(75)))), ((int)(((byte)(105)))));
            label2.Font = new System.Drawing.Font("Century Gothic", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            label2.ForeColor = System.Drawing.Color.White;
            label2.Location = new System.Drawing.Point(12, 103);
            label2.Name = "label2";
            label2.Size = new System.Drawing.Size(78, 17);
            label2.TabIndex = 8;
            label2.Text = num;
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(76)))), ((int)(((byte)(75)))), ((int)(((byte)(105)))));
            label1.Font = new System.Drawing.Font("Century Gothic", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            label1.ForeColor = System.Drawing.Color.White;
            label1.Location = new System.Drawing.Point(12, 72);
            label1.Name = "label1";
            label1.Size = new System.Drawing.Size(186, 17);
            label1.TabIndex = 9;
            label1.Text = email;
            // 
            // label3
            // 
            label3.AutoSize = true;
            label3.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(76)))), ((int)(((byte)(75)))), ((int)(((byte)(105)))));
            label3.Font = new System.Drawing.Font("Century Gothic", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            label3.ForeColor = System.Drawing.Color.White;
            label3.Location = new System.Drawing.Point(12, 135);
            label3.Name = "label3";
            label3.Size = new System.Drawing.Size(66, 17);
            label3.TabIndex = 10;
            label3.Text = cin;
            // 
            // label4
            // 
            label4.AutoSize = true;
            label4.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(76)))), ((int)(((byte)(75)))), ((int)(((byte)(105)))));
            label4.Font = new System.Drawing.Font("Century Gothic", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            label4.ForeColor = System.Drawing.Color.White;
            label4.Location = new System.Drawing.Point(12, 37);
            label4.Name = "label4";
            label4.Size = new System.Drawing.Size(99, 17);
            label4.TabIndex = 11;
            label4.Text = name;
            // 
            // dashbtn
            // 
            dashbtn.AllowAnimations = true;
            dashbtn.AllowMouseEffects = true;
            dashbtn.AllowToggling = false;
            dashbtn.AnimationSpeed = 200;
            dashbtn.AutoGenerateColors = false;
            dashbtn.AutoRoundBorders = false;
            dashbtn.AutoSizeLeftIcon = true;
            dashbtn.AutoSizeRightIcon = true;
            dashbtn.BackColor = System.Drawing.Color.Transparent;
            dashbtn.BackColor1 = System.Drawing.Color.FromArgb(((int)(((byte)(50)))), ((int)(((byte)(49)))), ((int)(((byte)(69)))));
            dashbtn.BorderStyle = Bunifu.UI.WinForms.BunifuButton.BunifuButton2.BorderStyles.Solid;
            dashbtn.ButtonText = "View";
            dashbtn.ButtonTextMarginLeft = 0;
            dashbtn.ColorContrastOnClick = 45;
            dashbtn.ColorContrastOnHover = 45;
            dashbtn.Cursor = System.Windows.Forms.Cursors.Default;
            borderEdges1.BottomLeft = true;
            borderEdges1.BottomRight = true;
            borderEdges1.TopLeft = true;
            borderEdges1.TopRight = true;
            dashbtn.CustomizableEdges = borderEdges1;
            dashbtn.DialogResult = System.Windows.Forms.DialogResult.None;
            dashbtn.DisabledBorderColor = System.Drawing.Color.FromArgb(((int)(((byte)(191)))), ((int)(((byte)(191)))), ((int)(((byte)(191)))));
            dashbtn.DisabledFillColor = System.Drawing.Color.FromArgb(((int)(((byte)(204)))), ((int)(((byte)(204)))), ((int)(((byte)(204)))));
            dashbtn.DisabledForecolor = System.Drawing.Color.FromArgb(((int)(((byte)(168)))), ((int)(((byte)(160)))), ((int)(((byte)(168)))));
            dashbtn.FocusState = Bunifu.UI.WinForms.BunifuButton.BunifuButton2.ButtonStates.Pressed;
            dashbtn.Font = new System.Drawing.Font("Century Gothic", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            dashbtn.ForeColor = System.Drawing.Color.White;
            dashbtn.IconLeftAlign = System.Drawing.ContentAlignment.MiddleLeft;
            dashbtn.IconLeftCursor = System.Windows.Forms.Cursors.Default;
            dashbtn.IconLeftPadding = new System.Windows.Forms.Padding(11, 3, 3, 3);
            dashbtn.IconMarginLeft = 11;
            dashbtn.IconPadding = 7;
            dashbtn.IconRightAlign = System.Drawing.ContentAlignment.MiddleCenter;
            dashbtn.IconRightCursor = System.Windows.Forms.Cursors.Default;
            dashbtn.IconRightPadding = new System.Windows.Forms.Padding(3, 3, 7, 3);
            dashbtn.IconSize = 25;
            dashbtn.IdleBorderColor = System.Drawing.Color.FromArgb(((int)(((byte)(50)))), ((int)(((byte)(49)))), ((int)(((byte)(69)))));
            dashbtn.IdleBorderRadius = 10;
            dashbtn.IdleBorderThickness = 1;
            dashbtn.IdleFillColor = System.Drawing.Color.FromArgb(((int)(((byte)(50)))), ((int)(((byte)(49)))), ((int)(((byte)(69)))));
            dashbtn.IdleIconLeftImage = null;
            dashbtn.IdleIconRightImage = null;
            dashbtn.ImeMode = System.Windows.Forms.ImeMode.NoControl;
            dashbtn.IndicateFocus = false;
            dashbtn.Location = new System.Drawing.Point(144, 150);
            dashbtn.Name = "dashbtn";
            dashbtn.OnDisabledState.BorderColor = System.Drawing.Color.FromArgb(((int)(((byte)(191)))), ((int)(((byte)(191)))), ((int)(((byte)(191)))));
            dashbtn.OnDisabledState.BorderRadius = 10;
            dashbtn.OnDisabledState.BorderStyle = Bunifu.UI.WinForms.BunifuButton.BunifuButton2.BorderStyles.Solid;
            dashbtn.OnDisabledState.BorderThickness = 1;
            dashbtn.OnDisabledState.FillColor = System.Drawing.Color.FromArgb(((int)(((byte)(204)))), ((int)(((byte)(204)))), ((int)(((byte)(204)))));
            dashbtn.OnDisabledState.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(168)))), ((int)(((byte)(160)))), ((int)(((byte)(168)))));
            dashbtn.OnDisabledState.IconLeftImage = null;
            dashbtn.OnDisabledState.IconRightImage = null;
            dashbtn.onHoverState.BorderColor = System.Drawing.Color.FromArgb(((int)(((byte)(105)))), ((int)(((byte)(181)))), ((int)(((byte)(255)))));
            dashbtn.onHoverState.BorderRadius = 10;
            dashbtn.onHoverState.BorderStyle = Bunifu.UI.WinForms.BunifuButton.BunifuButton2.BorderStyles.Solid;
            dashbtn.onHoverState.BorderThickness = 1;
            dashbtn.onHoverState.FillColor = System.Drawing.Color.FromArgb(((int)(((byte)(105)))), ((int)(((byte)(181)))), ((int)(((byte)(255)))));
            dashbtn.onHoverState.ForeColor = System.Drawing.Color.White;
            dashbtn.onHoverState.IconLeftImage = null;
            dashbtn.onHoverState.IconRightImage = null;
            dashbtn.OnIdleState.BorderColor = System.Drawing.Color.FromArgb(((int)(((byte)(50)))), ((int)(((byte)(49)))), ((int)(((byte)(69)))));
            dashbtn.OnIdleState.BorderRadius = 10;
            dashbtn.OnIdleState.BorderStyle = Bunifu.UI.WinForms.BunifuButton.BunifuButton2.BorderStyles.Solid;
            dashbtn.OnIdleState.BorderThickness = 1;
            dashbtn.OnIdleState.FillColor = System.Drawing.Color.FromArgb(((int)(((byte)(50)))), ((int)(((byte)(49)))), ((int)(((byte)(69)))));
            dashbtn.OnIdleState.ForeColor = System.Drawing.Color.White;
            dashbtn.OnIdleState.IconLeftImage = null;
            dashbtn.OnIdleState.IconRightImage = null;
            dashbtn.OnPressedState.BorderColor = System.Drawing.Color.FromArgb(((int)(((byte)(40)))), ((int)(((byte)(96)))), ((int)(((byte)(144)))));
            dashbtn.OnPressedState.BorderRadius = 10;
            dashbtn.OnPressedState.BorderStyle = Bunifu.UI.WinForms.BunifuButton.BunifuButton2.BorderStyles.Solid;
            dashbtn.OnPressedState.BorderThickness = 1;
            dashbtn.OnPressedState.FillColor = System.Drawing.Color.FromArgb(((int)(((byte)(40)))), ((int)(((byte)(96)))), ((int)(((byte)(144)))));
            dashbtn.OnPressedState.ForeColor = System.Drawing.Color.White;
            dashbtn.OnPressedState.IconLeftImage = null;
            dashbtn.OnPressedState.IconRightImage = null;
            dashbtn.Size = new System.Drawing.Size(54, 31);
            dashbtn.TabIndex = 4;
            dashbtn.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            dashbtn.TextAlignment = System.Windows.Forms.HorizontalAlignment.Center;
            dashbtn.TextMarginLeft = 0;
            dashbtn.TextPadding = new System.Windows.Forms.Padding(0);
            dashbtn.UseDefaultRadiusAndThickness = true;
            dashbtn.Click += new System.EventHandler(CustomButtonClick);


            flowLayoutPanel.Controls.Add(bunifuPanel1);

        }

        private void CustomButtonClick(object sender, EventArgs e)
        {
            MessageBox.Show(this.Id);

        }

    }
}

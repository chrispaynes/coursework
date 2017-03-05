<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()>
Partial Class GradeBook
    Inherits System.Windows.Forms.Form

    'Form overrides dispose to clean up the component list.
    <System.Diagnostics.DebuggerNonUserCode()>
    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        Try
            If disposing AndAlso components IsNot Nothing Then
                components.Dispose()
            End If
        Finally
            MyBase.Dispose(disposing)
        End Try
    End Sub

    'Required by the Windows Form Designer
    Private components As System.ComponentModel.IContainer

    'NOTE: The following procedure is required by the Windows Form Designer
    'It can be modified using the Windows Form Designer.  
    'Do not modify it using the code editor.
    <System.Diagnostics.DebuggerStepThrough()>
    Private Sub InitializeComponent()
        Me.components = New System.ComponentModel.Container()
        Me.Label1 = New System.Windows.Forms.Label()
        Me.Label2 = New System.Windows.Forms.Label()
        Me.Label3 = New System.Windows.Forms.Label()
        Me.Label4 = New System.Windows.Forms.Label()
        Me.Panel1 = New System.Windows.Forms.Panel()
        Me.studentSelection = New System.Windows.Forms.ListBox()
        Me.courseSelection = New System.Windows.Forms.ListBox()
        Me.viewGradesButton = New System.Windows.Forms.Button()
        Me.Label5 = New System.Windows.Forms.Label()
        Me.Label6 = New System.Windows.Forms.Label()
        Me.Label7 = New System.Windows.Forms.Label()
        Me.submitButton = New System.Windows.Forms.Button()
        Me.earnedPoints = New System.Windows.Forms.TextBox()
        Me.potentialPoints = New System.Windows.Forms.TextBox()
        Me.GroupBox1 = New System.Windows.Forms.GroupBox()
        Me.RadioButton8 = New System.Windows.Forms.RadioButton()
        Me.RadioButton7 = New System.Windows.Forms.RadioButton()
        Me.RadioButton6 = New System.Windows.Forms.RadioButton()
        Me.RadioButton5 = New System.Windows.Forms.RadioButton()
        Me.RadioButton4 = New System.Windows.Forms.RadioButton()
        Me.RadioButton3 = New System.Windows.Forms.RadioButton()
        Me.Label9 = New System.Windows.Forms.Label()
        Me.onTime = New System.Windows.Forms.RadioButton()
        Me.RadioButton1 = New System.Windows.Forms.RadioButton()
        Me.Panel2 = New System.Windows.Forms.Panel()
        Me.Label8 = New System.Windows.Forms.Label()
        Me.Label10 = New System.Windows.Forms.Label()
        Me.ToolTip1 = New System.Windows.Forms.ToolTip(Me.components)
        Me.Panel1.SuspendLayout()
        Me.GroupBox1.SuspendLayout()
        Me.Panel2.SuspendLayout()
        Me.SuspendLayout()
        '
        'Label1
        '
        Me.Label1.AutoSize = True
        Me.Label1.Font = New System.Drawing.Font("Franklin Gothic Medium", 32.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.Label1.ForeColor = System.Drawing.Color.SteelBlue
        Me.Label1.Location = New System.Drawing.Point(119, 28)
        Me.Label1.Name = "Label1"
        Me.Label1.Size = New System.Drawing.Size(239, 50)
        Me.Label1.TabIndex = 0
        Me.Label1.Text = "Grade Book"
        '
        'Label2
        '
        Me.Label2.AutoSize = True
        Me.Label2.BackColor = System.Drawing.Color.SeaGreen
        Me.Label2.Font = New System.Drawing.Font("Microsoft Sans Serif", 10.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.Label2.ForeColor = System.Drawing.Color.White
        Me.Label2.Location = New System.Drawing.Point(41, 114)
        Me.Label2.Name = "Label2"
        Me.Label2.Size = New System.Drawing.Size(69, 17)
        Me.Label2.TabIndex = 1
        Me.Label2.Text = "Configure"
        '
        'Label3
        '
        Me.Label3.AutoSize = True
        Me.Label3.Font = New System.Drawing.Font("Segoe UI Semibold", 10.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.Label3.ForeColor = System.Drawing.Color.White
        Me.Label3.Location = New System.Drawing.Point(48, 25)
        Me.Label3.Name = "Label3"
        Me.Label3.Size = New System.Drawing.Size(103, 19)
        Me.Label3.TabIndex = 2
        Me.Label3.Text = "Which Course?"
        '
        'Label4
        '
        Me.Label4.AutoSize = True
        Me.Label4.Font = New System.Drawing.Font("Segoe UI Semibold", 10.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.Label4.ForeColor = System.Drawing.Color.White
        Me.Label4.Location = New System.Drawing.Point(217, 25)
        Me.Label4.Name = "Label4"
        Me.Label4.Size = New System.Drawing.Size(172, 19)
        Me.Label4.TabIndex = 3
        Me.Label4.Text = "Which Student is this for?"
        '
        'Panel1
        '
        Me.Panel1.BackColor = System.Drawing.Color.SteelBlue
        Me.Panel1.Controls.Add(Me.studentSelection)
        Me.Panel1.Controls.Add(Me.courseSelection)
        Me.Panel1.Controls.Add(Me.viewGradesButton)
        Me.Panel1.Controls.Add(Me.Label4)
        Me.Panel1.Controls.Add(Me.Label3)
        Me.Panel1.Location = New System.Drawing.Point(33, 122)
        Me.Panel1.Name = "Panel1"
        Me.Panel1.Padding = New System.Windows.Forms.Padding(4)
        Me.Panel1.Size = New System.Drawing.Size(402, 246)
        Me.Panel1.TabIndex = 4
        '
        'studentSelection
        '
        Me.studentSelection.BackColor = System.Drawing.SystemColors.ButtonFace
        Me.studentSelection.FormattingEnabled = True
        Me.studentSelection.Items.AddRange(New Object() {"0001 - Student1", "0002 - Student2", "0003 - Student3"})
        Me.studentSelection.Location = New System.Drawing.Point(220, 46)
        Me.studentSelection.Name = "studentSelection"
        Me.studentSelection.ScrollAlwaysVisible = True
        Me.studentSelection.Size = New System.Drawing.Size(150, 108)
        Me.studentSelection.TabIndex = 11
        '
        'courseSelection
        '
        Me.courseSelection.BackColor = System.Drawing.SystemColors.ButtonFace
        Me.courseSelection.FormattingEnabled = True
        Me.courseSelection.Items.AddRange(New Object() {"Art", "Biology", "Computer Programming", "English", "French", "Math", "Social Studies"})
        Me.courseSelection.Location = New System.Drawing.Point(24, 46)
        Me.courseSelection.Name = "courseSelection"
        Me.courseSelection.ScrollAlwaysVisible = True
        Me.courseSelection.Size = New System.Drawing.Size(150, 108)
        Me.courseSelection.TabIndex = 10
        '
        'viewGradesButton
        '
        Me.viewGradesButton.Font = New System.Drawing.Font("Segoe UI Semibold", 16.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.viewGradesButton.ForeColor = System.Drawing.Color.SteelBlue
        Me.viewGradesButton.Location = New System.Drawing.Point(24, 174)
        Me.viewGradesButton.Margin = New System.Windows.Forms.Padding(32)
        Me.viewGradesButton.Name = "viewGradesButton"
        Me.viewGradesButton.Padding = New System.Windows.Forms.Padding(4)
        Me.viewGradesButton.Size = New System.Drawing.Size(346, 53)
        Me.viewGradesButton.TabIndex = 9
        Me.viewGradesButton.Text = "View Student's Grades"
        Me.viewGradesButton.UseVisualStyleBackColor = True
        '
        'Label5
        '
        Me.Label5.AutoSize = True
        Me.Label5.Font = New System.Drawing.Font("Segoe UI Semibold", 10.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.Label5.ForeColor = System.Drawing.Color.White
        Me.Label5.Location = New System.Drawing.Point(86, 22)
        Me.Label5.Name = "Label5"
        Me.Label5.Size = New System.Drawing.Size(263, 19)
        Me.Label5.TabIndex = 5
        Me.Label5.Text = "How Many Points Did The Student Earn?"
        '
        'Label6
        '
        Me.Label6.AutoSize = True
        Me.Label6.Font = New System.Drawing.Font("Segoe UI Semibold", 10.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.Label6.ForeColor = System.Drawing.Color.White
        Me.Label6.Location = New System.Drawing.Point(87, 54)
        Me.Label6.Name = "Label6"
        Me.Label6.Size = New System.Drawing.Size(218, 19)
        Me.Label6.TabIndex = 6
        Me.Label6.Text = "How Many Points Were Possible?"
        '
        'Label7
        '
        Me.Label7.AutoSize = True
        Me.Label7.Location = New System.Drawing.Point(358, 298)
        Me.Label7.Name = "Label7"
        Me.Label7.Size = New System.Drawing.Size(0, 13)
        Me.Label7.TabIndex = 7
        '
        'submitButton
        '
        Me.submitButton.BackColor = System.Drawing.Color.Gray
        Me.submitButton.Font = New System.Drawing.Font("Franklin Gothic Medium", 20.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.submitButton.ForeColor = System.Drawing.SystemColors.Window
        Me.submitButton.Location = New System.Drawing.Point(33, 643)
        Me.submitButton.Margin = New System.Windows.Forms.Padding(8)
        Me.submitButton.Name = "submitButton"
        Me.submitButton.Size = New System.Drawing.Size(402, 110)
        Me.submitButton.TabIndex = 8
        Me.submitButton.Text = "Submit The Student's Grade"
        Me.submitButton.UseVisualStyleBackColor = False
        '
        'earnedPoints
        '
        Me.earnedPoints.Location = New System.Drawing.Point(33, 21)
        Me.earnedPoints.Name = "earnedPoints"
        Me.earnedPoints.Size = New System.Drawing.Size(38, 20)
        Me.earnedPoints.TabIndex = 12
        '
        'potentialPoints
        '
        Me.potentialPoints.Location = New System.Drawing.Point(33, 54)
        Me.potentialPoints.Name = "potentialPoints"
        Me.potentialPoints.Size = New System.Drawing.Size(38, 20)
        Me.potentialPoints.TabIndex = 13
        '
        'GroupBox1
        '
        Me.GroupBox1.Controls.Add(Me.RadioButton8)
        Me.GroupBox1.Controls.Add(Me.RadioButton7)
        Me.GroupBox1.Controls.Add(Me.RadioButton6)
        Me.GroupBox1.Controls.Add(Me.RadioButton5)
        Me.GroupBox1.Controls.Add(Me.RadioButton4)
        Me.GroupBox1.Controls.Add(Me.RadioButton3)
        Me.GroupBox1.Controls.Add(Me.Label9)
        Me.GroupBox1.Controls.Add(Me.onTime)
        Me.GroupBox1.Controls.Add(Me.RadioButton1)
        Me.GroupBox1.Location = New System.Drawing.Point(59, 521)
        Me.GroupBox1.Name = "GroupBox1"
        Me.GroupBox1.Size = New System.Drawing.Size(346, 76)
        Me.GroupBox1.TabIndex = 14
        Me.GroupBox1.TabStop = False
        Me.GroupBox1.Text = "GroupBox1"
        '
        'RadioButton8
        '
        Me.RadioButton8.AutoSize = True
        Me.RadioButton8.Location = New System.Drawing.Point(225, 30)
        Me.RadioButton8.Name = "RadioButton8"
        Me.RadioButton8.Size = New System.Drawing.Size(31, 17)
        Me.RadioButton8.TabIndex = 7
        Me.RadioButton8.Text = "5"
        Me.RadioButton8.UseVisualStyleBackColor = True
        '
        'RadioButton7
        '
        Me.RadioButton7.AutoSize = True
        Me.RadioButton7.Location = New System.Drawing.Point(306, 30)
        Me.RadioButton7.Name = "RadioButton7"
        Me.RadioButton7.Size = New System.Drawing.Size(31, 17)
        Me.RadioButton7.TabIndex = 6
        Me.RadioButton7.Text = "7"
        Me.RadioButton7.UseVisualStyleBackColor = True
        '
        'RadioButton6
        '
        Me.RadioButton6.AutoSize = True
        Me.RadioButton6.Location = New System.Drawing.Point(269, 30)
        Me.RadioButton6.Name = "RadioButton6"
        Me.RadioButton6.Size = New System.Drawing.Size(31, 17)
        Me.RadioButton6.TabIndex = 5
        Me.RadioButton6.Text = "6"
        Me.RadioButton6.UseVisualStyleBackColor = True
        '
        'RadioButton5
        '
        Me.RadioButton5.AutoSize = True
        Me.RadioButton5.Location = New System.Drawing.Point(188, 30)
        Me.RadioButton5.Name = "RadioButton5"
        Me.RadioButton5.Size = New System.Drawing.Size(31, 17)
        Me.RadioButton5.TabIndex = 4
        Me.RadioButton5.Text = "4"
        Me.RadioButton5.UseVisualStyleBackColor = True
        '
        'RadioButton4
        '
        Me.RadioButton4.AutoSize = True
        Me.RadioButton4.Location = New System.Drawing.Point(151, 30)
        Me.RadioButton4.Name = "RadioButton4"
        Me.RadioButton4.Size = New System.Drawing.Size(31, 17)
        Me.RadioButton4.TabIndex = 3
        Me.RadioButton4.Text = "3"
        Me.RadioButton4.UseVisualStyleBackColor = True
        '
        'RadioButton3
        '
        Me.RadioButton3.AutoSize = True
        Me.RadioButton3.Location = New System.Drawing.Point(118, 30)
        Me.RadioButton3.Name = "RadioButton3"
        Me.RadioButton3.Size = New System.Drawing.Size(31, 17)
        Me.RadioButton3.TabIndex = 2
        Me.RadioButton3.Text = "2"
        Me.RadioButton3.UseVisualStyleBackColor = True
        '
        'Label9
        '
        Me.Label9.AutoSize = True
        Me.Label9.Location = New System.Drawing.Point(77, 10)
        Me.Label9.Name = "Label9"
        Me.Label9.Size = New System.Drawing.Size(204, 13)
        Me.Label9.TabIndex = 0
        Me.Label9.Text = "The Student Submitted The Assignment..."
        '
        'onTime
        '
        Me.onTime.AutoSize = True
        Me.onTime.Checked = True
        Me.onTime.Location = New System.Drawing.Point(17, 30)
        Me.onTime.Name = "onTime"
        Me.onTime.Size = New System.Drawing.Size(65, 17)
        Me.onTime.TabIndex = 1
        Me.onTime.TabStop = True
        Me.onTime.Text = "On Time"
        Me.onTime.UseVisualStyleBackColor = True
        '
        'RadioButton1
        '
        Me.RadioButton1.AutoSize = True
        Me.RadioButton1.Location = New System.Drawing.Point(88, 30)
        Me.RadioButton1.Name = "RadioButton1"
        Me.RadioButton1.Size = New System.Drawing.Size(31, 17)
        Me.RadioButton1.TabIndex = 0
        Me.RadioButton1.Text = "1"
        Me.RadioButton1.UseVisualStyleBackColor = True
        '
        'Panel2
        '
        Me.Panel2.BackColor = System.Drawing.Color.SteelBlue
        Me.Panel2.Controls.Add(Me.Label5)
        Me.Panel2.Controls.Add(Me.earnedPoints)
        Me.Panel2.Controls.Add(Me.potentialPoints)
        Me.Panel2.Controls.Add(Me.Label6)
        Me.Panel2.Location = New System.Drawing.Point(33, 412)
        Me.Panel2.Name = "Panel2"
        Me.Panel2.Size = New System.Drawing.Size(402, 208)
        Me.Panel2.TabIndex = 17
        '
        'Label8
        '
        Me.Label8.AutoSize = True
        Me.Label8.Font = New System.Drawing.Font("Microsoft Sans Serif", 10.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.Label8.Location = New System.Drawing.Point(218, 390)
        Me.Label8.Name = "Label8"
        Me.Label8.Size = New System.Drawing.Size(0, 17)
        Me.Label8.TabIndex = 18
        '
        'Label10
        '
        Me.Label10.AutoSize = True
        Me.Label10.BackColor = System.Drawing.Color.SeaGreen
        Me.Label10.Font = New System.Drawing.Font("Microsoft Sans Serif", 10.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.Label10.ForeColor = System.Drawing.Color.White
        Me.Label10.Location = New System.Drawing.Point(41, 403)
        Me.Label10.Name = "Label10"
        Me.Label10.Size = New System.Drawing.Size(146, 17)
        Me.Label10.TabIndex = 19
        Me.Label10.Text = "Grade An Assignment"
        '
        'Form1
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(466, 765)
        Me.Controls.Add(Me.Label10)
        Me.Controls.Add(Me.Label8)
        Me.Controls.Add(Me.GroupBox1)
        Me.Controls.Add(Me.Label2)
        Me.Controls.Add(Me.Label1)
        Me.Controls.Add(Me.submitButton)
        Me.Controls.Add(Me.Label7)
        Me.Controls.Add(Me.Panel2)
        Me.Controls.Add(Me.Panel1)
        Me.Name = "Form1"
        Me.Text = "Form1"
        Me.Panel1.ResumeLayout(False)
        Me.Panel1.PerformLayout()
        Me.GroupBox1.ResumeLayout(False)
        Me.GroupBox1.PerformLayout()
        Me.Panel2.ResumeLayout(False)
        Me.Panel2.PerformLayout()
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents Label1 As Label
    Friend WithEvents Label2 As Label
    Friend WithEvents Label3 As Label
    Friend WithEvents Label4 As Label
    Friend WithEvents Panel1 As Panel
    Friend WithEvents Label5 As Label
    Friend WithEvents Label6 As Label
    Friend WithEvents Label7 As Label
    Friend WithEvents submitButton As Button
    Friend WithEvents viewGradesButton As Button
    Friend WithEvents earnedPoints As TextBox
    Friend WithEvents potentialPoints As TextBox
    Friend WithEvents GroupBox1 As GroupBox
    Friend WithEvents onTime As RadioButton
    Friend WithEvents RadioButton1 As RadioButton
    Friend WithEvents Panel2 As Panel
    Friend WithEvents studentSelection As ListBox
    Friend WithEvents courseSelection As ListBox
    Friend WithEvents RadioButton8 As RadioButton
    Friend WithEvents RadioButton7 As RadioButton
    Friend WithEvents RadioButton6 As RadioButton
    Friend WithEvents RadioButton5 As RadioButton
    Friend WithEvents RadioButton4 As RadioButton
    Friend WithEvents RadioButton3 As RadioButton
    Friend WithEvents Label9 As Label
    Friend WithEvents Label8 As Label
    Friend WithEvents Label10 As Label
    Friend WithEvents ToolTip1 As ToolTip
End Class

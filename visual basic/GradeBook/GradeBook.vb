Imports WindowsApplication1.Grade
Imports WindowsApplication1.Student
Imports WindowsApplication1.CourseGrade
Imports WindowsApplication1.AssignmentGrade

Public Class GradeBook
    Dim student As Student
    Dim courseGrade As CourseGrade
    Dim assignmentGrade As AssignmentGrade

    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load

    End Sub

    'select course
    Private Sub courseSelection_SelectedIndexChanged(sender As Object, e As EventArgs) Handles courseSelection.SelectedIndexChanged
        System.Diagnostics.Debug.WriteLine("Selected A Course")
        System.Diagnostics.Debug.WriteLine(courseSelection.Text)
    End Sub

    'select student
    Private Sub studentSelection_SelectedIndexChanged(sender As Object, e As EventArgs) Handles studentSelection.SelectedIndexChanged
        System.Diagnostics.Debug.WriteLine("Selected A Student")
        'System.Diagnostics.Debug.WriteLine(studentSelection.Text)
        Dim name = Split(studentSelection.Text, " - ", 2).GetValue(0)
        Dim id = Split(studentSelection.Text, " - ", 2).GetValue(1)
        student = New Student(name, id)
        System.Diagnostics.Debug.WriteLine(student.getName)
        System.Diagnostics.Debug.WriteLine(student.getID)
    End Sub

    'Panel/Section 2 (Task 3: Grade An Assignment)
    'Select Case Earned Grade
    'Display "How Many Points Did The Student Earn" Input Text Box And Label
    'Select Case Potential Grade
    'Display "How Many Points Were Possible" Input Text Box And Label
    'Select Case Late Point Reductions
    'Display 8 Radio Buttons ("On Time", 1, 2, 3, 4, 5, 6, 7+) with Labels
    'Preselect "On Time" button
    Private Sub TextBox1_TextChanged(sender As Object, e As EventArgs) Handles earnedPoints.TextChanged
        System.Diagnostics.Debug.WriteLine(earnedPoints.Text)
    End Sub

    Private Sub potentialPoints_TextChanged(sender As Object, e As EventArgs) Handles potentialPoints.TextChanged
        System.Diagnostics.Debug.WriteLine("Inputed Potential Points")
        System.Diagnostics.Debug.WriteLine(potentialPoints.Text)
    End Sub

    'Push to DB
    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles submitButton.Click
        System.Diagnostics.Debug.WriteLine("Clicked Submit Student's Grade")
        System.Diagnostics.Debug.WriteLine(submitButton.Text)
    End Sub

    'Panel/Section 1 (Task 2: View Student Grades)
    'View Grade
    'Display "View Student Grades" Button And Text Caption
    'On Click => Get student grades for the class
    'Print Student Name, Assignment Grades, Cumulative Grade
    'Pull records from AccessDB
    Private Sub viewGradesButton_Click(sender As Object, e As EventArgs) Handles viewGradesButton.Click
        System.Diagnostics.Debug.WriteLine("Clicked The View A Student's Grade")
        System.Diagnostics.Debug.WriteLine(viewGradesButton.Text)
        student.getGrades()
    End Sub


End Class


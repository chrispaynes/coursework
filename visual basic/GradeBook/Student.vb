Public Class Student
    Private ReadOnly _StudentName As String
    Private ReadOnly _StudentID As Integer
    Private _CumulativeGradePoints As Integer
    Private _AssignmentGrades As ArrayList

    Public Sub New(StudentName, StudentID)
        _StudentName = StudentName
        Int64.TryParse(StudentID, _StudentID)
        _CumulativeGradePoints = 0
        _AssignmentGrades = New ArrayList()
    End Sub

    Public Function getName() As Integer
        Return _StudentName
    End Function

    Public Function getID() As Integer
        Return _StudentID
    End Function

    Public Sub addAssignmentGrade(AssignmentGrade As AssignmentGrade)
        _AssignmentGrades.Add(AssignmentGrade)
    End Sub

    Public Function calculateGPA()
        Return _CumulativeGradePoints
    End Function

    Public Function getGrades()
        Return "Grades"
    End Function

End Class

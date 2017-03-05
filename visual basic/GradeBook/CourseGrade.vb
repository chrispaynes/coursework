Public Class CourseGrade
    Inherits Grade

    Private _Grades As ArrayList
    Private _CourseName As String
    Private _Deductions As ArrayList

    Public Sub New(CourseName, EarnedScore, PossibleScore)
        _CourseName = CourseName
        _EarnedScore = EarnedScore
        _PossibleScore = PossibleScore
        _Grades = New ArrayList()
        _Deductions = New ArrayList()
    End Sub

    Public Function MapReduceGrades() As Integer
        Dim ReducedGrade = 0

        For Each g As AssignmentGrade In _Grades
            'ReducedGrade += g._EarnedScore
        Next

        Return ReducedGrade
    End Function

    Public Sub DeductFromCourseGrade(Deduction As Integer)
        _Deductions.Add(Deduction)
    End Sub

    Public Sub AddAssignmentGrade(Assignment As AssignmentGrade)
        _Grades.Add(Assignment)
    End Sub

    Public Function getName()
        Return _CourseName
    End Function

End Class

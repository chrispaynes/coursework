Public Class Grade
    Protected Shared _EarnedScore As Integer
    Protected _PossibleScore As Integer
    Protected _Deduction As Integer

    Public Sub New()
        _EarnedScore = 0
        _PossibleScore = 0
        _Deduction = 0
    End Sub

    Public Sub New(EarnedValue As Integer, PossibleValue As Integer, Deduction As Double)
        _EarnedScore = EarnedValue
        _PossibleScore = PossibleValue
        _Deduction = Deduction
    End Sub

    Public Function toLetterGrade() As String

        Return ""
    End Function

End Class

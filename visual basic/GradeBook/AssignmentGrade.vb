Public Class AssignmentGrade
    Inherits Grade

    Private _DaysLate As Integer

    Public Sub New()
        _EarnedScore = 0
        _PossibleScore = 0
        _Deduction = 0
        _DaysLate = 0
    End Sub

    Public Sub New(EarnedScore, PossibleScore, Deduction, DaysLate)
        _EarnedScore = EarnedScore
        _PossibleScore = PossibleScore
        _Deduction = Deduction
        _DaysLate = DaysLate
    End Sub

    Public Sub setEarnedScore(Score As Integer)
        _EarnedScore = Score
    End Sub

    Public Sub setPossibleScore(Score As Integer)
        _PossibleScore = Score
    End Sub

    Public Sub setDaysLate(DaysLate As Integer)
        _DaysLate = DaysLate
    End Sub

    Public Sub deductLateSubmission()
        _Deduction = ((100 - (_DaysLate * 10)) / 100) * _EarnedScore
    End Sub
End Class

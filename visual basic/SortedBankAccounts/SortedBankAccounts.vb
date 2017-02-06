Imports ConsoleApplication1

Module SortedBankAccounts

    Public Class Account
        Public Property AccountID As Integer
        Public Property Transaction As Decimal
        Public Property TransactionDate As Date

        Public Sub New(id As Integer, t As Decimal, tDate As Date)
            AccountID = id
            Transaction = t
            TransactionDate = tDate
        End Sub

    End Class

    Sub Main()
        Dim accountingLog As New List(Of Account)
        Dim sortedAccountingLog As IOrderedEnumerable(Of Account)

        accountingLog.Add(New Account(123456, -12.456D, #1/13/2005 12:45 PM#))
        accountingLog.Add(New Account(456754, 32889456789456D, #1/13/2005 16:13 PM#))
        accountingLog.Add(New Account(346754, 77612.456D, #2/13/2005 11:18 PM#))
        accountingLog.Add(New Account(666754, 37672.456D, #3/13/2005 08:34 PM#))

        ' Traverse through unsorted accounting log
        For Each account In accountingLog
            Debug.WriteLine(account.AccountID & vbTab & account.Transaction & vbTab & account.TransactionDate)
        Next

        ' Sort account log based on date
        sortedAccountingLog = accountingLog.OrderBy(Function(x) x.TransactionDate)
        
        ' Traverse through sorted accounting log
        For Each account In sortedAccountingLog
            Debug.WriteLine(account.AccountID & vbTab & account.Transaction & vbTab & account.TransactionDate)
        Next
    End Sub

End Module

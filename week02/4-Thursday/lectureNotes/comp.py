# class Student:
#     def __init__(self, firstName, lastName, campus):
#         self.firstName = firstName
#         self.lastName = lastName
#         self.campus = campus
#     def printStudent(self):
#         print(f'{self.firstName} {self.lastName} campus: {self.campus}')

# class Campus:
#     def __init__(self):
#         self.students = []

#     def addStudent(self,firstName, lastName, campus):

#         student = Student(firstName, lastName, campus)
#         self.students.append(student)

#     def showCurrentStudents(self):
#         for studentObj in self.students:
#             print(f'{studentObj.firstName} {studentObj.lastName} {studentObj.campus}')

# dc = Campus()

# dc.addStudent('Kanny', 'Mohommad', 'Houston')
# dc.addStudent('Matthew', 'Chun', 'Seattle')
# dc.addStudent('Kim', 'Long', 'Atlanta')

# dc.showCurrentStudents()

    # kim = Student('kim', 'long', 'Atlanta')
    # mike = Student('mike', 'J', 'Houston')
    # sam = Student('sam', 'B', )
    # student = []





class AccountHolder:
    def __init__(self, fName, account, status, balance):
        self.fName = fName
        self.accountType = accountType
        self.status = status
        self.balance = balance


class Bank:
    def __init__(self, name, address): 
        self.name = name 
        self.address = address
        self.accounts = []

    def open_new_account(self, fName, accountType, status, balance):

        newAccount = AccountHolder(fName, accountType, status, balance)
        self.accounts.append(newAccount)

    def show_account_holder(self):
        for accountObj in self.accounts:
            print(accountObj.fName)


    def show_bank_balance(self):
        total_balance = 0
        for accountObj in self.accounts:
            total_balance += acountObj.balance
        return total_balance
            print(f'{account.fName} {account.balance}')

    Chase = Bank('Chase', '555 Windy Rd')
    Chase.open_new_account('KimLong', 'savings', 'pending', 100000.00)
    Chase.open_new_account('BobBurger' 'checking', 'good', 500.00)






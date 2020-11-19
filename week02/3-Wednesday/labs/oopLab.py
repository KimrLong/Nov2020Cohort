

# # 1. Create an empty class called "Student"
# class Student:
#     def __init__(self, name):
#         self.name = name
        
#     def greeting(self):
#         return f'Good morning, {self.name}'
        



# # 2. Create 5 students objects (instances of the class "Student") of "Student" types
# bob = Student("bob")
# sue = Student("sue")
# ron = Student("ron")
# pam = Student("pam")


# print(bob.greeting())
# print(sue.greeting())
# print(ron.greeting())
# print(pam.greeting())


# myString = str("string1")
# myString2 = str("string2")

# 3a. Create a "greeting" method inside of the class "Student" class that
# takes as a parameter "name". The return of the  method should be
# "Good morning {name}"


# 4. Call the greet  method on each of the students in # 5 passing in a different
# name argument each time.

# 5a. Create a constructor for the Student class.
# 5b. Create a print statement inside of the constructor
# 5c. Run your lab.py again and you should see a print statement for each student object
# That you created


# 6a. Pass in "name" as a parameter to your Student constructor.
# 6b. Create an instance variable for name
# 6c. Refactor your greeting method by removing the name parameter and
# adding a "self" in front of the printed "name" variable in the return statement
# 6d. Refactor your Student objects by passing in the name as an argument when the
# object gets instantiated

# 7. Class Methods
# 7a. Create a "Class" method inside of the "Student" called "campus" that returns the
# Statement "Digital Crafts - Houston"
# Campus is a "Class" method so it should not have "self" as an argument.
# 7b. call the campus method by invoking Student.campus()
# 7c. Call the campus method on each of the student objects
# 7d. Return the name of the student in the campus method (instance variable) (you should
# get an error)

# 8. Class Variables
# 8a. Create a class variable inside of the Student class called "cohort" whose value is
# "June 2020 Cohort"
# 8b. Print to the console each class variable for each of the student objects, i.e.
# Michah.cohort
# 8c. Refactor your class method to print out the class variable when it is called
# 8d. Call the class method on the class (i.e. Student.campus())
# 8e. Call the class method on each object (i.e. Dan.campus())

# 9. Accessor Modifiers
# Refactor your constructor to take a parameter for studentID
# 9a. Create a new instance variable for studentID with the value _studentID
# Refactor the student objects to pass a studentID argument
# 9b. Print the studentID value to the console
# Change the value of studentID to __studentID
# Print the value to the console (you should get an error)


# . Inheritance

# Create a new class called Car with the following method :
# CarDetails which prints "Here are details of this car"

# class Car:
#     def __init__(self, make, model, color):
#         self.make = make
#         self.model = model
#         self.color = color

#     def carDetails(self):

#         print("Here are the details of this car")

# class Hybrid(Car):

#     def carType(self):
#         print("I am a hybrid car")

# class Electric(Car):

#     def carType(self):
#         print("I am an electric car")

# prius = Hybrid("toyota", "prius", "purple")
# tesla = Electric("tesla", "model-s", "gold")

# print(prius.make)
# prius.carType()

# print(tesla.make)
# tesla.carType()



# Create a new class called Hybrid that inherits from the Car class
#  with the following method: CarType which prints "I am a hybrid car"


# Create a new class called Electric that inherits from the Car class
#  with the following  method: CarType which prints "I am a hybrid car"

# Create a Hybrid instance and an Electric instance
# Call the method CarType on the Hybrid Instance and Electric Instance
# Call the method Car Details on each instance


# Add the following instance variables to the Car class :
# - make
# - model
# - color


# Implicit Inheritance

# . Override Explicitly

# Alter Before or After

# Super()

# COMPOSITION




# class Counter:
#     def __init__(self):
#         self.count = 0

#     def inc_count(self):
#         self.count +=1
#         return self.count

# count1 = Counter()

# print("count 1 val: ", count1.inc_count())
# print("count 1 val: ", count1.inc_count())
# print("count 1", count1.inc_count())
# print("count 1", count1.inc_count())
# print("count 1", count1.inc_count())
# print("count 1", count1.inc_count())
# print("count 1", count1.inc_count())


# count2 = Counter()

# print("count 2", count2.inc_count())
# print("count 2", count2.inc_count())
# print("count 2", count2.inc_count())

# print("count 1", count1.inc_count())




class Human:
    def __init__(self, firstName, lastName, email):

# Sonny = Human("Sonny","D", "sonny@hotmail.com", "483-485-4948")
# Jordan = Human("Jordan","Z", "jordan@ail.com" ,"495-586-3456","jordan@ail.com" )

        self.firstName = firstName
        self.lastName = lastName
        self.email = email
        self.freinds = []

    def print_contact_info(self):
        for friend in self.friends:
            print(f'{friend.firstName} {friend.lastName} {friend.email}')

    def add_friend(self, friendObj):
        self.friends.append(friendObj)

Jordan = Human("Jordan","Z","jordan@ail.com") 

Sonny = Human("Sonny","D", "sonny@hotmail.com")
Micha = Human("Micha","P", "MP@hotmail.com")

Jordan.friends.append(Micha) 
Jordan.friends.append(Sonny)

Jordan.add_friend(Micha)
Jordan.add_friend(Sonny)

Jordan.print_contact_info()
print(len.Jordan.friends)

    # def age(self):


# mike = Human("mike", "jordan", "8/8/1990", "123 seseme", "555-5555", "mikej@hotmail")
 
# # mike.age()

# class Human: 
#     def __init__(self, name, email, phone):

#         self.name = name
#         self.email = email
#         self.phone = phone

#     def greeting(self, other_person):
#         print('Greetings {}, I am Lord, {}!'.format(other_person.name, self.name))

    # Sonny = Human("Sonny", "sonny@hotmail.com", "483-485-4948")
    # Jordan = Human("Jordan", "jordan@ail.com" ,"495-586-3456")
    # student.

#     Sonny.greeting(Jordan)
#     Jordan.greeting(Sonny)

#     print(f"This is the contact information to Sonny{Sonny.email}\n {Sonny.phone}")
#     print(f"This is the contact information to Jordan{Jordan.email}\n {Jordan.phone}")


# class Button:
#     def __init__(self):
#         self.count = 0
#     def click(self):
#         self.count +=1

#         if(self.count > 2):
#             print('do you need help')
#             self.count = 0

# navBut = Button()
# helpBut = Button()

# print(f'nav {navBut.count}')
# print(f'help {helpBut.count}')

# navBut.click()
# navBut.click()
# navBut.click()
# navBut.click()

# print(f'nav {navBut.count}')
# print(f'help {helpBut.count}')


# navBut.click()
# navBut.click()
# navBut.click()

# print(f'nav {navBut.count}')
# print(f'help {helpBut.count}')

# class OurString(str):

#     def reverse(self, word):

#         revString = ''
#         for char in word:
#             revString = char + revString

#         return revString

# myString = OurString('hello')

# print(myString.capitalize())

# print(myString.reverse('hello'))

















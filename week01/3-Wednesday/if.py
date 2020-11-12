# # variable called age
# age = 25

# if(age == 25) :
#     print(age)

# name = "Kimberly"

# if (name == 'Kimberly'):
num = ""
while num!= -1:
    num = int(input("Please enter a number: "))
    if num % 2 == 0:
        print("This is an even number")
    elif num == -1:
        print("exit")
    else:
        print("This is an odd number")
# 1. Write a function called power which accepts a base and an exponent.
# The function should return the power of the base to the exponent.
# def power(base, exponent):

#     if exponent == 0:
#         return 1

#     return base * power(base, exponent -1)

# result = power(3, 7)

# print(result)




# 2. Write a function factorial which accepts a number and returns
# the factorial of that number.  A factorial is the product of an
# interger and all the integers below it; eg. , factorial four( 4!) is
# equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

# def factorial(n):
#     if n == 0:
#         return 1
#     return n * factorial(n-1)

# result = factorial(4)
# print(result)


# 3. Write a function called recursiveRange which accepts a number and adds up all
# the numbers from 0 to the number passed to the function

# 5 = 5 + 4 + 3 + 2

# def recursiveRange():


# 4. Write a recursive function called reverse which accepts
# # a string and returns a new string in reverse


# def reverse(string):
#     if len(string) == 0:
#         return ""
#     return """" + string[len(string)::-1]

# result = reverse(string)
# print(result)


# 5. Write a recursive function called isPalindrome which returns
# true if the string passed to it is a palindrome (reads the same forward and backward).
# Otherwise returns false.
# isPalindrome('awesome') // false
# isPalindrome('foobar') // false
# isPalindrome('tacocat') // true
# isPalindrome('amanaplanacanalpanama') // true
# isPalindrome('amanaplanacanalpandemonium') // false


# string1 = "awesome"
# string2 = "foobar"
# string3 = "tacocat"
# string4 = "amanaplanacanalpanama"
# string5 = "amanaplanacanalpandemonium"

# def isPalindrome(s):
#     if len(s) < 1: 
#         return True
#     else:
#         if s[0] == s[-1]: 
#             return isPalindrome(s[1:-1])
#         else:
#             return False

# result1 = isPalindrome(string1)
# result2 = isPalindrome(string2)
# result3 = isPalindrome(string3)
# result4 = isPalindrome(string4)
# result5 = isPalindrome(string5)
# print(result1)
# print(result2)
# print(result3)
# print(result4)
# print(result5)



# 6. Write  function called product ofArray which takes in
# an array of numbers and returns the product of them all

# def product(nums):
#     if len(nums) == 1:
#         return nums[0]

#     return nums[0] * product(nums[1:])

# result = product([2, 4, 6, 8])
# print(result)


# product ([])
# 7. Write a recursive function called fib which accepts a number and
# returns the nth number in teh Fibonacci Sequence. Recall that the
# Fibonacci Sequence is the Sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which
# starts with 1 and 1, and where ever number
# thereafter is equal to the sum of the previous two numbers.

#f(n) = f(n-1) = f(n-2)
#f(n) = f(a) + f(b) where a = n-1, b = n-2
def fib(n):
    
    arr = [0, 1]

    for index in range(2, n+1):     #[2, 3, 4, 5]
        a = arr[index - 1]          #array[1]
        b = arr[index - 2]          #array[0]

        arr.append(a + b)

    return arr[n]

result = fib(6)
print(result)




# def fib(n):
#     if n < 2:
#         return n

#     return fib(n - 1) + fib (n - 2)

# result = fib(25)
# print(result)



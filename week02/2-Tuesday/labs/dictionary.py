# 1. Create a dictionary called zodiac with the following inforation.
# Each key is the name of the zodiac

# myDictionary = {

# Aries - The Warrior,
# Taurus - The Builder,
# Gemini - The Messenge,r
# Cancer - The Mother,
# Leo - The King,
# Virgo -The Analyst,
# Libra - The Judge,
# Scorpio - The Magician,
# Sagittarius - the Gypsy,
# Capricorn - the Father,
# Aquarius - The Thinker,
# Pisces - TheMystic  }


# # 1a. Retrieve information about your zodiac from the zodiac dictionary

# Your_sign = myDictionary["Virgo"]
# print(Your_sign)

# 2. Given the following dictionary

# phonebook_dict = {
#     'Alice': '703-493-1834',
#     'Bob': '857-384-1234',
#     'Elizabeth': '484-584-2923'
# }

# Elizabeth_phone = phonebook_dict['Elizabeth']
# print(Elizabeth_phone)
# phonebook_dict['Kareem'] = '938-489-1234'
# print(phonebook_dict)
# del(phonebook_dict['Alice'])
# print(phonebook_dict)
# phonebook_dict['Bob'] = '968-345-2345'
# print(phonebook_dict)
# for key, value in phonebook_dict.items():
#     print(key)
#     print(value)


# phonebook_dict["Kareem"] = "938-489-1234"
# 2a. Print Elizabeth's phone number
# 2b. Add a entry to the dictionary: Kareem's number is 938-489-1234.
# 2c. Delete Alice's phone entry.
# 2d. Change Bob's phone number to '968-345-2345'.
# 2e. Print all the phone entries.


# 3. Nested dictionaries


# import pickle

# ramit = {
#     'name': 'Ramit',
#     'email': 'ramit@gmail.com',
#     'interests': ['movies', 'tennis'],
#     'friends': [
#         {
#             'name': 'Jasmine',
#             'email': 'jasmine@yahoo.com',
#             'interests': ['photography', 'tennis']
#         },
#         {
#             'name': 'Jan',
#             'email': 'jan@hotmail.com',
#             'interests': ['movies', 'tv']
#         }
#     ]
# }


# with open('ramit.pickle', 'wb') as fx:
#     pickle.dump(ramit, fx)


with open('ramit.pickle', 'rb') as fh:
    phoneBook = pickle.load()

print(phoneBook['friends'])

# ramit_email = ramit['email']
# print(ramit_email)
# ramit_interests = rami['interests'][0]
# print(ramit_interests)
# jasmine_email = ramit[1]['email']
# print(jasmine_email)
# jan_interests = ramit[2]
# print(jan_interests)
# 3a. Write a python expression that gets the email address of Ramit.
# 3b. Write a python expression that gets the first of Ramit's interests.
# 3c. Write a python expression that gets the email address of Jasmine.
# 3d. Write a python expression that gets the second of Jan's two interests.


# 4. Letter Summary
# Write a letter_histogram function that takes a word as its input,
# and returns a dictionary containing the tally of how many times
# each letter in the alphabet was used in the word. For example:

# def letter_count(word):
#     letter_frequency={}  #letter_frequency['o'] = 4 letter_frequency = {'o': 4}
#     for letter in word:
#         if letter not in letter_frequency:
#             letter_frequency[letter] = 1
#         else:
#             letter_frequency[letter] += 1
#     return letter_frequency
  
# print(letter_count("onomatopoeia"))



# string = input('Input a word: ')
# def histogram(string):
#     freq = {}
#     for i in string: 
#         freq[i] = freq.get(i, 0) + 1
#     return freq
# print(histogram(string))

# >>>letter_histogram('banana')
# {'a': 3, 'b': 1, 'n': 2}


# Word Summary
# Write a word_histogram function that takes a paragraph of text as its input, and returns a dictionary containing the tally of how many times each word in the alphabet was used in the text. For example:

# >>> word_histogram('To be or not to















a = [ [2, 4, 6, 8 ],  
    [ 1, 3, 5, 7 ],  
    [ 8, 6, 4, 2 ],  
    [ 7, 5, 3, 1 ] ] 

outterIndex = 0
innerArrIndex = 0


while outterIndex < len(a):
    print(a[outterIndex])
    
    while innerArrIndex < len(a[outterIndex]):
        print(a[outterIndex][innerArrIndex])
        innerArrIndex += 1
    innerArrIndex = 0
    outterIndex += 1


    alphabet = "abcdefghijklmnopqrstuvwxyz"
index = 0
while index < len(alphabet):
    print(alphabet[index])
    index += 1




def number_input(a,b):
    if b=="int":
        
        c=int(input(a))
        return c
    elif b=="float":
         
         c=float(input(a))
         return c
    
    
x=input("enter your text: ")
y=input("enter your type: ")
print(number_input(x,y))

    
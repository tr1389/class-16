n=int(input("enter the numbr of people: "))
d=dict()
d2=dict()
for i in range (n):
    k=input("enter the name: ")
    v=int(input("enter the national code: "))
    d[k]=v
for key,value in d.items():
    d2[value]=key
r=input("what do you want to do?: ")  
if r=="name to national code":
    n=input("enter the name: ") 
    print(d[n])
elif r=="national code to name":
    nc=int(input("enter the national code: "))
    print(d2[nc])

         
l=[]
n=1
s=0
for i in range(int(input("enter the number of lup: "))):

  x=int(input("enter your score: "))

  l.append(x)
  if len(l)==1:
    print(x)
  else:
     while(n<=len(l)):
       s=x+l(n)/n+1
       n+=1     
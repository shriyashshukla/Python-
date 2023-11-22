# print a pattern 

print("enter the number of rows")
rows = int(input())
print("enter 1 or 0")
bool_val = int(input())
new = bool(bool_val)
if new == True:
    for i in range(0, rows+1):
        for j in range(0, i+1):
            print("*", end=" ")
        print()
elif new == False:
    for i in range(rows+1, 0, -1):
        for j in range(0, i-1):
            print("*", end=" ")
        print()
else:
    print("enter 1 or 0")
    

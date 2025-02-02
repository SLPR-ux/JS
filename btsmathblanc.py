val = int(input("Nombre pair juqu a?"))

while val<0:
    val = int(input("Veuillez entrer un nombre positif: "))
    
for i in range(val):
    if i%2==0:
        print(i)
        
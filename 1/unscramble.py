#loeb text failist sõnu
with open('worldlist.txt') as file:
    lines = file.readlines()
#minu scrambled sõnad
words = ["ennhkte",
"nitekts",
"otudesn",
"mnraat",
"eprtumt",
"aegstatr",
"nkipun",
"eahctps",
"ratwssar",
"aleksr",]
#list kuhu uued sõnad salvestan
newlist = []
#käin läbi iga scrambled sõna
for text in words:
        txtSorted = ''.join(sorted(text)) #sorteerin tähed tähestiku järjekorda
        for word in lines: #käin läbi iga sõna failis
            word = word.rstrip("\n")
            wordSorted = ''.join(sorted(word)) #panen need ka tähestiku järjekorda
            if txtSorted == wordSorted:
                newlist.append(word) # lõpuks kui need kaks sõna on samad siis tean mis sõna see oli. Ja panen listi
print(newlist)                

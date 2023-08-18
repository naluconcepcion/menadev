class Person:
    def __init__(self, first_name: str, last_name: str, fun_fact: str = None):
        self.first_name = first_name
        self.last_name = last_name
        self.fun_fact = fun_fact
        self.age = None
        self.height = None
    def get_first_name(self):
        return self.first_name
    def set_first_name(self, first_name: str) :
        self.first_name = first_name
    def get_last_name(self):
        return self.last_name
    def set_last_name(self, last_name: str) :
        self.last_name = last_name
    def get_fun_fact(self) :
        return self.fun_fact
    def set_fun_fact(self, fun_fact: str) :
        self.fun_fact = fun_fact
    def set_age(self, age: int):
        self.age = age
    def get_age(self):
        return self.age
    def set_height(self, height: float) :
        self.height = height
    def get_height(self):
        return self.height
    def get_full_name(self):
        return self.full_name + " " + self.last_name

people = []
people.append(Person("Jack", "Hale", "Jack has a huge dog"))
people.append(Person("Aadith", "Charry", "Aadith is cpr certified"))
people.append(Person("Eli", "Abbott", "He likes to play basketball"))
people.append(Person("Moshe", "Abbott","he got his head split open when he was 2"))
people.append(Person("Nigel", "Vinnock", "Nigel is allergic to nuts"))
people.append(Person("Diego", "Mobarak", "Diego scubadives"))
people.append(Person("Teddy", "Pomianek", "Teddy almost died on a fishing trip in Nicuagra"))
people.append(Person("Mena", "Parikh", "She likes pandas"))

while True:
    name = input("What is your name?")
    if name == "stop":
        break
    for Person in people:
        if name == Person.get_first_name():
            print(Person.get_fun_fact())
print("did not want to play name game")
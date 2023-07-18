import random
import turtle
screen = turtle.Screen()
screen.colormode(255)

red = turtle.Turtle()
blue = turtle.Turtle()
orange = turtle.Turtle()

blue.speed(1)
red.speed(1)
orange.speed(1)

red.color("red")
blue.color("blue")
orange.color("orange")

blue.goto(-300,300)
red.goto(-300,290)
orange.goto(-300,280)

while red.xcor() <300 and blue.xcor() <300 and orange.xcor() <300:
    bluestep = random.randint(0,50)
    redstep = random.randint(0,50)
    orangestep = random.randint(0,50)

    blue.forward(bluestep)
    red.forward(redstep)
    orange.forward(orangestep)
    print (red.xcor())
    if red.xcor() > 300:
        red.write("I won!", font=('Arial', 16, 'normal'))
    elif blue.xcor() > 300:
        blue.write("I won!", font=('Arial', 16, 'normal'))
    elif orange.xcor() > 300:
        orange.write("I won!", font=('Arial', 16, 'normal'))
    #else:
       # red.write("else was hit", font=('Arial', 16, 'normal'))

   
def randomtriangles(numTriangles):
    for i in range(numTriangles):
        red.goto(random.randint(0,200),random.randint(0,200))
        sidelengths = (random.randint(0,200))
        for j in range(3):
            red.forward(sidelengths)
            red.right(120)
        red.color(random.randint(0,200),random.randint(0,200),random.randint(0,200))


def randomnumberofturtles():
    n = turtle.Turtle(random.randint(0,200))

#randomtriangles(5)
screen.exitonclick()

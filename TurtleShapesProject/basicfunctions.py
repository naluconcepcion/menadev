import random
import turtle
screen = turtle.Screen()
screen.colormode(255)
t = turtle.Turtle()
t.speed(2)
t.shape("turtle")

def spin():
    t.right(360)
spin()
def randomSpot():
    t.penup()
    x=random.randint(-200,0)
    y=random.randint(0,200)
    t.goto(x,y)
    t.pendown()
def randomColor():
    t.color(random.randint(0,255),random.randint(0,255),random.randint(0,255))
for i in range(3):
    randomSpot()
    randomColor()
def reset():
    t.color(random.randint(0,0),random.randint(0,0),random.randint(0,0))
    t.penup()
    t.goto(0,0)
reset()
def randomcolorandspot():
    randomColor()
    randomSpot()
def spin2(numTurns):
    for i in range(numTurns):
        t.right(360)
def drawSquare(sideLength):
    for i in range(4):
        t.pendown()
        t.forward(sideLength)
        t.right(90)
    t.penup()
randomcolorandspot()
spin2(3)
for i in range(5):
    drawSquare(random.randint(0,1000))
screen.exitonclick()
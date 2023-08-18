print("importing droneblocks library")
from droneblocks.DroneBlocksTello import DroneBlocksTello
print("import time functions")
import time

print("setting drone as a usable object")
drone = DroneBlocksTello()

print("connecting to drone")
drone.connect()
print("taking")
drone.takeoff()

drone_command = input("what direction? forward, back, left, or right")

if drone_command == "forward":
     drone.move_forward(100)
elif drone_command == "back":
     drone.move_back(100)
elif drone_command == "left":
        drone.move_left(100)
elif drone_command == "right":
     drone.move_right(100)
else:
    print("pick anoter directon")

drone_commandshape = input("what shape? Square, Pentagon, Circle, or Octagon")

if drone_commandshape == "square":
    for i in range(4):
        drone.move_forward(50)
        drone.rotate_clockwise(90)  
elif drone_commandshape == "pentagon":
    for i in range(5):
        drone.move_forward(50)
        drone.rotate_clockwise(108)
elif drone_commandshape == "circle":
   drone.curve_xyz_speed(45, 45, 10, 90, 0, 10, 20)
   drone.curve_zyx_speed(-45, -45, 10, -90, 0, 10, 20)
elif drone_commandshape == "octagon":
    for i in range(8):
        drone.move_forward(50)
        drone.rotate_clockwise(135)
else:
    print("pick another shape")

drone.land()
drone.end()
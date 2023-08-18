from droneblocks.DroneBlocksTello import DroneBlocksTello
import time

drone = DroneBlocksTello()


print("connecting drone")
drone.connect()

battery_life = drone.get_battery()
print(battery_life)

print("taking off")
drone.takeoff()

time.sleep(1)

for i in range(3):
    drone.move_forward(50)
    drone.rotate_clockwise(120)

time.sleep(1)

for i in range(4):
    drone.move_forward(50)
    drone.rotate_clockwise(90)

time.sleep(1)

for i in range(5):
    drone.move_forward(50)
    drone.rotate_clockwise(108)

time.sleep(1)

for i in range(8):
    drone.move_forward(50)
    drone.rotate_clockwise(135)

time.sleep(1)

drone.land()
drone.end()
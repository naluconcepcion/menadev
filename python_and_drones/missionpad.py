from droneblocks.DroneBlocksTello import DroneBlocksTello
import time
drone = DroneBlocksTello()

drone.connect()

drone.takeoff()

switch = False
count = 0 
while True:
    for i in range(3):
        
        mission_pad_id = drone.get_mission_pad_id()
        if mission_pad_id == 2:
            drone.display_character(str(mission_pad_id))
            switch = True
            break
        drone.move_forward(40)
        time.sleep(2)
    if switch:
        break
    count += 1
    if count % 2 == 1:
        drone.move_right(20)
        drone.rotate_clockwise(180)
    else:
        drone.move_left(20)
        drone.rotate_clockwise(180)

drone.land()
drone.end()
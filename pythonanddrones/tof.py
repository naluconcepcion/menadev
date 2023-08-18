from droneblocks.DroneBlocksTello import DroneBlocksTello

drone = DroneBlocksTello()

drone.connect()

drone.takeoff()
drone.move_up(60)

distance_up = drone.get_distance_tof()
print(str(distance_up))

while True: 
    if distance_up > 160:
        print("move your hand under the drone")
    elif distance_up < 90:
        drone.display_smile()
    elif distance_up > 100:
        drone.display_sad()
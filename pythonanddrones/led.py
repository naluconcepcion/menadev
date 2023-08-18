from droneblocks.DroneBlocksTello import DroneBlocksTello
drone = DroneBlocksTello()
drone.connect()
print("Battery level is {drone.get_battery(}")

# drone.display_character("m")

choice = input("What color do you want the led to be?")
while True:
    if choice == "purple":
        drone.set_top_led(255,0,255)
    elif choice == "green":
        drone.set_top_led(0,255,0)
    elif choice == "yellow":
        drone.set_top_led(255,213,128)
    elif choice == "blue":
        drone.set_top_led(77,255,255)
    elif choice == "orange":
        drone.set_top_led(255, 128, 0)
    elif choice == "red":
        drone.set_top_led(255,0,0)
    elif choice == "pink":
        drone.set_top_led(255,128,191)
    else:
        print("pick another color")

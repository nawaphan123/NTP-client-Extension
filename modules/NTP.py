import ntptime
import network
import time

# Function to set up the network and connect to WiFi
def ntp_Setup(ssid, password):
    nic = network.WLAN(network.STA_IF)  # Create a WLAN network interface object
    nic.active(True)  # Activate the network interface
    nic.connect(str(ssid), str(password))  # Connect to the WiFi network using the provided SSID and password
    print("Waiting for WiFi connection...")
    while not nic.isconnected():  # Wait until the network interface is connected to the WiFi
        print(".")
        time.sleep(1)
    print("WiFi connected successfully")
    ntp_update()  # Update time from NTP server

# Function to get the current time with the selected time component (e.g., year, month, day, etc.)
def get_time(Time_selection):
    ntp_update()  # Ensure the time is synchronized with the NTP server
    Time = list(time.localtime())  # Get the current local time and convert it to a list
    Time = setTimeZone(Time, 7)  # Adjust the time for the specified timezone (default is 7)
    return Time[Time_selection]  # Return the selected time component (e.g., year, month, day, etc.)

# Function to update the local time from the NTP server if the current time is outdated
def ntp_update():
    Time = time.localtime()  # Get the current local time
    if Time[0] < 2024:  # Check if the year is before 2024 (indicating the time is not synchronized)
        ntptime.settime()  # Update the time from the NTP server

# Function to adjust the current time to the specified timezone
def setTimeZone(current_time, timeZone=7):
    current_time[3] += timeZone  # Adjust the hour by the timezone offset

    # If the hour exceeds 24, reset hour and move to the next day
    if current_time[3] >= 24:
        current_time[3] -= 24  # Reset hour
        current_time[2] += 1  # Move to the next day

    # If the hour is negative, adjust hour and move to the previous day
    elif current_time[3] < 0:
        current_time[3] += 24  # Adjust hour
        current_time[2] -= 1  # Move to the previous day

    # Check if the day exceeds the days in the current month
    days_in_month = [31, 28 + (1 if (current_time[0] % 4 == 0 and current_time[0] % 100 != 0) or (current_time[0] % 400 == 0) else 0), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if current_time[2] > days_in_month[current_time[1] - 1]:
        current_time[2] = 1  # Reset day to 1
        current_time[1] += 1  # Move to the next month

        # If the month exceeds 12, reset month to January and move to the next year
        if current_time[1] > 12:
            current_time[1] = 1  # Reset month to January
            current_time[0] += 1  # Move to the next year

    # If the day is less than 1, move to the previous month
    elif current_time[2] < 1:
        current_time[1] -= 1  # Move to the previous month
        if current_time[1] < 1:
            current_time[1] = 12  # Reset month to December
            current_time[0] -= 1  # Move to the previous year

        current_time[2] = days_in_month[current_time[1] - 1]  # Set day to the last day of the previous month

    return current_time  # Return the adjusted time

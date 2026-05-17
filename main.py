# Python code for a relay prototpye switch on and on_off with display

def on_button_pressed_a():
    global on
    if show == 0:
        if on == 1:
            on = 0
        else:
            on = 1
        pins.digital_write_pin(DigitalPin.P8, on)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global show, time
    if show == 0:
        lcd1602.put_number(on, 0, 0)
        show = 1
        time = 2
        pins.digital_write_pin(DigitalPin.P8, on)
input.on_button_pressed(Button.B, on_button_pressed_b)

time = 0
on = 0
show = 0
led.enable(False)
lcd1602.set_address3()
lcd1602.set_backlight(lcd1602.on_off.ON)
lcd1602.clear()
lcd1602.set_LCD_Show(lcd1602.visibled.VISIBLE)

def on_forever():
    global time, show
    if show == 1:
        time += -1
        basic.pause(1000)
        if time == 0:
            show = 0
            lcd1602.clear()
basic.forever(on_forever)

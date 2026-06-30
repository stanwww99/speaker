//  Python code for a relay prototpye switch on and on_off with display
//  Pin 8 is relay
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (show == 0) {
        if (on == 1) {
            on = 0
        } else {
            on = 1
        }
        
        pins.digitalWritePin(DigitalPin.P8, on)
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (show == 0) {
        lcd1602.putNumber(on, 0, 0)
        show = 1
        time = 2
        pins.digitalWritePin(DigitalPin.P8, on)
    }
    
})
let time = 0
let on = 0
let show = 0
led.enable(false)
lcd1602.setAddress3()
lcd1602.set_backlight(lcd1602.on_off.on)
lcd1602.clear()
lcd1602.set_LCD_Show(lcd1602.visibled.visible)
basic.forever(function on_forever() {
    
    if (show == 1) {
        time += -1
        basic.pause(1000)
        if (time == 0) {
            show = 0
            lcd1602.clear()
        }
        
    }
    
})

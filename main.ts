input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("Thomas")
})
basic.showString("Mark")
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Sad)
    basic.showIcon(IconNames.Surprised)
})

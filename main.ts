let tempo = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showNumber(3)
    tempo = 500
    basic.showNumber(2)
    tempo = 500
    basic.showNumber(1)
    tempo = 500
    basic.showNumber(0)
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        # # # # #
        # . # . #
        `)
    basic.showLeds(`
        . # # # .
        . # # # .
        # # # # #
        # . # . #
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        # # # # #
        # . # . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . # . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . # . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.forever(function () {
	
})

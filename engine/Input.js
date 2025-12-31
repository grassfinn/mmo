export const LEFT = "LEFT"
export const RIGHT = "RIGHT"
export const UP = "UP"
export const DOWN = "DOWN"
export const ALT = "JUMP"

export class Input {
    constructor() {

        this.heldDirection = []

        document.addEventListener('keydown', (e) => {
            console.log(e.code);
            switch (e.code) {
                case 'AltLeft' || 'AltRight':
                    e.preventDefault()
                    this.onArrowPressed("ALT")
                    break
                case 'ArrowDown':
                    this.onArrowPressed("DOWN")
                    break
                case 'ArrowLeft':
                    this.onArrowPressed("LEFT")
                    break
                case 'ArrowRight':
                    this.onArrowPressed("RIGHT")
                    break
                default:


            }
        })
        document.addEventListener('keyup', (e) => {
            console.log(e.code);
            switch (e.code) {
                case 'AltLeft' || 'AltRight':
                    e.preventDefault()
                    this.onArrowReleased("ALT")
                    break
                case 'ArrowDown':
                    this.onArrowReleased("DOWN")
                    break
                case 'ArrowLeft':
                    this.onArrowReleased("LEFT")
                    break
                case 'ArrowRight':
                    this.onArrowReleased("RIGHT")
                    break
                default:


            }
        })
    }

    get direction() {
        return this.heldDirection[0]
    }

    onArrowPressed(direction) {
        if (this.heldDirection.indexOf(direction) === -1) {
            this.heldDirection.unshift(direction)
        }

    }
    onArrowReleased(direction) {
        const index = this.heldDirection.indexOf(direction)
        if (index === -1) {
            return
        }
        this.heldDirection.splice(index, 1)

    }
}
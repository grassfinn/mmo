import { Vector2 } from "./Vector2.js"

export class Physics {
    velocity = new Vector2(3, 0)
    gravity = 1
    maxFallSpeed = 9
    constructor() {

    }

    gravityClamp() {
        if (this.velocity.y > this.maxFallSpeed) {
            this.velocity.y = this.maxFallSpeed
        }
    }

    applyGravity(object, map) {
        // Vertical Collision
        this.velocity.y += this.gravity
        this.gravityClamp()
        object.position.y += this.velocity.y

        if (object.position.y >= map.groundLevel) {
            object.position.y = map.groundLevel
            this.velocity.y = 0
        }
    }
}
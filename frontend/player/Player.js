import { GameObject } from "../../engine/GameObject.js";
import { Vector2 } from "../../engine/Vector2.js";
import { Sprite } from "../../engine/Sprite.js";
import { resources } from "../../engine/Resource.js";

export class Player extends GameObject {
    constructor(x, y) {
        super({
            position: new Vector2(x, y)
        })
        this.sprite = new Sprite({
            resource: resources.images.player,
            frameSize: new Vector2(43, 43),
            hFrames: 2,
            vFrames: 2,
            frame: 0,
        })
        this.addChild(this.sprite)
    }

    step(delta, root) {

        const { physics } = root
        physics.applyGravity(this, root)
        this.move(root)
    }

    move(root) {

        const { input } = root
        const { physics } = root
        switch (input.direction) {
            case "ALT":
                this.position.y -= 1 * 7
                break
            case "DOWN":
                this.position.y += 1 * physics.velocity.y
                break
            case "LEFT":
                this.position.x -= 1 * physics.velocity.x
                break
            case "RIGHT":
                this.position.x += 1 * physics.velocity.x
                break
            default:
        }
    }
}
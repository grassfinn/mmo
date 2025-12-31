import { Vector2 } from "./Vector2.js";

export class GameObject {
    constructor({ position }) {
        this.position = position ?? new Vector2(0, 0)
        this.children = []
    }

    stepEntry(deltaTime, root) {
        this.children.forEach(child => child.stepEntry(deltaTime, root))


        this.step(deltaTime, root)
    }


    // Called every frame
    step(deltaTime) {

    }

    // Draw Object
    draw(ctx, x, y) {
        const drawPosX = x + this.position.x
        const drawPosY = y + this.position.y

        this.drawImage(ctx, drawPosX, drawPosY)


        this.children.forEach(child => child.draw(ctx, drawPosX, drawPosY))
    }

    drawImage(ctx, drawPosX, drawPosY) {

    }

    addChild(gmaeObject) {
        this.children.push(gmaeObject )
    }

    removeChild(gameObject){
        this.children = this.children.filter(object => {
            return gameObject !== object
        })
    }

}
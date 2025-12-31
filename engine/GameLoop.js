export class GameLoop {
    constructor(update, render) {


        this.lastFrameTime = 0
        this.accumulatedTime = 0
        this.timeStep = 1000 / 60 //fps


        this.update = update
        this.render = render

        this.rafID = null
        this.isRunning = false

    }

    mainLoop = (timeStamp) => {
        if (!this.isRunning) return
        let deltaTime = timeStamp - this.lastFrameTime
        this.lastFrameTime = timeStamp

        // add all time since last frame
        this.accumulatedTime += deltaTime

        while (this.accumulatedTime >= this.timeStep) {
            // console.log('Updating');
            
            this.update(this.timeStep)
            this.accumulatedTime -= this.timeStep
        }

        this.render()
        this.rafID = requestAnimationFrame(this.mainLoop)

    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true
            this.rafID = requestAnimationFrame(this.mainLoop)
        }
    }

    stop() {
        if (this.rafID) {
            cancelAnimationFrame(this.rafID)
        }
        this.isRunning = false
    }
}
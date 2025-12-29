class Resources {
    constructor() {

        // need to download images first
        this.toLoad = {
            player: './sprites/test.png'
        }

        this.images = {}

        Object.keys(this.toLoad).forEach(key => {
            const img = new Image()
            img.src = this.toLoad[key]
            this.images[key] = {
                image: img,
                isLoaded: false
            }
            img.addEventListener('load', () => this.images[key].isLoaded = true)
            // img.onload = () => {
            //     this.images[key].isLoaded = true
            // }
        })
    }
}

export const resources = new Resources()


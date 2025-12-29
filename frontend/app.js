import { resources } from "./Resource.js";
import { Sprite } from "./Sprite.js";

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');



const draw = () => {
    const player = resources.images.player
    if (player.isLoaded) {
        ctx.drawImage(player.image,0,0)
        
    }
}

const player = new Sprite({
    resource: resources.images.player,
    
})

setInterval(() => { draw() }, 300)
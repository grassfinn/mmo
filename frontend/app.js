import { resources } from "./Resource.js";
import { Sprite } from "./Sprite.js";
import { Vector2 } from "./Vector2.js";

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');


const player = new Sprite({
   resource: resources.images.player,
   frameSize: new Vector2(43,43),
   hFrames: 2,
   vFrames:2,
   frame: 1,
})

const playerPos = new Vector2(16 * 5, 16 * 5)

const draw = () => {
    player.drawImage(ctx,playerPos.x,playerPos.y)
}



setInterval(() => { draw() }, 300)
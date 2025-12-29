import { resources } from "../engine/Resource.js";
import { Sprite } from "../engine/Sprite.js";
import { Vector2 } from "../engine/Vector2.js";

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');


const player = new Sprite({
   resource: resources.images.player,
   frameSize: new Vector2(43,43),
   hFrames: 2,
   vFrames:2,
   frame: 0,
})

const playerPos = new Vector2(16 * 5, 16 * 5)

const draw = () => {
    player.drawImage(ctx,playerPos.x,playerPos.y)
}



setInterval(() => { draw() }, 300)
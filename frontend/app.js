import { GameLoop } from "../engine/GameLoop.js";
import { Input } from "../engine/Input.js";
import { Physics } from "../engine/Physics.js";
import { resources } from "../engine/Resource.js";
import { Sprite } from "../engine/Sprite.js";
import { Vector2 } from "../engine/Vector2.js";



const dimensions = {
    width: 640,
    height: 360
}

const canvas = document.querySelector('canvas');
canvas.width = dimensions.width
canvas.height = dimensions.height
const ctx = canvas.getContext('2d');

const physics = new Physics()

const bg = new Sprite({
    resource: resources.images.bg,
    frameSize: new Vector2(640, 360),
})

const player = new Sprite({
    resource: resources.images.player,
    frameSize: new Vector2(43, 43),
    hFrames: 2,
    vFrames: 2,
    frame: 0,
})
player.position = new Vector2(43, 43 * 2)
const playerPos = player.position


const playground = { groundLevel: canvas.height - player.frameSize.y }

const input = new Input()

const gameLoop = new GameLoop(update, draw)
gameLoop.start()

console.log(player);
function draw() {

    bg.drawImage(ctx, 0, 0)
    player.drawImage(ctx, playerPos.x, playerPos.y)

}
const img = document.querySelector('img')
img.src = player.resource.flipped
function update() {
    // Apply Gravity
    physics.applyGravity(player, playground)
    // console.log(input.direction);
    switch (input.direction) {
        case "ALT":
            player.position.y -= 1 * 7
            break
        case "DOWN":
            player.position.y += 1 * physics.velocity.x
            break
        case "LEFT":
            player.position.x -= 1 * physics.velocity.x
            break
        case "RIGHT":
            player.position.x += 1 * physics.velocity.x
            break
        default:
    }

}



// setInterval(() => {
//     // if (player.frame > 3){
//     //     player.frame = 0
//     // }
//     // player.frame += 1
//     draw()
// }, 300)
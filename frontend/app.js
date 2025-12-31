import { GameLoop } from "../engine/GameLoop.js";
import { GameObject } from "../engine/GameObject.js";
import { Input } from "../engine/Input.js";
import { Physics } from "../engine/Physics.js";
import { resources } from "../engine/Resource.js";
import { Sprite } from "../engine/Sprite.js";
import { Vector2 } from "../engine/Vector2.js";
import { Player } from "./player/Player.js";

const dimensions = {
    width: 640,
    height: 360
}
// Canvas
const canvas = document.querySelector('canvas');
canvas.width = dimensions.width
canvas.height = dimensions.height
const ctx = canvas.getContext('2d');
// Game Objects
const mainScene = new GameObject({
    position: new Vector2(0, 0)
})
const physics = new Physics()
const bg = new Sprite({
    resource: resources.images.bg,
    frameSize: new Vector2(640, 360),
})
const player = new Player(43, 43)
mainScene.addChild(bg)
mainScene.addChild(player)
mainScene.input = new Input()
mainScene.physics = new Physics()
mainScene.groundLevel = canvas.height - player.sprite.frameSize.y

// Game Loop
const gameLoop = new GameLoop(update, draw)
gameLoop.start()
// Draw
function draw() {
    mainScene.draw(ctx, 0, 0)
}
// Update
function update(delta) {
    mainScene.stepEntry(delta, mainScene)
}

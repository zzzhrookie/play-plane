import * as PIXI from 'pixi.js'

export const game = new PIXI.Application({
  width: 750,
  height: 1080
})

document.body.appendChild(game.view)

export function getContainer() {
  return game.stage
}
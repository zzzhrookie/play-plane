import { createRenderer } from 'vue'
import { Graphics, Text, Container, Sprite, Texture } from 'pixi.js'

const renderer = createRenderer({
  createElement (type) {
    let element;
    switch (type) {
      case 'container':
        element = new Container()
        break;
      case 'sprite': 
        element = new Sprite()
      default:
        break;
    }
    return element
  },
  insert (el, parent) {
    parent.addChild(el)
  },
  patchProp (el, key, prevValue, nextValue) {
    switch (key) {
      case 'texture':
        el.texture = Texture.from(nextValue)
        break;
      case 'onClick': 
        el.on('pointertap', nextValue)
        break;
      default:
        el[key] = nextValue
    }
    
  },
  parentNode (node) {},
  nextSibling (node) {},
  remove(el) {},
  setElementText (node, text) {
    const cText = new Text(text)
    node.addChild(cText)
  },
  createText (text) {
    return new Text(text)
  }
})

export function createApp(rootComponent) {
  return renderer.createApp(rootComponent)
}
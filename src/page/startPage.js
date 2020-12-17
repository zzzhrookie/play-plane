import { defineComponent, h } from 'vue'
import startPageImg from '../assets/start_page.jpg'
import startBtnImg from '../assets/startBtn.png'

export default defineComponent({
  setup (props, ctx) {
    
    function onClick () {
      ctx.emit('changePage', 'GamePage')
    }

    return {
      onClick
    }
  },
  render (ctx) {
    return h('container', [
      h('sprite', { texture: startPageImg }),
      h('sprite', {
        texture: startBtnImg,
        x: 226,
        y: 513,
        interactive: true,
        onClick: ctx.onClick
      })
    ])
  }
})
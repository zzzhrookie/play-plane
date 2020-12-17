import { defineComponent, h, reactive, ref, toRefs, watch } from 'vue'
import enemyImg from '../assets/enemy.png'

export default defineComponent({
  props: ['x', 'y'],
  setup (props) {
    const { x, y } = toRefs(props)
    
    return {
      x,
      y
    }

  },
  render (ctx) {
    return h('container', {x: ctx.x, y: ctx.y}, [
      h('sprite', {texture: enemyImg})
    ])
  }
    
})
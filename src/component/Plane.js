import { defineComponent, h, reactive, ref, toRefs, watch } from 'vue'
import planeImg from '../assets/plane.png'

export default defineComponent({
  props: ['x', 'y'],
  setup (props) {
    // props 是一个只读的响应式对象
    console.log('props', props)
    console.log(props.x, props.y)
// 
    // 方案一
    // const point = reactive({
    //   x: props.x,
    //   y: props.y
    // })

    // watch(props, value => {
    //   // console.log(value)
    //   point.x = value.x
    //   point.y = value.y
    // })
    // return {
    //   point
    // }

    // 方案二
    // ! 解决响应式丢失问题
    const { x, y } = toRefs(props)
    
    return {
      x,
      y
    }

  },
  render (ctx) {
    return h('container', {x: ctx.x, y: ctx.y}, [
      h('sprite', {texture: planeImg})
    ])
  }
    
})
import { defineComponent, h, reactive } from 'vue'
import Map from '../component/Map'
import { game } from '../Game'
import Plane from '../component/Plane'
import EnemyPlane from '../component/EnemyPlane'
import { hitTestObject } from '../utils'

export default defineComponent({
  setup () {
    const { planePos } = useCreatePlane()
    const { enemyInfo } = useCreateEnemyPlane()

    game.ticker.add(() => {
      enemyInfo.forEach(info => {
        info.y++
      })

      // 碰撞检测
      // 矩形碰撞
      // hitTestObject
      enemyInfo.forEach(info => {
        if (hitTestObject(info, planePos)) {
          console.log('hit')
        }
      })
    })

    return {
      planePos,
      enemyInfo
    }
  },
  render (ctx) {
    let enemyPlanes = ctx.enemyInfo.map( info => {
      return h(EnemyPlane, { x: info.x, y: info.y })
    })
    return h('container', [h(Map), h(Plane, {x: ctx.planePos.x, y: ctx.planePos.y}), ...enemyPlanes])
  }
})

function useCreatePlane() {
  const planePos = reactive({
    x: 150,
    y: 450,
    width: 258,
    height: 364
  })

  // 键盘控制飞机移动
  const speed = 15
  window.addEventListener('keydown', e => {
    switch (e.code) {
      case 'ArrowUp':
        planePos.y -= speed
        break;
      case 'ArrowDown':
        planePos.y += speed
        break;
      case 'ArrowLeft':
        planePos.x -= speed
        break;
      case 'ArrowRight':
        planePos.x += speed
        break;
    
      default:
        break;
    }

    e.stopPropagation()
  })

  return {
    planePos
  }
}

function useCreateEnemyPlane() {
  const enemyInfo = reactive([
    {
      x: 50,
      y: 0,
      width: 308,
      height: 207
    }
  ])
  return {
    enemyInfo
  }
}


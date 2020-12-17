import { h, defineComponent, ref, computed } from 'vue'
import StartPage from './page/startPage'
import GamePage from './page/gamePage'

export default defineComponent({
  setup () {
    const curPage = ref('GamePage') // StartPage


    const curPageComp = computed(() => {
      if (curPage.value === 'GamePage') {
        return GamePage
      } 
      return StartPage
    })


    return {
      curPage,
      curPageComp
    }
  },
  render (ctx) {
    const vNode = h('container', [h(ctx.curPageComp, {
      onChangePage (page) {
        ctx.curPage = page
      }
    })])
    return vNode    
  }
})

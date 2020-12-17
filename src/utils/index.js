// 碰撞算法检测

export const hitTestObject = (objA, objB) => {
  return (
    objA.x + objA.width >= objB.x && 
    objA.y + objA.height >= objB.y && 
    objB.x + objB.width >= objA.x && 
    objB.y + objB.height >= objA.y
  )
}
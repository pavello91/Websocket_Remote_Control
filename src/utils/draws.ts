import robot from 'robotjs'
interface IRect {
  width: number
  height?: number
  mouseX: number
  mouseY: number
}

interface ICircle {
  mouseX: number
  width: number
  mouseY: number
}
export const drawRectangle = ({
  width,
  height = width,
  mouseX,
  mouseY
}: IRect): void => {
  let newY = mouseY + -height
  let newX = mouseX + -width

  robot.mouseToggle('down')

  robot.moveMouseSmooth(mouseX, newY)
  robot.moveMouseSmooth(newX, newY)

  newY += height

  robot.moveMouseSmooth(newX, newY)

  newX += width

  robot.moveMouseSmooth(newX, newY)
  robot.mouseToggle('up')
}

export const drawCircle = ({
  mouseX,
  width, 
  mouseY,
}: ICircle): void => {
  let angle = 0
  robot.moveMouse(mouseX + width, mouseY)
  robot.mouseToggle('down')

  for (angle; angle < Math.PI * 2; angle += 0.01) {
    robot.moveMouse(mouseX + width * Math.cos(angle), mouseY + width * Math.sin(angle))
  }
  
  robot.mouseToggle('up')
}
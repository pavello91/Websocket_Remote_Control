import robot from 'robotjs'
import { drawCircle, drawRectangle } from '../utils/draws';


const drawingController = (command: string, args: string[]): void => {
  const [width, height] = args.map((item) => parseInt(item))
  const {x: mouseX, y: mouseY} = robot.getMousePos()

  switch (command) {
    case 'draw_circle':
      drawCircle({mouseX, width, mouseY})
      break;
    case 'draw_rectangle':
      drawRectangle({width, height, mouseX, mouseY})
      break;
    case 'draw_square':
      drawRectangle({width, mouseX, mouseY})
      break;
    default:
      break;
  }
}

export default drawingController
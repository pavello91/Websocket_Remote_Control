import robot from 'robotjs';

const navigationController = (command: string, args: string[]): string => {
  const {x, y} = robot.getMousePos()
  const translateValue = parseInt(args[0])
  let translateX = x
  let translateY = y

  switch (command) {
    case 'mouse_up':
        translateY += -translateValue
        robot.moveMouse(x, translateY)
        return `${command} \0`
      case 'mouse_left':
        translateX += -translateValue
        robot.moveMouse(translateX, y)
        return `${command} \0`
      case 'mouse_down':
        translateY += translateValue
        robot.moveMouse(x, translateY)
        return `${command} \0`
      case 'mouse_right':
        translateX += translateValue
        robot.moveMouse(translateX, y)
        return `${command} \0`
      case 'mouse_position':
        return `${command} ${x}px,${y}px \0`
      default:
        return ''
  }
}

export default navigationController
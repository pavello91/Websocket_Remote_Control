import Jimp from 'jimp';
import robot from 'robotjs'

const screenshotController = async () => {
  const {x, y} = robot.getMousePos()
  const AREA_SIZE = 200;
  const bitmap =  robot.screen.capture(x - AREA_SIZE / 2, y - AREA_SIZE / 2, AREA_SIZE, AREA_SIZE);
  const img = new Jimp(AREA_SIZE, AREA_SIZE);
  img.bitmap.data = bitmap.image;
  const buffer = await img.getBufferAsync(Jimp.MIME_PNG);
  return `prnt_scrn ${buffer.toString('base64')}\0`;
}

export default screenshotController
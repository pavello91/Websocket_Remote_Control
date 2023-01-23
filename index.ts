import { httpServer } from "./src/http_server/index";
import { WebSocketServer, createWebSocketStream } from 'ws';
import navigationController from './src/navigation';
import drawingController from './src/drawing';

const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const commands = {
    navigation: [
      'mouse_up',
      'mouse_left',
      'mouse_down',
      'mouse_right',
      'mouse_position'
    ],
  drawing: [
    'draw_circle',
    'draw_rectangle',
    'draw_square'
  ]}

const wss = new WebSocketServer({port: 8080});

wss.on('connection', (ws, request) => {

    const wsStream = createWebSocketStream(ws, {encoding: 'utf-8', decodeStrings: false})
    wsStream.on('data', async (chunk) => {
      const [command, ...args] = chunk.toString().split(' ')
      if (commands.navigation.includes(command)) {
        const res = navigationController(command, args)
        ws.send(res)
      }
          if (commands.drawing.includes(command)) {
        ws.send(command)
          drawingController(command, args)
      }

     
    })

})

process.on('SIGINT', () => {
    console.log('closed wss');
    wss.close()
  })

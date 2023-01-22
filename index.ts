import { httpServer } from "./src/http_server/index";
import { WebSocketServer, createWebSocketStream } from 'ws';
import { mouse } from "@nut-tree/nut-js";

const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({port: 8080});

wss.on('connection', (ws, request) => {

    const wsStream = createWebSocketStream(ws, {encoding: 'utf-8', decodeStrings: false})
    wsStream.on('data', async (chunk) => {
      const [command, ...args] = chunk.toString().split(' ')
     
    })

}
)

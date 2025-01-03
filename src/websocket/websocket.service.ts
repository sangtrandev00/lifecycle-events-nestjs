import { Injectable } from '@nestjs/common';
import { Server } from 'ws';
@Injectable()
export class WebsocketService {
    private server: Server;

    constructor() {
        this.server = new Server({ port: 8080 });
        this.server.on('connection', (socket) => {
            console.log('New WebSocket connection');
        });
    }

    onApplicationShutdown() {
        console.log('Closing WebSocket server...');
        this.server.close(() => {
            console.log('WebSocket server closed.');
        });
    }

}

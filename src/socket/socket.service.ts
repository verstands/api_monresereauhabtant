// src/socket/socket.service.ts
import { Injectable } from '@nestjs/common';
import { Server } from 'socket.io';

@Injectable()
export class SocketService {
  private server: Server;

  setServer(server: Server) {
    this.server = server;
  }

  emitNotification(data: any) {
    if (this.server) {
      this.server.emit('notification', data); 
    }
  }
}

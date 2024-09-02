import {
    WebSocketGateway,
    WebSocketServer,
    OnGatewayInit,
    OnGatewayConnection,
    OnGatewayDisconnect,
  } from '@nestjs/websockets';
  import { Server, Socket } from 'socket.io';
  import { Logger } from '@nestjs/common';
  
  @WebSocketGateway()
  export class NotificationGateway
    implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
  {
    @WebSocketServer() server: Server;
    private logger: Logger = new Logger('NotificationGateway'); 
   
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    afterInit(server: Server) {
      this.logger.log('Initialized');
    }
  
    handleConnection(client: Socket) {
      this.logger.log(`Client connected: ${client.id}`);
    }
  
    handleDisconnect(client: Socket) {
      this.logger.log(`Client disconnected: ${client.id}`);
    }
  
    sendNotification(notification: { title: string; description: string , id:string}) {
        this.server.emit('notify', notification);
      }
  }
  
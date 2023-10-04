/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { AmqpConnection } from '@nestjs-plus/rabbitmq'; // Importa el cliente RabbitMQ de NestJS

@Injectable()
export class MessagingService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  public async enviarMensajeCompetencia(msg: any) {
    await this.amqpConnection.publish('exchangeTopic', 'topic.*', msg,);
  }

  public async enviarMensajeMessagePerInstance(msg: any) {
    await this.amqpConnection.publish('exchangeDirect', 'direct.rabbit', msg);
  }

  public async eventFanOut(msg: any) {
    await this.amqpConnection.publish('fanOut1', '', msg);
  }
}
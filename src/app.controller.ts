import { Controller, Post, Body } from '@nestjs/common';
import { MessagingService } from './serviceMessagin';

@Controller('')
export class MessagingController {
  constructor(private readonly messagingService: MessagingService) {}

  @Post('envia')
  async enviarCompetencia(@Body() msg: any) {
    await this.messagingService.enviarMensajeCompetencia(msg);
    return 'Mensaje enviado a la cola subscribe-route1';
  }

  @Post('enviar')
  async enviarMessagePerInstance(@Body() msg: any) {
    await this.messagingService.enviarMensajeMessagePerInstance(msg);
    return 'Mensaje enviado a la cola subscribe-route2';
  }
  @Post('envi')
  async enviarMessagePerInstanc(@Body() msg: any) {
    await this.messagingService.eventFanOut(msg);
    return 'Mensaje enviado a la cola subscribe-route2';
  }
}

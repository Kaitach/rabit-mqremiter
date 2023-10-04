import { Module } from '@nestjs/common';
import { RabbitExampleModule } from './rabbitmq.module';

@Module({
  imports: [RabbitExampleModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}

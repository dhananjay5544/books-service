import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { KAFKA_BROKERS } from './environments';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: [KAFKA_BROKERS],
        },
        consumer: {
          groupId: 'book-consumer',
        },
      },
    },
  );
  await app.listen(() => 'bookservice is listening');
}
bootstrap();

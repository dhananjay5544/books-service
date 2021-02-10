import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { TYPEORM } from './environments';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...TYPEORM,
      type: 'mysql',
      synchronize: true,
      logging: false,
      entities: ['./dist/**/**.entity.js'],
    }),
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

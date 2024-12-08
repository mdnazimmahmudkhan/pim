import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://127.0.0.1:27017/pim',
      database: 'pim',
      useNewUrlParser: true,
      useUnifiedTopology: true,
      entities: [User],
    }),
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

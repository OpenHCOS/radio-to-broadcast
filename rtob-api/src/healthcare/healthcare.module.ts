import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { EventEntity } from './event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventEntity])],
  components: [EventService],
  controllers: [EventController],
})
export class HealthcareModule {}
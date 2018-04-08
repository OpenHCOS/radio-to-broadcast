import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HealthcareModule } from './healthcare/healthcare.module';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), HealthcareModule],
  controllers: [AppController],
  components: [],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}

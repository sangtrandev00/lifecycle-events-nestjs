import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { DataSource } from 'typeorm';

@Module({
  providers: [DatabaseService, DataSource],
  exports: [DatabaseService, DataSource],
})
export class DatabaseModule { }

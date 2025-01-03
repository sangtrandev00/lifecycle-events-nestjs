import { Module } from '@nestjs/common';
import { LogService } from './log.service';
import { LogRepository } from './log.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Log } from './log.entity'; // Forget datasource to connect to database first!

@Module({
    imports: [TypeOrmModule.forFeature([Log])],
    providers: [LogService, LogRepository],
    exports: [LogService, LogRepository],
})
export class LogModule { }

import { Module } from '@nestjs/common';
import { SchedulerService } from './schedule.service';

@Module({
    providers: [SchedulerService],
    exports: [SchedulerService],
})
export class ScheduleModule { }

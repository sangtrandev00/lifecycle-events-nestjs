import { Injectable, OnModuleInit, OnApplicationShutdown } from '@nestjs/common';
import { CronJob } from 'cron';

@Injectable()
export class SchedulerService implements OnModuleInit, OnApplicationShutdown {
    private job: CronJob;

    onModuleInit() {
        this.job = new CronJob('0 * * * *', () => {
            console.log('Running scheduled job every hour');
        });
        this.job.start();
        console.log('Scheduler initialized and job started.');
    }

    onApplicationShutdown() {
        console.log('Stopping scheduler...');
        this.job.stop();
        console.log('Scheduler stopped.');
    }
}

import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class TaskService {
    constructor(private readonly taskQueue: Queue) { }

    async onApplicationShutdown() {
        console.log('Stopping task queue...');
        await this.taskQueue.close();
    }

}

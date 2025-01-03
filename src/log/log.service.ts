import { Injectable, OnApplicationShutdown } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Log } from './log.entity';

@Injectable()
export class LogService implements OnApplicationShutdown {
    constructor(
        @InjectRepository(Log)
        private readonly logRepository: Repository<Log>,
    ) { }

    async onApplicationShutdown() {
        console.log('Saving shutdown log...');
        await this.logRepository.save({ message: 'Application shutdown' });
        console.log('Shutdown log saved.');
    }
}

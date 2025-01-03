// How to create a repository
// import { EntityRepository, Repository } from 'typeorm';
// import { Log } from './log.entity';

// @EntityRepository(Log)
// export class LogRepository extends Repository<Log> { }

import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Log } from './log.entity'; // Ensure you import your Log entity
import { InjectRepository } from '@nestjs/typeorm';

@Injectable() // {{ edit_1 }}
export class LogRepository { // {{ edit_2 }}
    constructor(
        @InjectRepository(Log) // {{ edit_3 }}
        private readonly logRepository: Repository<Log>,
    ) { }

    // You can add custom methods here to interact with logRepository
    // Example:
    async findAll(): Promise<Log[]> {
        return this.logRepository.find();
    }
}
import { Injectable, OnModuleInit } from '@nestjs/common';
// import { RedisClient } from 'redis'; // Example of using Redis with life cycles
@Injectable()
export class CacheService implements OnModuleInit {
    // private client: RedisClient;

    onModuleInit() {
        // this.client = new RedisClient({ host: 'localhost', port: 6379 });
        // console.log('Redis client initialized');
    }

}

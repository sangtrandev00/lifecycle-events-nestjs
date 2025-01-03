import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from './cache/cache.module';
import { DatabaseModule } from './database/database.module';
import { TaskModule } from './task/task.module';
import { ScheduleModule } from './schedule/schedule.module';
import { DataModule } from './data/data.module';
import { WebsocketModule } from './websocket/websocket.module';
import { RabbitMqService } from './rabbit-mq/rabbit-mq.service';
import { RabbitMqModule } from './rabbit-mq/rabbit-mq.module';
import { FileModule } from './file/file.module';
import { MetricsModule } from './metrics/metrics.module';
import { LogModule } from './log/log.module';

@Module({
  imports: [CacheModule, ScheduleModule, DataModule, WebsocketModule, RabbitMqModule, FileModule, MetricsModule, LogModule],
  controllers: [AppController],
  providers: [AppService, RabbitMqService],
})
export class AppModule { }

import { Injectable } from '@nestjs/common';
import * as amqp from 'amqplib';

@Injectable()
export class RabbitMqService {
    private connection: amqp.Connection;
    private channel: amqp.Channel;

    async connect() {
        this.connection = await amqp.connect('amqp://localhost');
        this.channel = await this.connection.createChannel();
        console.log('RabbitMQ connected.');
    }

    async onApplicationShutdown() {
        console.log('Closing RabbitMQ connection...');
        await this.channel.close();
        await this.connection.close();
        console.log('RabbitMQ connection closed.');
    }

}

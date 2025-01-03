import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import * as Prometheus from 'prom-client';

@Injectable()
export class MetricsService implements OnApplicationBootstrap {
    onApplicationBootstrap() {
        const collectDefaultMetrics = Prometheus.collectDefaultMetrics;
        collectDefaultMetrics();
        console.log('Prometheus metrics initialized.');
    }
}

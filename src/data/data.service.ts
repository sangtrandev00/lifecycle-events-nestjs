import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class DataService implements OnApplicationBootstrap {
    private cache = {};

    async onApplicationBootstrap() {
        console.log('Fetching initial data...');
        const response = await axios.get('https://api.example.com/data');
        this.cache = response.data;
        console.log('Data fetched and cached:', this.cache);
    }
}

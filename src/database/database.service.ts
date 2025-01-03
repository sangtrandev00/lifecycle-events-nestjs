import { Injectable, OnApplicationShutdown } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class DatabaseService implements OnApplicationShutdown {
    // constructor(private readonly dataSource: DataSource) {
    //     this.dataSource = new DataSource({ // {{ edit_2 }}
    //         type: 'mssql', // Specify the database type
    //         host: 'localhost', // Your database host
    //         port: 1433, // Default port for SQL Server
    //         username: 'sa', // Your database username
    //         password: 'YourPassword123', // Your database password
    //         database: 'your_database', // Your database name
    //         entities: [/* your entities */], // Specify your entities here
    //         synchronize: true, // Set to true for development; false for production
    //     });
    // }

    async onModuleInit() {
        // await this.dataSource.initialize(); // Initialize the data source
        // console.log('Database connection established'); // {{ edit_3 }}
    }

    async onApplicationShutdown() {
        // console.log('Closing database connection...');
        // await this.dataSource.destroy();
    }

}

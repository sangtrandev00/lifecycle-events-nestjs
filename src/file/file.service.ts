import { Injectable, OnModuleDestroy } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class FileService implements OnModuleDestroy {
    private tempFilePath = './temp-file.txt';

    createTempFile() {
        fs.writeFileSync(this.tempFilePath, 'Temporary data');
        console.log('Temporary file created.');
    }

    onModuleDestroy() {
        if (fs.existsSync(this.tempFilePath)) {
            fs.unlinkSync(this.tempFilePath);
            console.log('Temporary file deleted.');
        }
    }
}

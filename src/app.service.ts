import { Injectable, OnApplicationBootstrap } from '@nestjs/common';

@Injectable()
export class AppService implements OnApplicationBootstrap {
  getHello(): string {
    return 'Hello World!';
  }

  onApplicationBootstrap() {
    console.log('Application bootstrap complete.');
    // Ví dụ: gọi API bên ngoài để khởi tạo dữ liệu.
  }
}

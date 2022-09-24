import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PoductsModule } from './products/products.module';

@Module({
  imports: [PoductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

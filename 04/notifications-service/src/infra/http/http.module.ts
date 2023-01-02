import { Module } from '@nestjs/common';
import { NotificationController } from '../http/controller/notifications.controller';

@Module({
  imports: [],
  controllers: [NotificationController],
})
export class HttpModule {}

import { Module } from '@nestjs/common';
import { SendNotification } from '@application/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationController } from '../http/controller/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationController],
  providers: [SendNotification],
})
export class HttpModule {}

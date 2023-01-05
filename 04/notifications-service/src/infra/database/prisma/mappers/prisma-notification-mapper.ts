import { Notification } from '@application/entities/notification';

class PrismaNotificationMapper {
  static toPrisma({
    id,
    category,
    content,
    recipientId,
    readAt,
    createdAt,
  }: Notification) {
    return {
      id,
      category,
      content: content.value,
      recipientId,
      readAt,
      createdAt,
    };
  }
}

export { PrismaNotificationMapper };

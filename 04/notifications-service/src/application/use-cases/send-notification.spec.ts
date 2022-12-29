import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a new notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'recipient_id',
    });

    expect(notification).toBeTruthy();
  });
});

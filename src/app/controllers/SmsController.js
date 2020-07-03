/* eslint-disable prettier/prettier */
const zenvia = require('@zenvia/sdk');

class SmsController {

  async send(request, response) {
    const { from, to, contents } = request.body;
 
    const client = new zenvia.Client('sosHOWby2EokGLqMZnztDh2JCbSsVcMx0I50');

    const sms = client.getChannel('sms');

    const content = new zenvia.TextContent(
      'Hey Valentina, não fique para trás! Não esqueça de ler seu livro hoje e ficar junto da sua turma no grupo de leitura.'
    );

    await sms.sendMessage('upbeat-ink', `${to}`, content)
      .then(res => {
        console.log('Response:', res);
      })
      .catch(error => {
        console.log('Error: ', error);
      });

    const subscriptionMessage = new zenvia.MessageSubscription({
        url: 'https://webhook.site/7afe5ab4-ebe2-4a74-9fbc-71ccb4280e6d'
    },
    {
        channel: 'sms'
    });
    const messageResponse = await client.createSubscription(subscriptionMessage);

    const subscriptionStatus = new zenvia.MessageStatusSubscription({
        url: 'https://webhook.site/7afe5ab4-ebe2-4a74-9fbc-71ccb4280e6d'
    },
    {
        channel: 'sms'
    });
    const messageStatusResponse = await client.createSubscription(subscriptionStatus);

    const webhook = new zenvia.WebhookController({
        messageEventHandler: (messageEvent) => {
          console.log('Message event:', messageEvent);
        },
        messageStatusEventHandler: (messageStatusEvent) => {
          console.log('Message status event:', messageStatusEvent);
        },
        client,
        url: 'https://webhook.site/7afe5ab4-ebe2-4a74-9fbc-71ccb4280e6d',
        channel: 'sms',
    });
    webhook.init();

    console.log(messageResponse, messageStatusResponse);
    
    return response.json({ 'Status': 'Ok'});
  }

};

module.exports = SmsController;

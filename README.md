# Sample Webhook Listener with Node + Express

This sample app works as a webhook listener using Node and ExpressJS.

**Prerequisites**: [Node.js](https://nodejs.org/en/).

## Getting Started

To install this sample, run the following commands:

```bash
https://github.com/ALgosZen/stripewebhook.git
cd ngrok-webhook-nodejs-sample
npm i
```

This will get the project installed locally.

## Launching the app

Now you can launch the app:

```bash
npm start
```

The app runs by default on port 3000

## Making this app public with ngrok

To make your app public using ngrok, enter:

```bash
ngrok http 3000
```
## how to install and run stripe webhook with ngrok
1. Download the ngrok agent
2. Go to the ngrok dashboard and copy your authtoken. 
3. Add the authtoken to your ngrok agent:
4. Start ngrok by running the command ngrok http <port>:
5. stripe webhook - Enter the URL provided by ngrok in stripe webhook endpoint url. 
6. select the events to listen to..
7. BONUS tip: To inspect Stripe's event requests, launch the ngrok web interface (i.e. http://127.0.0.1:4040)

## License

Apache 2.0, see [LICENSE](LICENSE).
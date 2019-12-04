# Flock

Web and documentation for [flock.rest](https://floc.rest).

Flock is an API on top of multiple notification services to overcome repetitive building and platform idiosyncrasies. Services include Expo, Facebook, Mailgun, Nexmo, Slack, Twilio etc.

### Local Development

```bash
npm start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Deployment

```bash
npm run build 
```

This command generates static content into the `build` directory and can be served using any static contents hosting service. Commit build folder and the site will auto deploy (to Fast.io).
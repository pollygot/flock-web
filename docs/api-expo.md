---
id: api-expo
title: Expo
---

A RESTful API for interacting with [Expo](https://expo.io).

## Send a Push Notifications

### Endpoint

### Getting started

```js
{
  "payload": {
    "to": "ExponentPushToken[...]", 
    "title": "...",
    "body": "..."
  }
}
```

##  Options


```js
{
  "payload": { 
    // Required
    "to": "ExponentPushToken[...]",          // {string} An Expo push token specifying the recipient of this message.

    // Optional
    "data": {},           // {object}? A JSON object delivered to your app.
    "title": "...",       // {string}? The title to display in the notification.
    "body": "...",        // {string}? The message to display in the notification
    "ttl": "...",         // {number}? Time to Live: the number of seconds for which the message may be kept around for redelivery if it hasn't been delivered yet.
    "expiration": "...",  // {number}? A timestamp since the UNIX epoch specifying when the message expires.
    "priority": "...",    // {'default' | 'normal' | 'high'}? The delivery priority of the message.

    // iOS-specific fields
    "badge": 0,           // {number}? Number to display in the badge on the app icon. Specify zero to clear the badge.
    "sound": "...",       // {'default' | null}? A sound to play when the recipient receives this notification.

    // Android-specific fields
    "channelId": "...",    // {string}? The message to display in the notification
  }
}
```

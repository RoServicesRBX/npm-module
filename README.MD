# secureservice api

the module for the secureservice ranking api

https://www.secureservice.app

raw api docs: https://docs.secureservice.app

## Installation

```bash
npm install @secureservice/api
```

## Usage

```javascript
const secureservice = require('@secureservice/api');

const gamekey = 'your gamekey';
const groupId = 'your group id';

const client = new secureservice(gamekey, groupId);

// promote a user
await client.promote('user id');

// demote a user
await client.demote('user id');

// accept a join request
await client.handleJoinRequest('user id', true);

// decline a join request
await client.handleJoinRequest('user id', false);

// shout 'SecureService rocks'
await client.shout('SecureService rocks');
```

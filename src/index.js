
const fetch = require('node-fetch');
class SecureService {
    constructor(gamekey, groupId) {
        this.gamekey = gamekey;
        this.groupId = groupId;
    }


    async demote(userId) {
        const response = await fetch('https://api.roservices.app/api/ranking/demote', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'key': this.gamekey,
            },
            body: JSON.stringify({ userId: userId, groupId: this.groupId }),
        });
        return response.json();
    }

    async promote(userId) {
        const response = await fetch('https://api.roservices.app/api/ranking/promote', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'key': this.gamekey,
            },
            body: JSON.stringify({ userId: userId, groupId: this.groupId }),
        });
        return response.json();
    }

    async setRank(userId, rank) {
        const response = await fetch('https://api.roservices.app/api/ranking/setrank', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'key': this.gamekey,
            },
            body: JSON.stringify({ userId: userId, groupId: this.groupId, rankId: rank }),
        });
        return response.json();
    }

    async shout(message) {
        const response = await fetch('https://api.roservices.app/api/ranking/shout', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'key': this.gamekey,
            },
            body: JSON.stringify({ groupId: this.groupId, message: message }),
        });
        return response.json();
    }

    async handleJoinRequest(userId, accept) {
        const response = await fetch('https://api.roservices.app/api/ranking/handlejoinrequest', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'key': this.gamekey,
            },
            body: JSON.stringify({ groupId: this.groupId, userId: userId, boolean: accept }),
        });
        return response.json();
    }
}

module.exports = SecureService;

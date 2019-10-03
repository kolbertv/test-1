const https = require("https");
const {
    parseTitleToJson
} = require('../helpers')

class GoogleNews {
    constructor() {
        this.url = 'https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en';
        this.rawData = '';
    }
    getTitles() {
        return new Promise((resolve, reject) => {
            https
                .get(this.url, res => {
                    res.on("data", chunk => {
                        this.rawData += chunk;
                    });
                    res.on("end", () => {
                        resolve(parseTitleToJson(this.rawData));
                    });
                })
                .on("error", e => {
                    console.log(`Got error: ${e.message}`);
                    reject(JSON.stringify({status: 200, message: 'Cannot get titles of news, please try again later (1)'}));
                });
        })
    }
}
module.exports = GoogleNews;

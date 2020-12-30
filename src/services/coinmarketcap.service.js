const http = require('https');
const cheerio = require('cheerio');
const CoinMarketCap = require('../models/coinmarketcap.model.js')

const scrapeCoinMarketCap = (url, cb) => {
    http.get(url, (res) => {
        let html = '';
  
        res.on('data', chunk => {
            html += chunk;
        });
  
        res.on('end', () => {
            const parser = new Parser();
            const rates = parser.parse(html);
            cb(rates);
        });
    });
};

class Parser {
    // constructor(state) {
    //     this.state = state;
    // }

    parse(html) {
        const $ = cheerio.load(html);
        const scrapedData = [];
        const tableHeaders = [];
        const headers = ['name', 'price', '24h', '7d', 'market cap', 'volume', 'circulating supply']

        $("table > thead > tr").each((index, element) => {
            const ths = $(element).find("th");
            $(ths).each((i, element) => {
                tableHeaders.push(
                    $(element)
                    .text()
                    .toLowerCase()
                );
            });
        });
        console.log(tableHeaders)

        $("table > tbody > tr").each((index, element) => {
            const tds = $(element).find("td");
            const tableRow = {};
            $(tds).each((i, element) => {
                if (headers.includes(tableHeaders[i])) {
                    tableRow[tableHeaders[i]] = $(element).text();
                }
            });
            scrapedData.push(tableRow);
        });
        console.log(scrapedData);
        return scrapedData
    }
}

module.exports = {
    scrapeCoinMarketCap
};
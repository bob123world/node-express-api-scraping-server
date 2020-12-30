const CoinMarketCap = require("../models/coinmarketcap.model.js");
const service = require("../services/coinmarketcap.service.js");

const getAll = (req, res) => {
    // const state = req.params.stateName;

    service.scrapeCoinMarketCap("https://coinmarketcap.com/", (scrapedData) => {
        res.send(scrapedData)
    })
}

module.exports = {
    getAll
};
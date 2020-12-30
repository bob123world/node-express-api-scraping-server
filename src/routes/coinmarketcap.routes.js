const coinmarketcap = require("../controllers/coinmarketcap.controller.js");

module.exports = app => {
    
    // Get all coins of Coinmarketcap
    app.route("/coinmarketcap").get(coinmarketcap.getAll)
  };
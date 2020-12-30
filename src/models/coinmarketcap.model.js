class CoinMarketCap {
    constructor(name, price, twentyFourHours, sevenDays, marketCap, volume, circulatingSupply) {
        this.name = name;
        this.price = price;
        this.twentyFourHours = twentyFourHours;
        this.sevenDays = sevenDays;
        this.marketCap = marketCap;
        this.volume = volume;
        this.circulatingSupply = circulatingSupply;
    }
}

module.exports = {
    CoinMarketCap
};
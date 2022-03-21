const shortId = require("shortid");

class Ticket {
    /**
     * constructor function
     * @param {string} username 
     * @param {string} price 
     */
  constructor(username, price) {
    this.id = shortId.generate();
    this.username = username;
    this.price = price;
    this.updateAt = new Date();
    this.createAt = new Date();
  }
}

module.exports = Ticket;

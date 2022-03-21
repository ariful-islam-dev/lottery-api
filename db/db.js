const Ticket = require("../modals/Ticket");

class MyDB {
  constructor() {
    this.tickets = [];
  }
  /**
   *
   * @param {string} username
   * @param {number} price
   * @returns {Ticket} return a ticket Object
   */

  create(username, price) {
    const ticket = new Ticket(username, price);
    this.tickets.push(ticket);

    return ticket;
  }

  /**
   * Create multiple ticket for a single user
   * @param {string} username
   * @param {number} price
   * @param {number} quantity
   * @returns {Array} Ticket
   *
   */

  bulkCreate(username, price, quantity) {
    const result = [];
    for (let i = 0; i < quantity; i++) {
      const ticket = this.create(username, price);
      result.push(ticket);
    }
    return result;
  }

  /**
   *  return all available tickets
   *
   */

  find() {
    return this.tickets;
  }

  /**
   * find ticket by ticket i
   * @param {string} ticketId
   * @returns {Ticket}
   */
  findById(ticketId) {
    const ticket = this.tickets.find(
      /**
       * @param {Ticket}  ticket
       */
      (ticket) => 
        ticket.id === ticketId
      
    );

    return ticket;
  }

  /**
   * Find all tickets for a gimen user
   * @param {Ticket} username
   * @returns {Array}
   */

  findByUsername(username) {
    const tickets = this.tickets.filter(
      /**
       * @params {Ticket} ticket
       */
      (ticket) => ticket.username === username
    );

    return tickets;
  }

  /**
   *
   * @param {string} ticketId
   * @param {{username: string, price: number}} ticketBody
   * @returns {Ticket}
   */

  updateById(ticketId, ticketBody) {
    const ticket = this.findById(ticketId);
    ticket.userName = ticketBody.username ?? ticket.username;
    ticket.price = ticketBody.price ?? ticket.price;
    ticket.updateAt = new Date();

    return ticket;
  }

  /**
   *
   * @param {string} ticketId
   * @param {{ price: number}} ticketBody
   * @returns {Ticket}
   */

  updateByUsername(username, ticketBody) {
    const ticket = this.findByUsername(username);
    ticket.username = ticketBody.username ?? ticket.username
    ticket.price = ticketBody.price ?? ticket.price;
    ticket.updateAt = new Date();
    return ticket;
  }

  /**
   *
   * @param {string} ticketId
   */

  deleteById(ticketId) {
    const index = this.tickets.findIndex((ticket) => ticket.id === ticketId);
    if (index !== -1) {
      this.tickets.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  /**
   *
   * @param {string} username
   */

  deleteByUsername(username) {
    const index = this.tickets.findIndex((ticket) => ticket.username === username);
    if (index !== -1) {
      this.tickets.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  /**
   *
   * @param {number} winnerCount ;
   * @returns {Array}
   */
  draw(winnerCount) {
    let winnerIndexes = new Array(winnerCount);

    let index = 0;
    while (index < winnerCount) {
      let winnerIndex = Math.floor(Math.random() * this.tickets.length);  
      
      if (!winnerIndexes.includes(winnerIndex)) {
        winnerIndexes[index++] = winnerIndex;
        continue;
      }
    }

    // for (let i = 0; i < indexes.length; i++) {
    //   let index = Math.floor(Math.random() * this.tickets.length);

    // if (indexes.includes(index)) {
    //   index = Math.floor(Math.random() * this.tickets.length);
    // }

    //   indexes[i] = index;
    // }

    const winners = winnerIndexes.map((index) => this.tickets[index]);
    return winners;
  }
}

const myDB = new MyDB();

module.exports = myDB;

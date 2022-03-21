# Lottery API

- Sell lottery ticket
- Update lottery ticket
- delete lottery ticket
- get all tickets
- get ticket by id
- Bulk buy (user can buy multiple ticket at a time)
- raffle draw

### Ticket:

- Number (unique)
- username
- price
- timestamp

### Routes

- /tickets/sell - create Tickets

- /tickets/bulk - bulk sell ticket

- /tickets/t/:ticketId - (GET) find single ticket
- /tickets/t/ticketId - (PATCH) update ticket by id
- /tickets/t/ticketId - (DELETE) delete ticket by id

- /tickets/u/:username - (GET) Find tickets for a given user
- /tickets/u/:username - (PATCH) Update tickets for a given user
- /tickets/u/:username - (DELETE) Delete All tickets for a given user

- /tickets/draw

- /tickets - Find All Tickets

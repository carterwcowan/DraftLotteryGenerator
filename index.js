
let userList = require('./standings');

function createTickets(userList) {
    let ticketList = [];
    userList.forEach(element => {
        for (var i = 0; i <= userList.length - element.standing; i++) {
            ticketList.push(element.player);
        }
    });
    return ticketList;
}

function run() {
    const draftOrder = getDraftOrder(userList.standings);
    console.log(draftOrder);
}

function getDraftOrder(userList) {
    let ticketList = createTickets(userList);
    let picksRemaining = userList.length;
    let draftOrder = [];

    for (var i = picksRemaining; i > 0; i--) {
        let pick = makePick(ticketList);
        draftOrder.push(pick);
        picksRemaining--;
        ticketList = ticketList.filter(player => player != pick);
    }

    return draftOrder;
}

function makePick(ticketArray) {
    return ticketArray[Math.floor(Math.random() * ticketArray.length)]
}

run();
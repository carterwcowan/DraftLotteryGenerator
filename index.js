
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
        ticketList = shuffle(ticketList);
        let pick = makePick(ticketList);
        draftOrder.push(pick);
        picksRemaining--;
        ticketList = ticketList.filter(player => player != pick);
    }

    return draftOrder;
}

function makePick(ticketArray) {
    let index = Math.floor(Math.random() * ticketArray.length);
    return ticketArray[index];
}

function shuffle(array) {
    var m = array.length, t, i;

    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}

run();
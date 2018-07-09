let ticketArray = [8, 8, 8, 8, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1];
let picksLeft = 8;

function run() {
    console.log('--- INITIAL LOTTERY ---');
    console.log(ticketArray);


    while (picksLeft > 0) {
        console.log('number of tickets left:', ticketArray.length);
        console.log('tickets:', ticketArray);

        let pick = makePick(ticketArray);
        console.log('Pick:', pick);
        ticketArray = removeTickets(ticketArray, pick);
        picksLeft--;
    }

}

function makePick(ticketArray) {
    return ticketArray[Math.floor(Math.random() * ticketArray.length)]
}

function removeTickets(ticketArray, ticketToRemove) {
    return ticketArray.filter(item => item != ticketToRemove);
}


run();
let board = [
    ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]
];

let queen = {
    position: {
        x: 0,
        y: 4
    },

    whereabouts: []
};

console.log("Queen Position  " + board[queen.position.x][queen.position.y]);

changeDirection(direction, steps);

function updateposition(x, y) {

    queen.whereabouts.push("[" + [x, y] + "]");
    console.log("Updated Track :" + queen.whereabouts);

}

function changeDirection(direction, steps) {

    switch (direction) {
                    case 'n': {
                        let tempx = queen.position.x - steps;

                        if (tempx >= 0 && tempx < 8) {
                            queen.position.x = tempx;
                            console.log("Current Position is: " + board[queen.position.x][queen.position.y]);
                            updateposition(queen.position.x, queen.position.y);


                        } else {
                            console.log("Outside the Boundary");

                        }
                        break;
                    }


                    case 's': {
                        let tempx = queen.position.x + steps;

                        if (tempx >= 0 && tempx < 8) {
                            queen.position.x = tempx;
                            console.log("Current Position is: " + board[queen.position.x][queen.position.y]);
                            updateposition(queen.position.x, queen.position.y);


                        } else {
                            console.log("Outside the Boundary");

                        }
                        break;
                    }



                    case 'e': {
                        let tempy = queen.position.y + steps;

                        if (tempy >= 0 && tempy < 8) {

                            queen.position.y = tempy;
                            console.log("Current Position is: " + board[queen.position.x][queen.position.y]);
                            updateposition(queen.position.x, queen.position.y);

                        } else {
                            console.log("Outside the Boundary");

                        }
                        break;
                    }



                    case 'w': {
                        let tempy = queen.position.y - steps;

                        if (tempy >= 0 && tempy < 8) {

                            queen.position.y = tempy;
                            console.log("Current Position is: " + board[queen.position.x][queen.position.y]);
                            updateposition(queen.position.x, queen.position.y);

                        } else {
                            console.log("Outside the Boundary");

                        }
                        break;
                    }



                    case 'nw': {
                        let tempx = queen.position.x - steps;
                        let tempy = queen.position.y - steps;

                        if (tempx >= 0 && tempx < 8) {
                            if (tempy >= 0 && tempy < 8) {

                                queen.position.x = tempx;
                                queen.position.y = tempy;
                                console.log("Current Position is: " + board[queen.position.x][queen.position.y]);
                                updateposition(queen.position.x, queen.position.y);

                            } else {
                                console.log("Outside the Boundary");
                            }

                        } else {
                            console.log("Outside the Boundary");
                        }
                        break;
                    }




                    case 'ne': {
                        let tempx = queen.position.x - steps;
                        let tempy = queen.position.y + steps;

                        if (tempx >= 0 && tempx < 8) {
                            if (tempy >= 0 && tempy < 8) {
                                queen.position.x = tempx;
                                queen.position.y = tempy;
                                console.log("Current Position is: " + board[queen.position.x][queen.position.y]);
                                updateposition(queen.position.x, queen.position.y);

                            } else {
                                console.log("Outside the Boundary");
                            }

                        } else {
                            console.log("Outside the Boundary");
                        }
                        break;
                    }

                    case 'se': {
                        let tempx = queen.position.x + steps;
                        let tempy = queen.position.y + steps;

                        if (tempx >= 0 && tempx < 8) {
                            if (tempy >= 0 && tempy < 8) {
                                queen.position.x = tempx;
                                queen.position.y = tempy;
                                console.log("Current Position is: " + board[queen.position.x][queen.position.y]);
                                updateposition(queen.position.x, queen.position.y);

                            } else {
                                console.log("Outside the Boundary");
                            }

                        } else {
                            console.log("Outside the Boundary");
                        }
                        break;
                    }



                    case 'sw': {
                        let tempx = queen.position.x + steps;
                        let tempy = queen.position.y - steps;
                        if (tempx >= 0 && tempx < 8) {
                            if (tempy >= 0 && tempy < 8) {
                                queen.position.x = tempx;
                                queen.position.y = tempy;
                                console.log("Current Position is: " + board[queen.position.x][queen.position.y]);
                                updateposition(queen.position.x, queen.position.y);

                            } else {
                                console.log("Outside the Boundary");
                            }

                        } else {
                            console.log("Outside the Boundary");
                        }
                        break;
                    }

    }

}

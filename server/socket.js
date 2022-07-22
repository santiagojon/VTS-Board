// const server = require('./app');
// const socketio = require('socket.io');

// const changeName = require('./serverReducer/players').changeName;
// const io = socketio(server);
// const serverStore = require('./serverStore');
// const SECONDS = 30;


// const sendPlayerListTo = userOrAll => {
//   const { names, count } = serverStore.getState().players;
//   const nameList = createNameObject(names);
//   userOrAll.emit('setPlayers', {names: nameList, count });
// };

// io.on('connection', (userSocket) => {
//   // when user connects...
//   console.log(userSocket.id, 'a user connected');
//   // sendBoardStateTo(userSocket); everyone starts blank
//   sendPlayerListTo(userSocket);

//   // listeners e.g. if user emits newMsg...
//   userSocket.on('newMsg', (message) => {
//     io.emit('receiveMsg', message);
//   });

//   userSocket.on('pickName', (name) => {
//     // if this socket id has no name
//     if (!serverStore.getState().players.names[userSocket.id]) {
//       serverStore.dispatch(addPlayer(userSocket.id, name));
//     }
//     else { serverStore.dispatch(changeName(userSocket.id, name)); }
//     sendPlayerListTo(io);
//   });

//   // accumulate commands
//   userSocket.on('command', (command) => {
//     serverStore.dispatch(addCommand(command));
//   });

//   userSocket.on('startGame', () => {
//     if (!serverStore.getState().gameStatus.inProgress) {
//       serverStore.dispatch(startGame(SECONDS));
//     }
//   });

//   userSocket.on('disconnect', () => {
//     if (serverStore.getState().players.names[userSocket.id]) {
//       serverStore.dispatch(removePlayer(userSocket.id));
//       io.emit('setPlayers', serverStore.getState().players);
//     }
//   });

// });

// // on tie, defaults to first occurrence of any member of the tie
// // e.g. ['up', 'down', 'down', 'left', 'left', 'up', 'right'] => 'up'
// const findMostCommon = (commandArr) =>
//   commandArr.reduce((mostCommon, current, ind, arr) => {
//     const accCount = arr.filter(str => str === mostCommon).length;
//     const currentCount = arr.filter(str => str === current).length;
//     return accCount >= currentCount
//       ? mostCommon
//       : current;
//   }, null);

// const tickGameState = (tickingInterval, timingInterval) => {
//   if (serverStore.getState().gameStatus.timeRemaining > 0) {
//     const mostPopularCommand = findMostCommon(serverStore.getState().commands);
//     serverStore.dispatch(clearCommands());
//     serverStore.dispatch(move(mostPopularCommand));
//     sendBoardStateTo();
//   }
//   else {
//     sendBoardStateTo();
//     clearInterval(tickingInterval);
//     clearInterval(timingInterval);
//     checkVictoryCondition()
//       ? io.emit('victory')
//       : io.emit('failure');
//     serverStore.dispatch(stopAndResetGame());
//     setTimeout(() => {
//       serverStore.dispatch(clearBoard());
//       sendBoardStateTo();
//       checkForStartAgain();
//     }, 10000);
//   }
// };

// // Waits for game to start.
// let checkForStart = setInterval(checkStart, 1000);
// function checkStart () {
//   if (serverStore.getState().gameStatus.inProgress){
//     clearInterval(checkForStart);
//     serverStore.dispatch(resetBoard());
//     sendBoardStateTo();
//     startTickingGame();
//   }
// }

// function checkForStartAgain () {
//   io.emit('gameStatus', serverStore.getState().gameStatus);
//   checkForStart = setInterval(checkStart, 1000);
// }

// let tickInterval;
// function startTickingGame () {
//   console.log(serverStore.getState().gameStatus);
//   let timeInterval = setInterval(() => {
//     serverStore.dispatch(decrementTime());
//     io.emit('gameStatus', serverStore.getState().gameStatus);
//   }, 995);
//   tickInterval = setInterval(() => {tickGameState(tickInterval, timeInterval);}, 500);

// }

// function checkVictoryCondition () {
//   const grid = serverStore.getState().gameBoard.grid;
//   return Object.keys(grid).map(rowKey => {
//       return Object.keys(grid[rowKey]).map(colKey => grid[rowKey][colKey]);
//     })
//     .reduce((arr, valArr) => [...arr, ...valArr], [])
//     .filter(str => str !== 'blank')
//     .length === 1;
// }


// module.exports = server;
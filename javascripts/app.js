// Rover Object Goes Here
// ======================
var roverOne = {
  name: "RoverOne",
  direction: "S",
  x: 0,
  y: 0,
  travelLog: [],
}
var roverTwo = {
  name: "RoverTwo",
  direction: "S",
  x: 9,
  y: 0,
  travelLog: [],
}
var board = [ 
  [null, null, null, "obsticle", null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, "obsticle", null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  ];
// ======================
function turnLeft(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "N";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "W":
        rover.direction = "S";
      break;
    default: break;
  }
  console.log(`${rover.name} turned left and is now facing ` + rover.direction)
}
function turnRight(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
        rover.direction = "N";
      break;
    default: break;
  }
  console.log(`${rover.name} turned left and is now facing ` + rover.direction);
}
function moveForward(rover){
  for (let i = 0; i < board.length; i++){
    var row = board[i];
    for (let j = 0; j < row.length; j++){
      if (rover.name === board[i][j]){
        board[i][j] = null;
      }
    }
  }
  switch (rover.direction) {
    case "N":
      if (rover.y === 0){
        console.log("End of the road, turn around");
        board[rover.y][rover.x] = rover.name;
      } else if (board[rover.y - 1][rover.x] !== null){
        console.log("Watch out!");
        board[rover.y][rover.x] = rover.name;
      } else {
        rover.y -= 1;
        console.log(`${rover.name} moved forward and is now at X` + rover.x + ", Y" + rover.y);
        rover.travelLog.push(`x${rover.x}y${rover.y}`);
        board[rover.y][rover.x] = rover.name;
      }
      break;
    case "E":
      if (rover.x === 9){
        console.log("End of the road, turn around");
        board[rover.y][rover.x] = rover.name;
      } else if (board[rover.y][rover.x + 1] !== null){
        console.log("Watch out!");
        board[rover.y][rover.x] = rover.name;
      } else {
        rover.x += 1;
        console.log(`${rover.name} moved forward and is now at X` + rover.x + ", Y" + rover.y);
        rover.travelLog.push(`x${rover.x}y${rover.y}`);
        board[rover.y][rover.x] = rover.name;
      }
      break;
    case "S":
      if (rover.y === 9){
        console.log("End of the road, turn around");
        board[rover.y][rover.x] = rover.name;
      } else if (board[rover.y + 1][rover.x] !== null){
        console.log("Watch out!");
        board[rover.y][rover.x] = rover.name;
      } else {
        rover.y += 1;
        console.log(`${rover.name} moved forward and is now at X` + rover.x + ", Y" + rover.y);
        rover.travelLog.push(`x${rover.x}y${rover.y}`);
        board[rover.y][rover.x] = rover.name;
      }
      break;
    case "W":
      if (rover.x === 0){
        console.log("End of the road, turn around");
        board[rover.y][rover.x] = rover.name;
      } else if (board[rover.y][rover.x - 1] !== null){
        console.log("Watch out!");
        board[rover.y][rover.x] = rover.name;
      } else {
        rover.x -= 1;
        console.log(`${rover.name} moved forward and is now at X` + rover.x + ", Y" + rover.y);
        rover.travelLog.push(`x${rover.x}y${rover.y}`);
        board[rover.y][rover.x] = rover.name;
      }
      break;
    default: break; 
    }
  }
function moveBackwards(rover){
  for (let i = 0; i < board.length; i++){
    var row = board[i];
    for (let j = 0; j < row.length; j++){
      if (rover.name === board[i][j]){
        board[i][j] = null;
      }
    }
  }
  switch (rover.direction) {
    case "S":
      if (rover.y === 0){
        console.log("End of the road, turn around");
        board[rover.y][rover.x] = rover.name;
      } else if (board[rover.y - 1][rover.x] !== null){
        console.log("Watch out!");
        board[rover.y][rover.x] = rover.name;
      } else {
        rover.y -= 1;
        console.log(`${rover.name} moved forward and is now at X` + rover.x + ", Y" + rover.y);
        rover.travelLog.push(`x${rover.x}y${rover.y}`);
        board[rover.y][rover.x] = rover.name;
      }
      break;
    case "W":
      if (rover.x === 9){
        console.log("End of the road, turn around");
        board[rover.y][rover.x] = rover.name;
      } else if (board[rover.y][rover.x + 1] !== null){
        console.log("Watch out!");
        board[rover.y][rover.x] = rover.name;
      } else {
        rover.x += 1;
        console.log(`${rover.name} moved forward and is now at X` + rover.x + ", Y" + rover.y);
        rover.travelLog.push(`x${rover.x}y${rover.y}`);
        board[rover.y][rover.x] = rover.name;
      }
      break;
    case "N":
      if (rover.y === 9){
        console.log("End of the road, turn around");
        board[rover.y][rover.x] = rover.name;
      } else if (board[rover.y + 1][rover.x] !== null){
        console.log("Watch out!");
        board[rover.y][rover.x] = rover.name;
      } else {
        rover.y += 1;
        console.log(`${rover.name} moved forward and is now at X` + rover.x + ", Y" + rover.y);
        rover.travelLog.push(`x${rover.x}y${rover.y}`);
        board[rover.y][rover.x] = rover.name;
      }
      break;
    case "E":
      if (rover.x === 0){
        console.log("End of the road, turn around");
        board[rover.y][rover.x] = rover.name;
      } else if (board[rover.y][rover.x - 1] !== null){
        console.log("Watch out!");
        board[rover.y][rover.x] = rover.name;
      } else {
        rover.x -= 1;
        console.log(`${rover.name} moved forward and is now at X` + rover.x + ", Y" + rover.y);
        rover.travelLog.push(`x${rover.x}y${rover.y}`);
        board[rover.y][rover.x] = rover.name;
      }
      break;
    default: break; 
  }
}
function moveCommand(rover, string){
  for (let i = 0; i < string.length; i++){
    switch (string[i]){
      case "f":
        moveForward(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "b":
        moveBackwards(rover);
        break;
      default: 
        console.log("Invalid character. Use only 'f', 'l', 'r', or 'b'");
    }
  }
}
moveCommand(roverOne, "frflfbbbrfff");
moveCommand(roverTwo, "frfffffffff");
console.log(board);
console.log(roverTwo.travelLog);
console.log(roverOne.travelLog);
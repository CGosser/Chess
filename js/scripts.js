//business logic
function Piece(player, type, value) {
  this.player = player;
  this.type = type;
  this.value = value;
  this.position = []
}

function Position(x,y) {
  this.x = x;
  this.y = y;
}
var pieces = []
function createPieces() {
  var br1 = new Piece("B", "R", "4")
  var br1pos = new Position(1,8);
  br1.position.push(br1pos);
  var bn1 = new Piece("B", "N", "2")
  var bn1pos = new Position(2,8);
  bn1.position.push(bn1pos);
  var bb1 = new Piece("B", "B", "3")
  var bb1pos = new Position(3,8);
  bb1.position.push(bb1pos);
  var bq = new Piece("B", "Q", "6")
  var bqpos = new Position(4,8);
  bq.position.push(bqpos);
  var bk = new Piece("B", "K", "5")
  var bkpos = new Position(5,8);
  bk.position.push(bkpos);
  var bb2 = new Piece("B", "B", "3")
  var bb2pos = new Position(6,8);
  bb2.position.push(bb2pos);
  var bn2 = new Piece("B", "N", "2")
  var bn2pos = new Position(7,8);
  bn2.position.push(bn2pos);
  var br2 = new Piece("B", "R", "4")
  var br2pos = new Position(8,8);
  br2.position.push(br2pos);


  var wr1 = new Piece("W", "R", "4")
  var wr1pos = new Position(1,1);
  wr1.position.push(wr1pos);
  var wn1 = new Piece("W", "N", "2")
  var wn1pos = new Position(2,1);
  wn1.position.push(wn1pos);
  var wb1 = new Piece("W", "B", "3")
  var wb1pos = new Position(3,1);
  wb1.position.push(wb1pos);
  var wq = new Piece("W", "Q", "6")
  var wqpos = new Position(4,1);
  wq.position.push(wqpos);
  var wk = new Piece("W", "K", "5")
  var wkpos = new Position(5,1);
  wk.position.push(wkpos);
  var wb2 = new Piece("W", "B", "3")
  var wb2pos = new Position(6,1);
  wb2.position.push(wb2pos);
  var wn2 = new Piece("W", "N", "2")
  var wn2pos = new Position(7,1);
  wn2.position.push(wn2pos);
  var wr2 = new Piece("W", "R", "4")
  var wr2pos = new Position(8,1);
  wr2.position.push(wr2pos);
  pieces.push(br1, bn1, bb1, bk, bq, bb2, bn2, br2, wr1, wn1, wb1, wk, wq, wb2, wn2, wr2)
  for (i=0;i<8; i++){
    var bp = new Piece("B", "P", "1")
    var bppos = new Position(i+1,7);
    bp.position.push(bppos);
    var wp = new Piece("W", "P", "1")
    var wppos = new Position(i+1,2);
    wp.position.push(wppos);
    pieces.push(bp, wp)
  }
}

function unicode(piece){
  if (piece.type == "P" && piece.player == "B"){
    return "&#9823;"
  }
  if (piece.type == "B" && piece.player == "B"){
    return "&#9821;"
  }
  if (piece.type == "N" && piece.player == "B"){
    return "&#9822;"
  }
  if (piece.type == "K" && piece.player == "B"){
    return "&#9818;"
  }
  if (piece.type == "Q" && piece.player == "B"){
    return "&#9819;"
  }
  if (piece.type == "R" && piece.player == "B"){
    return "&#9820;"
  }
  if (piece.type == "P" && piece.player == "W"){
    return "&#9817;"
  }
  if (piece.type == "B" && piece.player == "W"){
    return "&#9815;"
  }
  if (piece.type == "N" && piece.player == "W"){
    return "&#9816;"
  }
  if (piece.type == "K" && piece.player == "W"){
    return "&#9812;"
  }
  if (piece.type == "Q" && piece.player == "W"){
    return "&#9813;"
  }
  if (piece.type == "R" && piece.player == "W"){
    return "&#9814;"
  }
}

//ui logic

function isLegalMove(OneX, OneY, TwoX, TwoY, piece, pieceTwo){
  var oneY = parseInt(OneY)
  var oneX = parseInt(OneX)
  var twoY = parseInt(TwoY)
  var twoX = parseInt(TwoX)
  var possibleMoves = []
  if (piece.type == "P"){
    var polarity = 1
    if (piece.player == "B"){
      polarity = -1
    }
    possibleMoves.push(oneX, oneY+(polarity))
    if (piece.player == "B" && oneY == 7 || piece.player == "W" && oneY == 2){
      possibleMoves.push(oneX, oneY+(polarity*2))
    }
    if (pieceTwo !== 0 && twoX == ((oneX + 1)||(oneX - 1)) && twoY == oneY + polarity){
      possibleMoves.push(twoX, twoY)
    }
  }
for (i = 0; i < possibleMoves.length; i += 2){
  if (possibleMoves[i] == twoX && possibleMoves[i+1] == twoY){
    return true
  }
}
  return false
}

function display(){
  $(".col").empty()
  $(".graveyard").empty()
  pieces.forEach(function(piece){
    var posYObj = piece.position[0]
    var posY = ".Y" + posYObj.y
    var posXObj = piece.position[0]
    var posX = "X" + posXObj.x
    var symbol = unicode(piece)
    if (posYObj.y === 0){
      $(".graveyard").append(symbol)
    } else {
      $(posY + posX).append(symbol)
    }
  })
}

function playerTurnCheck(pos, playerTurn){
  var piece = pieceChecker(pos)
  if (piece.player == playerTurn) {
    return true
  } else {
    return false
  }
}

function pieceChecker(pos) {

  var posArray = pos.split("")
  var y = posArray[1]
  var x = posArray[3]
  var result = 0
  pieces.forEach(function(piece){
    var posYObj = piece.position[0]
    var posY = posYObj.y
    var posXObj = piece.position[0]
    var posX = posXObj.x
    if (posX == x && posY == y){
      result = piece
    }
  })
  return result
}

function playerSwitch(player){
  if (player == "W") {
    return "B";
  } else if (player == "B"){
    return "W";
  }
}

function firstClick(pos, playerTurn){
  if (playerTurnCheck(pos, playerTurn)) {
    return 1;
  } else {
    return 0
  }
}

function secondClick(clickOnePos, clickTwoPos){

  // call islegalmove function pass in argument clicked piece
  var clickedPiece = pieceChecker(clickOnePos)
  var clickedPieceTwo = pieceChecker(clickTwoPos)
  var twoPosArray = clickTwoPos.split("")
  var y = twoPosArray[1]
  var x = twoPosArray[3]
  var onePosArray = clickOnePos.split("")
  var oneY = onePosArray[1]
  var oneX = onePosArray[3]

   if (isLegalMove(oneX,oneY,x,y,clickedPiece, clickedPieceTwo) == false){
     return false
   }

  if (clickedPieceTwo != 0 && clickedPieceTwo.player !== clickedPiece.player){
    var deadPiece = pieceChecker(clickTwoPos)
    clickedPiece.position[0] = new Position(x,y)
    deadPiece.position[0] = new Position(0,0)
    return true
  } else if (clickedPieceTwo.player === clickedPiece.player){
    return false
  } else {
    clickedPiece.position[0] = new Position(x,y)
    return true
  }
}

$(document).ready(function(){
  createPieces()
  display()
  var turn = 0;
  var playerTurn = "W"

  for(i=1;i<9;i++){
    for(j=1;j<9;j++){
      var pos = ".Y" + i + "X" + j;
      $(pos).click(function(){

        if (turn == 0){
          clickOnePos = this.outerHTML.slice(16,20)

          turn += firstClick(this.outerHTML.slice(16,20), playerTurn);
        } else if (turn == 1){

          clickTwoPos = this.outerHTML.slice(16,20) //modify
          var noFriendlyFire = secondClick(clickOnePos, clickTwoPos)
          if (noFriendlyFire){
            playerTurn = playerSwitch(playerTurn);
            turn --;
          }
          display()
        }
      })
    }
  }
})
